import { FC } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "./IconButton";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
}

const Header: FC<HeaderProps> = ({ title, showBackButton }) => {
  const navigate = useNavigate();

  return showBackButton ? (
    <div className="mb-4 flex items-center text-sm">
      <IconButton onClick={() => navigate(-1)}>
        <ArrowLeftIcon />
      </IconButton>
      <div className="flex-1 text-center text-sm">{title}</div>
      <IconButton disabled style={{ opacity: 0 }}>
        <ArrowLeftIcon />
      </IconButton>
    </div>
  ) : (
    <div className="flex items-center text-sm">
      <div className="mb-4 flex-1 text-center text-sm">{title}</div>
    </div>
  );
};

export default Header;
