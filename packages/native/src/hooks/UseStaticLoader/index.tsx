import { useState } from "react";

const useStaticLoader = () => {
  const [getStaticLoader, setStaticLoader] = useState(false);

  return {
    getStaticLoader,
    setStaticLoader,
  };
};

export default useStaticLoader;
