import { ThemeMainColorInterface } from "@/interfaces/ThemeColorInterface/ThemeColorInterface"
import { ThemeProps } from "@/types"
import styled from "@emotion/native"

const SafeAreaView = styled.SafeAreaView<{
  backgroundColor?: keyof ThemeMainColorInterface
}>((props) => {
  const { getMainColor } = props.theme as ThemeProps

  return {
    flex: 1,
    backgroundColor: getMainColor(props.backgroundColor ?? "background"),
  }
})

export default SafeAreaView
