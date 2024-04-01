import { FlatList, Pressable, View } from "react-native"
import { SelectDataProps } from "@/types"
import { TextStyle, ViewStyle } from "@/interfaces"
import { useTheme } from "@/hooks"
import Modal, { CustomModalProps } from "@/components/mics/Modal/Modal"
import React, { FC } from "react"
import Stack from "@/components/mics/Stack/Stack"
import Text from "@/components/typography/Text/Text"

type SelectProps = CustomModalProps & {
  data: SelectDataProps[]
  onChange?: (value: string | number) => void
  variant?: string
  itemSeparator?: JSX.Element
  value?: string | number
  itemStyle?: ViewStyle
  itemActiveStyle?: ViewStyle
  itemDescriptionStyle?: TextStyle
  itemTextStyle?: TextStyle
  itemLeftStyle?: ViewStyle
}

const Select: FC<SelectProps> = ({
  data,
  value,
  onChange,
  variant,
  itemSeparator,
  itemStyle,
  itemActiveStyle,
  itemDescriptionStyle,
  itemLeftStyle,
  itemTextStyle,
  ...props
}) => {
  const { getComponent, styleParse } = useTheme()

  const variantName = variant ?? getComponent?.Select?.defaultVariant
  const defaultProps = getComponent?.Select?.variants[variantName]

  const itemStyleProp = { ...defaultProps.itemStyle, ...itemStyle }
  const itemLeftStyleProp = { ...defaultProps.itemLeftStyle, ...itemLeftStyle }
  const itemTextStyleProp = { ...defaultProps.itemTextStyle, ...itemTextStyle }
  const itemActiveStyleProp = {
    ...defaultProps.itemActiveStyle,
    ...itemActiveStyle,
  }
  const itemDescriptionStyleProp = {
    ...defaultProps.itemDescriptionStyle,
    ...itemDescriptionStyle,
  }

  const onHandleChange = (value: string | number) => {
    if (onChange) {
      onChange(value)
    }
  }

  return (
    <Modal {...props}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.value.toString()}
        ItemSeparatorComponent={() => itemSeparator}
        renderItem={({ index, item }) => (
          <Pressable
            key={index}
            style={[
              styleParse({
                gap: 10,
                alignItems: "center",
                ...itemStyleProp,
                flexDirection: "row",
              }),
              item.value === value && styleParse(itemActiveStyleProp),
            ]}
            onPress={() => onHandleChange(item.value)}
          >
            {item.left && (
              <View style={styleParse(itemLeftStyleProp)}>{item.left}</View>
            )}
            <Stack gap={0} justifyContent="center">
              <Text style={styleParse(itemTextStyleProp)}>{item.label}</Text>
              {item.description && (
                <Text style={styleParse(itemDescriptionStyleProp)}>
                  {item.description}
                </Text>
              )}
            </Stack>
          </Pressable>
        )}
      />
    </Modal>
  )
}

export default Select
