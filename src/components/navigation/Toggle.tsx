import { useContext, useState } from "react";
import { ThemeContext } from "../../context/themeContext";

import { FaSun, FaMoon } from "react-icons/fa";

const Toggle: React.FC = () => {
  const { theme, themeChangeHandler } = useContext(ThemeContext);

  return (
    <div className="flex items-center  ">
      <button
        className=" sidebar-icon lg:text-2xl text-2xl text-gray-900 dark:text-fuchsia-500 dark:hover:text-fuchsia-600 hover:text-fuchsia-600"
        onClick={themeChangeHandler}
      >
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default Toggle;
