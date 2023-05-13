import { FC } from "react";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset"; 
}

const Button: FC<ButtonProps> = ({ onClick, className, children, type = "button" }) => { // Ajouter le paramètre `type` et la valeur par défaut "button"
  return (
    <button
      type={type} 
      className={`px-4 py-2 w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
