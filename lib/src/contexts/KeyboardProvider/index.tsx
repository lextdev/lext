import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Keyboard, KeyboardEvent } from "react-native";

interface KeyboardContextProps {
  isKeyboardOpen: boolean;
}

const KeyboardContext = createContext<KeyboardContextProps | undefined>(
  undefined,
);

interface KeyboardProviderProps {
  children: ReactNode;
}

const KeyboardProvider: React.FC<KeyboardProviderProps> = ({ children }) => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      handleKeyboardDidShow,
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      handleKeyboardDidHide,
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleKeyboardDidShow = (event: KeyboardEvent) => {
    setIsKeyboardOpen(true);
  };

  const handleKeyboardDidHide = (event: KeyboardEvent) => {
    setIsKeyboardOpen(false);
  };

  return (
    <KeyboardContext.Provider value={{ isKeyboardOpen }}>
      {children}
    </KeyboardContext.Provider>
  );
};

export const useKeyboardPerform = (): KeyboardContextProps => {
  const context = useContext(KeyboardContext);
  if (!context) {
    throw new Error("useKeyboard must be used within a KeyboardProvider");
  }
  return context;
};

export default KeyboardProvider;
