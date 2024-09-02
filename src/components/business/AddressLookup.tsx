import { FC, useState } from "react";

interface AddressLookupProps {
  onLookup: (address: string) => void;
}

const AddressLookup: FC<AddressLookupProps> = ({ onLookup }) => {
  const [address, setAddress] = useState("");

  const handleLookup = () => {
    // Do stuff!
    onLookup(address);
  };

  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm" htmlFor="address-input">
        Owner Bitcoin Address:
      </label>
      <input
        id="address-input"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="bg-input mb-4 w-full p-2 text-sm"
      />
      <button
        onClick={handleLookup}
        className="bg-primary w-full rounded-lg py-2 hover:opacity-90"
      >
        Look up
      </button>
    </div>
  );
};

export default AddressLookup;
