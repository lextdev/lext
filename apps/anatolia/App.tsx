import React from "react";
import { SafeAreaView, Text } from "react-native";
import { Test, Welcome } from "@lextdev/core";
import { useHello } from "@lextdev/hook";

export default function App() {
  const { hello } = useHello();
  return (
    <SafeAreaView>
      <Welcome />
      <Test />
      <Text>{hello}</Text>
    </SafeAreaView>
  );
}
