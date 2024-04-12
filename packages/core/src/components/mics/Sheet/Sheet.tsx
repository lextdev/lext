import { SheetComponentProps } from "@/interfaces"
import { SheetRef } from "@/types"
import { css } from "@emotion/native"
import { useKeyboard } from "@lextdev/hook"
import { useTheme } from "@/hooks"
import { useWindowDimensions } from "react-native"
import Animated, {
  SlideInDown,
  SlideOutDown,
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated"
import Modal from "../Modal/Modal"
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from "react"
import View from "../View/View"

const _CLOSE_OPACITY = 0

const Sheet = forwardRef<SheetRef, SheetComponentProps>(
  (
    {
      variant,
      children,
      touchableNativeFeedback = true,
      animationDamping = 15,
      backdropColor,
      backdropOpacity,
      backgroundColor,
      borderRadius,
      ...props
    },
    ref,
  ) => {
    const window = useWindowDimensions()
    const [visible, setVisible] = useState(false)
    const [contentVisible, setContentVisible] = useState(false)
    const _opacityPressable = useSharedValue(0)
    const _paddingBottom = useSharedValue(0)
    const { isKeyboardOpen, getKeyboardHeight } = useKeyboard()
    const { getComponent, getMainColor } = useTheme()

    const variantName = variant ?? getComponent?.Sheet?.defaultVariant
    const defaultProps = getComponent?.Sheet?.variants[variantName] ?? {}

    useImperativeHandle(
      ref,
      () => ({
        open: () =>
          _opacityHandler(
            backdropOpacity ?? defaultProps.backdropOpacity ?? 0.3,
          ),
        close: () => _opacityHandler(_CLOSE_OPACITY),
      }),
      [visible],
    )

    const _nativeFeedBack = () => {
      if (touchableNativeFeedback) {
        _opacityHandler(_CLOSE_OPACITY)
      }
    }

    const _opacityHandler = useCallback((value: number) => {
      "worklet"

      _opacityPressable.value = withSpring(value, {
        damping: animationDamping,
      })
    }, [])

    const _paddingHandler = useCallback((value: number) => {
      "worklet"
      _paddingBottom.value = withSpring(value, {
        damping: animationDamping,
      })
    }, [])

    const __animatedPressableStyle = useAnimatedStyle(() => ({
      opacity: _opacityPressable.value,
    }))

    const __animatedContentStyle = useAnimatedStyle(() => ({
      paddingBottom: _paddingBottom.value + 25,
    }))

    const _pressableCss = css({
      width: window.width,
      height: window.height,
      position: "absolute",
      backgroundColor: getMainColor(
        backdropColor ?? defaultProps.backdropColor,
      ),
    })

    const _viewCss = css({
      position: "absolute",
      width: window.width,
      bottom: 0,
      borderTopLeftRadius: borderRadius ?? defaultProps.borderRadius,
      borderTopRightRadius: borderRadius ?? defaultProps.borderRadius,
      backgroundColor: getMainColor(
        backgroundColor ?? defaultProps.backgroundColor,
      ),
    })

    const _topStyle = {
      ...defaultProps.top,
      ...props.topStyle,
    }

    const _lineStyle = {
      ...defaultProps.line,
      ...props.lineStyle,
    }

    const handlerAnimation = (status: "open" | "close") => {
      if (status === "open") {
        setContentVisible(true)
        setVisible(true)
      }

      if (status === "close") {
        setTimeout(() => {
          setVisible(false)
        }, 260)
        setContentVisible(false)
      }
    }

    useAnimatedReaction(
      () => _opacityPressable.value,
      (next, previous) => {
        if (next > _CLOSE_OPACITY) {
          runOnJS(handlerAnimation)("open")
        }

        if (previous && next === _CLOSE_OPACITY) {
          runOnJS(handlerAnimation)("close")
        }
      },
      [],
    )

    useEffect(() => {
      if (isKeyboardOpen) {
        _paddingHandler(getKeyboardHeight)
      } else {
        _paddingHandler(0)
      }
    }, [isKeyboardOpen, getKeyboardHeight])

    return (
      <Modal visible={visible} transparent animationType={"none"}>
        <Animated.View
          style={[_pressableCss, __animatedPressableStyle]}
          onTouchStart={_nativeFeedBack}
        />

        {contentVisible && (
          <Animated.View
            entering={SlideInDown}
            exiting={SlideOutDown}
            style={[_viewCss, __animatedContentStyle]}
          >
            <View style={_topStyle}>
              <View {..._lineStyle} />
            </View>
            {children}
          </Animated.View>
        )}
      </Modal>
    )
  },
)

Sheet.displayName = "Sheet"

export default Sheet
