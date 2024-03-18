import { ChildrenInterface, TextStyle, ViewStyle } from "@/interfaces"
import { useTheme } from "@/hooks"
import Box from "@/components/mics/Box/Box"
import Group from "@/components/mics/Group/Group"
import React, { FC, ReactNode } from "react"
import Stack from "@/components/mics/Stack/Stack"
import Text from "@/components/typography/Text/Text"

export type CustomLayoutProps = {
  labelStyle?: TextStyle
  descriptionStyle?: TextStyle
  layoutStyle?: ViewStyle
  errorLayoutStyle?: ViewStyle
  gap?: number
  variant?: string
  label?: string
  description?: string
  error?: string
  left?: ReactNode
  right?: ReactNode
}

const Layout: FC<CustomLayoutProps & ChildrenInterface> = (props) => {
  const { getComponent } = useTheme()
  const { variant, label, description, error, children, left, right } = props

  const variantName = variant ?? getComponent?.Input?.defaultVariant
  const defaultProps = getComponent?.Input?.variants[variantName]

  const labelStyle = props.labelStyle ?? defaultProps.label
  const descriptionStyle = props.descriptionStyle ?? defaultProps.description
  const layoutStyle = props.layoutStyle ?? defaultProps.layout
  const errorLayoutStyle = props.errorLayoutStyle ?? defaultProps.errorLayout

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
        <Text>{error}</Text>
      ) : (
        <Text {...descriptionStyle}>{description}</Text>
      )}
    </Stack>
  )
}

export default Layout
