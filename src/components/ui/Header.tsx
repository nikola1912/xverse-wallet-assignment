import { FC } from "react";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return <div className="mb-4 text-center text-sm">{title}</div>;
};

export default Header;
