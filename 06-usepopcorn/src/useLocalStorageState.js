import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const [vaule, setVaule] = useState(function () {
    const storeValue = localStorage.getItem("key");
    return storeValue ? JSON.parse(storeValue) : initialState;
  });

  // use localStorage
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(vaule));
    },
    [vaule, key]
  );

  return [vaule, setVaule];
}
