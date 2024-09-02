import { FC, FormEvent, useState } from "react";

import Button from "../ui/Button";

interface AddressLookupProps {
  isLoading: boolean;
  onLookup: (address: string) => void;
}

const AddressLookup: FC<AddressLookupProps> = ({ isLoading, onLookup }) => {
  const [address, setAddress] = useState("");

  const handleSubmitLookup = (event: FormEvent) => {
    event.preventDefault();
    onLookup(address);
  };

  return (
    <form className="mb-4" onSubmit={handleSubmitLookup}>
      <label className="mb-2 block text-sm" htmlFor="address-input">
        Owner Bitcoin Address:
      </label>
      <input
        required
        minLength={3}
        id="address-input"
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="bg-input mb-4 w-full p-2 text-sm"
      />
      <Button loading={isLoading} type="submit">
        Look up
      </Button>
    </form>
  );
};

export default AddressLookup;
