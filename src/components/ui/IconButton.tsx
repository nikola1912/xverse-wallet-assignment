import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

const IconButton: FC<IconButtonProps> = ({ children, ...restProps }) => {
  return (
    <button
      type="button"
      className="hover:bg-input rounded-full p-3 text-sm"
      {...restProps}
    >
      {children}
    </button>
  );
};

export default IconButton;
