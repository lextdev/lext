import { useEffect, useState } from "react";
import { Keyboard } from "react-native";

const useKeyboard = () => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [getKeyboardHeight, setKeyboardHeight] = useState(0);
  const closeKeyboard = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      event => {
        setIsKeyboardOpen(true);
        setKeyboardHeight(event.endCoordinates.height);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsKeyboardOpen(false);
        setKeyboardHeight(0);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  });

  return {
    isKeyboardOpen,
    getKeyboardHeight,
    closeKeyboard,
  };
};

export default useKeyboard;
