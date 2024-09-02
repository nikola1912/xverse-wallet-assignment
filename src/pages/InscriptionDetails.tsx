import { useParams } from "react-router-dom";

import Header from "../components/ui/Header";
import { useInscriptionDetails } from "../data/useInscriptionDetails";
import InscriptionAttribute from "../components/business/InscriptionAttribute";

interface InscriptionDetailsParams {
  address: string;
  inscriptionId: string;
}

const InscriptionDetails = () => {
  const { address, inscriptionId } =
    useParams() as unknown as InscriptionDetailsParams;

  const { inscription, content, isLoading, error } = useInscriptionDetails(
    address,
    inscriptionId,
  );

  if (error) {
    return <p className="mt-4 text-center text-red-500">{error}</p>;
  }

  if (!inscription || isLoading) {
    return <p className="mt-4 text-center">Loading...</p>;
  }

  const isContentValid = inscription.content_type !== null;
  const isContentImageType =
    isContentValid && inscription.content_type.startsWith("image/");

  return (
    <div>
      <Header showBackButton title="Details" />
      {isContentValid &&
        (isContentImageType ? (
          <img
            src={`https://ord.xverse.app/content/${inscriptionId}`}
            className="mx-auto mb-6 w-full max-w-md rounded-lg"
          />
        ) : (
          <p className="bg-input mb-6 break-words rounded-lg p-3 text-sm">
            {content}
          </p>
        ))}
      <h1 className="mb-4 font-semibold">Inscription {inscription?.number}</h1>
      <hr className="border-input mb-6 border-2" />
      <div className="mb-14">
        <div className="mb-6">
          <h2 className="text-label mb-1 text-xs">Inscription ID</h2>
          <p className="break-words text-sm">{inscriptionId}</p>
        </div>
        <div className="mb-6">
          <h2 className="text-label mb-1 text-xs">Owner Address</h2>
          <p className="break-words text-sm">{address}</p>
        </div>
      </div>
      <div>
        <h2 className="mb-8 font-semibold">Attributes</h2>
        <InscriptionAttribute label="Output Value" value={inscription.value} />
        <InscriptionAttribute
          label="Content Type"
          value={inscription.content_type}
        />
        <InscriptionAttribute
          label="Content Length"
          value={`${inscription.content_length} bytes`}
        />
        <InscriptionAttribute label="Location" value={inscription.location} />
        <InscriptionAttribute
          label="Genesis Transaction"
          value={inscription.genesis_tx_id}
        />
      </div>
    </div>
  );
};

export default InscriptionDetails;
