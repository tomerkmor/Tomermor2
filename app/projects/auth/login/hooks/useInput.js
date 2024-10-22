import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue)

  const handleInputChange = (event) => {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  };

  const handleInputBlur = () => {
    setDidEdit(true);
  };

  const handleReset = () => {
    setEnteredValue("");
    setDidEdit(false);
  };

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    handleReset,
    hasError: didEdit && !valueIsValid
  };
}
