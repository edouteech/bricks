import { FC, InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

export interface InputIconsProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: IconType;
  inputType: string;
}

const InputIcons: FC<InputIconsProps> = ({
  icon: Icon,
  inputType,
  value,
  ...props
}) => {


  return (
    <div className="relative w-full">
      <input
        type={inputType}
        value={value}
        className="w-full pl-10 py-2 border rounded-lg border-gray-300 transition duration-300 ease-in-out focus:outline-none focus:border-gray-400 hover:border-gray-400"
        {...props}
      />
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Icon className="w-5 h-5 text-blue-500" />
      </span>
    </div>
  );
};

export default InputIcons;
