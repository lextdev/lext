import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { StyleSheet } from "react-native";
import { ActivityIndicator, LoadingOverlay, Text } from "../components";

export const LoadingOverlayContext = createContext<boolean>(false);
export const LoadingOverlayContextDispatch = createContext<
  Dispatch<SetStateAction<boolean>>
>(() => {});

type LoadingOverlayProps = {
  children: ReactNode;
  content: ReactNode;
};

const LoadingOverlayProvider: FC<LoadingOverlayProps> = ({
  children,
  content,
}) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingOverlayContext.Provider value={loading}>
      <LoadingOverlayContextDispatch.Provider value={setLoading}>
        <LoadingOverlay
          style={[
            StyleSheet.absoluteFillObject,
            {
              position: "absolute",
              zIndex: 9999,
              display: loading ? "flex" : undefined,
            },
          ]}
        >
          {content}
        </LoadingOverlay>
        {children}
      </LoadingOverlayContextDispatch.Provider>
    </LoadingOverlayContext.Provider>
  );
};

export default LoadingOverlayProvider;
