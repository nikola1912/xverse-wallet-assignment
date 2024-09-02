import { FC } from "react";

import ArrowRightIcon from "../icons/ArrowRightIcon";
import IconButton from "../ui/IconButton";

interface InscriptionEntryProps {
  inscriptionId: string;
}

const InscriptionEntry: FC<InscriptionEntryProps> = ({ inscriptionId }) => {
  return (
    <li className="flex items-center justify-between py-4 text-sm">
      <span className="max-w-full truncate">Inscription {inscriptionId}</span>
      <IconButton>
        <ArrowRightIcon />
      </IconButton>
    </li>
  );
};

export default InscriptionEntry;
