import { useState } from "react";

const useDarkMode = () => {
  const [value, setValue] = useState(false);
  const handleClick = () => {
    setValue(!value);
  };
  return [value, setValue, handleClick];
};

export default useDarkMode;
