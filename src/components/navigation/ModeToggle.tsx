import React from "react";
import Toggle from "./Toggle";

const ModeToggle: React.FC = () => {
  return (
    <div className=" flex mr-4 justify-end ">
      <div className="fixed z-10">
        <Toggle />
      </div>
    </div>
  );
};

export default ModeToggle;
