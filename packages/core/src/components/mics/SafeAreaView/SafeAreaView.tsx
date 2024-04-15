import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context"
import { SafeAreaViewComponentProps } from "@/interfaces"
import { ThemeProps } from "@/types"
import styled from "@emotion/native"

const SafeAreaView = styled(RNSafeAreaView)<SafeAreaViewComponentProps>((
  props,
) => {
  const { styleParse } = props.theme as ThemeProps

  return styleParse({
    flex: 1,
    backgroundColor: props.backgroundColor,
  })
})

export default SafeAreaView
