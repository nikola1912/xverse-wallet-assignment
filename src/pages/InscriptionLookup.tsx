import { useState } from "react";

import { useSearchInscriptions } from "../data";
import Header from "../components/ui/Header";
import AddressLockup from "../components/business/AddressLookup";
import InscriptionEntry from "../components/business/InscriptionEntry";
import Button from "../components/ui/Button";

const InscriptionLookup = () => {
  const [address, setAddress] = useState<string | null>(null);

  const { search, inscriptions, isLoading, error, hasMore, loadMore } =
    useSearchInscriptions();

  const handleLookup = (address: string) => {
    search(address);
    setAddress(address);
  };

  return (
    <div>
      <Header title="Ordinal Inscription Lookup" />
      <AddressLockup isLoading={isLoading} onLookup={handleLookup} />
      <h2 className="mb-6 text-sm">Results</h2>
      {error && <p className="mt-4 text-center text-red-500">{error}</p>}
      {inscriptions && address && (
        <ul>
          {inscriptions.map((inscription) => (
            <InscriptionEntry
              key={inscription}
              address={address}
              inscriptionId={inscription}
            />
          ))}
        </ul>
      )}
      {isLoading && <p className="mt-4 text-center">Loading...</p>}
      {hasMore && !isLoading && (
        <Button onClick={loadMore} loading={isLoading}>
          Load More
        </Button>
      )}
    </div>
  );
};

export default InscriptionLookup;
