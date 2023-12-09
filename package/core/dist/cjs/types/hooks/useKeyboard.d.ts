declare const useKeyboard: () => {
    isKeyboardOpen: boolean;
    getKeyboardHeight: number;
    closeKeyboard: () => void;
};
export default useKeyboard;
