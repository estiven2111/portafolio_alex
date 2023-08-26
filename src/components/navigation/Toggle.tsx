import { useContext, useState } from "react";
import { ThemeContext } from "../../context/themeContext";

import { FaSun, FaMoon } from "react-icons/fa";

const Toggle: React.FC = () => {
  const { theme, themeChangeHandler } = useContext(ThemeContext);

  return (
    <div className="flex items-center  ">
      <button
        className=" sidebar-icon lg:text-2xl text-2xl text-gray-900 dark:text-[#ff7700d3] dark:hover:text-[#ff7700d3] hover:text-[#ff7700d3]"
        onClick={themeChangeHandler}
      >
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default Toggle;
