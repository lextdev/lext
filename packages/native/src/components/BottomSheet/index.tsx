import { css } from "@emotion/native";
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Pressable, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideOutDown,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import { useKeyboard } from "../../hooks";
import Box from "../Box";
import Stack from "../Stack";

export const HEIGHT = 280;
export const OVERDRAG = 25;

export const BACKGROUND_COLOR = "#FFF";
export const BACKDROP_COLOR = "rgba(0, 0, 0, 0.5)";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type BottomSheetProps = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  height?: number;
  activePressable?: boolean;
};

export const backdrop = css({
  position: "absolute",
  backgroundColor: BACKDROP_COLOR,
  top: -100,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1,
});

const BottomSheet: FC<BottomSheetProps> = ({
  isOpen,
  setOpen,
  children,
  height,
  activePressable = true,
}) => {
  const [isReady, setReady] = useState(false);
  const { isKeyboardOpen, getKeyboardHeight } = useKeyboard();
  const sheet = css({
    backgroundColor: BACKGROUND_COLOR,
    height: height ?? HEIGHT,
    width: "100%",
    position: "absolute",
    bottom: -OVERDRAG * 1.1,
    borderTopRightRadius: 12.5,
    borderTopLeftRadius: 12.5,
    zIndex: 1,
  });

  const offset = useSharedValue(0);
  const heightValue = useSharedValue(height ?? HEIGHT);

  const toggleSheet = () => {
    setOpen(!isOpen);
    offset.value = 0;
  };

  const pan = Gesture.Pan()
    .onChange((event) => {
      const offsetDelta = event.changeY + offset.value;

      const clamp = Math.max(-OVERDRAG, offsetDelta);
      offset.value = offsetDelta > 0 ? offsetDelta : withSpring(clamp);
    })
    .onFinalize(() => {
      if (offset.value < (height ?? HEIGHT) / 3) {
        offset.value = withSpring(0);
      } else {
        offset.value = withTiming(height ?? HEIGHT, {}, () => {
          runOnJS(toggleSheet)();
        });
      }
    });

  const translateY = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }],
    height: heightValue.value,
  }));

  useEffect(() => {
    if (isReady && isKeyboardOpen) {
      heightValue.value = withSpring(getKeyboardHeight + (height ?? HEIGHT));
    } else {
      heightValue.value = withSpring(height ?? HEIGHT);
    }
  }, [isKeyboardOpen, getKeyboardHeight, isReady]);

  useEffect(() => {
    if (!isReady) {
      setTimeout(() => {
        setReady(true);
      }, 1000);
    }

    if (!isOpen) {
      setReady(false);
    }
  }, [isReady, isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <AnimatedPressable
        style={backdrop}
        entering={FadeIn}
        exiting={FadeOut}
        onPress={() => {
          if (activePressable) {
            toggleSheet();
          }
        }}
      />
      <GestureDetector gesture={pan}>
        <Animated.View
          style={[sheet, translateY]}
          entering={SlideInDown.springify().damping(15)}
          exiting={SlideOutDown}
        >
          <Box>
            <Stack gap={25} justifyContent="space-between" alignItems="stretch">
              <Box paddingVertical={0} alignItems="center">
                <View
                  style={{
                    width: "15%",
                    height: 4,
                    backgroundColor: "#8E8E93",
                  }}
                />
              </Box>
              {children}
            </Stack>
          </Box>
        </Animated.View>
      </GestureDetector>
    </>
  );
};

export default BottomSheet;
