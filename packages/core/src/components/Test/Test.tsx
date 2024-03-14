import React, { useEffect } from "react";
import { Text } from "react-native";
import { Alert } from "@/libs";
const Test = () => {
  useEffect(() => {
    Alert({
      title: "Hello World!",
    });
  }, []);

  return <Text>Hello World</Text>;
};

export default Test;
