import { FC } from "react";
import { IconType } from "react-icons";

export interface SocialIconsProps {
  name: "google" | "facebook" | "apple";
  size?: number;
  color?: string;
  onClick?: () => void;
}

const SocialIcons: FC<SocialIconsProps> = ({ name, size = 24, color, onClick }) => {
  let Icon: IconType;

  switch (name) {
    case "google":
      Icon = require("react-icons/fa").FaGoogle;
      break;
    case "facebook":
      Icon = require("react-icons/fa").FaFacebook;
      break;
    case "apple":
      Icon = require("react-icons/fa").FaApple;
      break;
    default:
      throw new Error(`Unsupported social icon: ${name}`);
  }

  return (
    <div
      className="w-10 h-10 flex justify-center items-center text-center rounded-full p-3"
      style={{ backgroundColor: "#ecf2f7", color: color || "#000" }}
      onClick={onClick}
    >
      <Icon size={size} />
    </div>
  );
};

export default SocialIcons;
