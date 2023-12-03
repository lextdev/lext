import { useContext } from "react";

import { LoaderContext, LoaderContextDispatch } from "../../contexts";

const useLoader = () => {
  const isShowLoading = useContext(LoaderContext);
  const setLoading = useContext(LoaderContextDispatch);
  const openLoading = () => setLoading(true);
  const hideLoading = () => setTimeout(() => setLoading(false), 2000);

  return { openLoading, hideLoading, isShowLoading };
};

export default useLoader;
