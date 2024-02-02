import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { StyleSheet } from "react-native";
import { LoadingOverlay } from "../components";

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
        {loading && (
          <LoadingOverlay
            style={[
              StyleSheet.absoluteFillObject,
              {
                position: "absolute",
                zIndex: 9999,
              },
            ]}
          >
            {content}
          </LoadingOverlay>
        )}
        {children}
      </LoadingOverlayContextDispatch.Provider>
    </LoadingOverlayContext.Provider>
  );
};

export default LoadingOverlayProvider;
