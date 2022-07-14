import AsyncStorage from '@react-native-async-storage/async-storage';

const getItem = async (key: string) => {
  const result = await AsyncStorage.getItem(key);
  return JSON.parse(result) || result;
};

const setItem = async (key: string, params: any) => {
  const result = await AsyncStorage.setItem(key, JSON.stringify(params));
  return result;
};

const removeItem = async (key: string) => {
  return await AsyncStorage.removeItem(key);
};

const clear = async () => {
  return await AsyncStorage.clear();
};

export { setItem, getItem, removeItem, clear };
