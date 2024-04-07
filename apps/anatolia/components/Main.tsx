import { FlatList, SafeAreaView, Text, View } from "@lextdev/core"
import { StatusBar } from "expo-status-bar"
import React from "react"

const Main = () => {
  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <View flex={1}>
        <Text>Hello World</Text>
      </View>
      <FlatList
        flex={1}
        backgroundColor="primary"
        data={[
          {
            label: "Message",
          },
        ]}
        renderItem={() => <Text>Hello World</Text>}
      />
    </SafeAreaView>
  )
}

export default Main
