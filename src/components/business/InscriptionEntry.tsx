import { FC } from "react";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import IconButton from "../ui/IconButton";

interface Inscription {
  id: string;
}

interface InscriptionEntryProps {
  inscription: Inscription;
}

const InscriptionEntry: FC<InscriptionEntryProps> = ({ inscription }) => {
  return (
    <li className="flex items-center justify-between py-4 text-sm">
      <span>Inscription {inscription.id}</span>
      <IconButton>
        <ArrowRightIcon />
      </IconButton>
    </li>
  );
};

export default InscriptionEntry;
