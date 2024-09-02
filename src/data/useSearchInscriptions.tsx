import { useState, useCallback } from "react";

import { SearchInscriptionResult } from "./typings";

interface UseSearchInscriptionsResult {
  inscriptions: string[];
  isLoading: boolean;
  hasMore: boolean;
  loadMore: () => void;
  search: (address: string) => void;
  error: string | null;
}

const LIMIT = 10;

const useSearchInscriptions = (): UseSearchInscriptionsResult => {
  const [inscriptions, setInscriptions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchInscriptions = useCallback(
    async (address: string, offset: number) => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(
          `https://api-3.xverse.app/v1/address/${address}/ordinal-utxo?limit=${LIMIT}&offset=${offset}`,
        );
        const data: SearchInscriptionResult = await response.json();

        const inscriptionIds = data.results
          .map((entry) =>
            entry.inscriptions.map((inscription) => inscription.id),
          )
          .flat();

        setInscriptions((prevInscriptions) => [
          ...prevInscriptions,
          ...inscriptionIds,
        ]);
        setHasMore(offset + LIMIT < data.total);
      } catch (error) {
        console.error("Failed to fetch inscriptions:", error);
        setError("Unable to fetch results or no matching results.");
        setHasMore(false);
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const loadMore = () => {
    if (address) {
      const newOffset = offset + LIMIT;
      setOffset(newOffset);
      fetchInscriptions(address, newOffset);
    }
  };

  const search = (newAddress: string) => {
    setAddress(newAddress);
    setInscriptions([]);
    setOffset(0);
    setHasMore(false);
    fetchInscriptions(newAddress, 0);
  };

  return {
    inscriptions,
    isLoading,
    hasMore,
    loadMore,
    search,
    error,
  };
};

export { useSearchInscriptions };
