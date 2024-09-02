import { ButtonHTMLAttributes, FC, ReactNode } from "react";

import SpinnerIcon from "../icons/SpinnerIcon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  loading?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  loading = false,
  ...restProps
}) => {
  return (
    <button
      className={`bg-primary flex w-full items-center justify-center rounded-lg py-2 ${
        loading ? "cursor-not-allowed opacity-70" : "hover:opacity-90"
      }`}
      disabled={loading}
      {...restProps}
    >
      {loading ? <SpinnerIcon /> : children}
    </button>
  );
};

export default Button;
