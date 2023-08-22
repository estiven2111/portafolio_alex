import { HTMLAttributes } from "react";

interface SideBarIconProps {
  icon: React.ReactNode;
  text: String;
}

const SideBarIcon: React.FC<SideBarIconProps> = ({ icon, text }) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100"> {text}</span>
    </div>
  );
};

export default SideBarIcon;
