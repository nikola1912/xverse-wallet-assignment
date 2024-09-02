import { FC } from "react";

interface InscriptionAttributeProps {
  label: string;
  value?: string | number;
}

const InscriptionAttribute: FC<InscriptionAttributeProps> = ({
  label,
  value,
}) => {
  return (
    <div className="mb-4">
      <h3 className="text-label mb-1 text-xs">{label}</h3>
      <p className="bg-input break-words rounded-lg p-3 text-sm">{value}</p>
    </div>
  );
};

export default InscriptionAttribute;
