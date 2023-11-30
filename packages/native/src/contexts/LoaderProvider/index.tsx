import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export const LoaderContext = createContext<boolean>(false);
export const LoaderContextDispatch = createContext<
  Dispatch<SetStateAction<boolean>>
>(() => null);

type LoaderProviderProps = {
  children: ReactNode;
};

function LoaderProvider({ children }: LoaderProviderProps) {
  const [loader, setLoader] = useState<boolean>(false);

  return (
    <LoaderContext.Provider value={loader}>
      <LoaderContextDispatch.Provider value={setLoader}>
        {children}
      </LoaderContextDispatch.Provider>
    </LoaderContext.Provider>
  );
}

export default LoaderProvider;
