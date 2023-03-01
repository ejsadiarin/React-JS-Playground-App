import { useState } from "react"

export const useToggle = (initialVal = false) => {
  const [state, setState] = useState(initialVal);

  const toggle = () => {
    setState((notViewing) => !notViewing);
  }

  return [state, toggle];
}