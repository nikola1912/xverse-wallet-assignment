import { useState, useEffect } from "react";

import { InscriptionDetails } from "./typings";

interface UseInscriptionDetailsResult {
  inscription: InscriptionDetails | null;
  content: string | null;
  isLoading: boolean;
  error: string | null;
}

const useInscriptionDetails = (
  address: string,
  inscriptionId: string,
): UseInscriptionDetailsResult => {
  const [inscription, setInscription] = useState<InscriptionDetails | null>(
    null,
  );
  const [content, setContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInscriptionDetails = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(
          `https://api-3.xverse.app/v1/address/${address}/ordinals/inscriptions/${inscriptionId}`,
        );
        const inscriptionData: InscriptionDetails = await response.json();

        setInscription(inscriptionData);

        const contentResponse = await fetch(
          `https://ord.xverse.app/content/${inscriptionId}`,
        );
        const contentData = await contentResponse.text();

        setContent(contentData);
      } catch (error) {
        console.error("Failed to fetch inscriptions details:", error);

        setError("Unable to fetch inscription details or content.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchInscriptionDetails();
  }, [address, inscriptionId]);

  return { inscription, content, isLoading, error };
};

export { useInscriptionDetails };
