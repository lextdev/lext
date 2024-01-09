import AsyncStorage from "@react-native-async-storage/async-storage";

const useStore = () => {
  const store = AsyncStorage;

  return {
    ...store,
  };
};

export default useStore;
