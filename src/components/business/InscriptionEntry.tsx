import { FC } from "react";
import { Link } from "react-router-dom";

import ArrowRightIcon from "../icons/ArrowRightIcon";
import IconButton from "../ui/IconButton";
import { ROUTES } from "../../router";

interface InscriptionEntryProps {
  address: string;
  inscriptionId: string;
}

const InscriptionEntry: FC<InscriptionEntryProps> = ({
  address,
  inscriptionId,
}) => {
  return (
    <li className="py-4 text-sm">
      <Link
        to={ROUTES.inscriptionDetails
          .replace(":address", address)
          .replace(":inscriptionId", inscriptionId)}
        className="flex w-full items-center"
      >
        <span className="max-w-full truncate">Inscription {inscriptionId}</span>
        <IconButton>
          <ArrowRightIcon />
        </IconButton>
      </Link>
    </li>
  );
};

export default InscriptionEntry;
