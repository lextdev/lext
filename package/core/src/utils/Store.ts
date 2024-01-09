import AsyncStorage from "@react-native-async-storage/async-storage";

async function get(key: string) {
  return await AsyncStorage.getItem(key);
}

async function set(key: string, data: string | object) {
  return await AsyncStorage.setItem(key, JSON.stringify(data));
}

async function del(key: string) {
  return await AsyncStorage.removeItem(key);
}
