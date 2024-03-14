import { Alert } from "@/libs";
import React, { useEffect } from "react";
import { Text } from "react-native";

const Welcome = () => {
  useEffect(() => {
    Alert({
      title: "Welcome Message",
    });
  }, []);

  return <Text>Hello World Welcome</Text>;
};

export default Welcome;
