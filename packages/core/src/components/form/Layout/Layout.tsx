import { ChildrenInterface, FormLayoutComponentProps } from "@/interfaces"
import { useTheme } from "@/hooks"
import Box from "@/components/mics/Box/Box"
import Group from "@/components/mics/Group/Group"
import React, { FC } from "react"
import Stack from "@/components/mics/Stack/Stack"
import Text from "@/components/typography/Text/Text"

const Layout: FC<FormLayoutComponentProps & ChildrenInterface> = (props) => {
  const { getComponent } = useTheme()
  const { variant, label, description, error, children, left, right } = props

  const variantName = variant ?? getComponent?.Input?.defaultVariant
  const defaultProps = getComponent?.Input?.variants[variantName]

  const labelStyle = { ...defaultProps.label, ...props.labelStyle }
  const descriptionStyle = {
    ...defaultProps.description,
    ...props.descriptionStyle,
  }
  const layoutStyle = { ...defaultProps.layout, ...props.layoutStyle }
  const errorLayoutStyle = {
    ...defaultProps.errorLayout,
    ...props.errorLayoutStyle,
  }
  const errorStyle = { ...defaultProps.error, ...props.errorStyle }

  let boxMergeStyle = { ...layoutStyle }

  if (error && errorLayoutStyle) {
    boxMergeStyle = { ...boxMergeStyle, ...errorLayoutStyle }
  }

  return (
    <Stack gap={props.gap}>
      <Text {...labelStyle}>{label}</Text>
      <Box {...boxMergeStyle}>
        <Group
          flex={1}
          gap={5}
          justifyContent="space-between"
          alignItems="center"
        >
          {left && left}
          {children}
          {right && right}
        </Group>
      </Box>
      {error ? (
        <Text {...errorStyle}>{error}</Text>
      ) : (
        <Text {...descriptionStyle}>{description}</Text>
      )}
    </Stack>
  )
}

export default Layout
