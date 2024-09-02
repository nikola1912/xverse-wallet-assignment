import { useState } from "react";

import Header from "../components/ui/Header";
import AddressLockup from "../components/business/AddressLookup";
import InscriptionEntry from "../components/business/InscriptionEntry";

const InscriptionLookup = () => {
  const [results, setResults] = useState<string[]>([
    "2f83b9b0",
    "fe7cff70",
    "b81979b1",
  ]);

  const handleLookup = (results: any) => {
    console.log(results);
  };

  return (
    <div className="bg-background font-medium text-white">
      <div className="mx-auto min-h-screen max-w-screen-sm px-4 pt-14">
        <Header title="Ordinal Inscription Lookup" />
        <AddressLockup onLookup={handleLookup} />
        <h2 className="mb-6 text-sm">Results</h2>
        <ul>
          {results.map((result) => (
            <InscriptionEntry key={result} inscription={{ id: result }} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InscriptionLookup;
