import { useContext } from "react";
import {
  LoadingOverlayContext,
  LoadingOverlayContextDispatch,
} from "../contexts/LoadingOverlayProvider";

const useLoadingOverlay = () => {
  const isLoading = useContext(LoadingOverlayContext);
  const setLoading = useContext(LoadingOverlayContextDispatch);

  return { isLoading, setLoading };
};

export default useLoadingOverlay;
