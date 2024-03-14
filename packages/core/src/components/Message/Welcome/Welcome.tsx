import React, { useEffect } from "react";
import { Text } from "react-native";
import { Alert } from "@/libs";

const Welcome = () => {
  useEffect(() => {
    Alert({
      title: "Welcome Message",
    });
  }, []);

  return <Text>Hello World Welcome!</Text>;
};

export default Welcome;
