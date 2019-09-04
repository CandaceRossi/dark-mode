import React from "react";
import {useLocalStorage} from "./useLocalStorage";

export const useDarkMode = (key, initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue);
    const handleChange = updatedValue => {
        document.classList.remove('dark-mode');
        setValue(updatedValue);
    }
    return [value, setValue, handleChange]
}