import { ThemeMainColorInterface } from "@/interfaces/ThemeColorInterface/ThemeColorInterface"
import { ThemeProps } from "@/types"
import styled from "@emotion/native"

const SafeAreaView = styled.SafeAreaView<{
  backgroundColor?: keyof ThemeMainColorInterface
}>((props) => {
  const { styleParse } = props.theme as ThemeProps

  return styleParse({
    flex: 1,
    backgroundColor: props.backgroundColor,
  })
})

export default SafeAreaView
