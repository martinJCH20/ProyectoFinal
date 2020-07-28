import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';

const setKeyStorage = (key, value) => {
  RNSecureKeyStore.set(key, value, {
    accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY
  }).then(
    (res) => {},
    (err) => {},
  );
};

const getKeyStorage = (key) => {
  return RNSecureKeyStore.get(key);
};

const removeKeyStore = async (key) => {
  try {
    RNSecureKeyStore.remove(key).then(
      (res) => {},
      (err) => {},
    );
  } catch (e) {}
};

export default {setKeyStorage, getKeyStorage, removeKeyStore};
