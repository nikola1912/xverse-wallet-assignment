export interface Sat {
  number: string;
  rarity_ranking: string;
  offset: number;
}

export interface Inscription {
  id: string;
  offset: number;
  content_type: string;
}

export interface Result {
  txid: string;
  vout: number;
  block_height: number;
  value: number;
  sats: Sat[];
  inscriptions: Inscription[];
}

export interface SearchInscriptionResult {
  limit: number;
  offset: number;
  total: number;
  results: Result[];
}

export interface InscriptionDetails {
  id: string;
  number: number;
  address: string;
  genesis_address: string;
  genesis_block_height: number;
  genesis_block_hash: string;
  genesis_tx_id: string;
  genesis_fee: number;
  genesis_timestamp: number;
  location: string;
  output: string;
  offset: number;
  sat_ordinal: number;
  sat_rarity: string;
  sat_coinbase_height: number;
  mime_type: string;
  content_type: string;
  content_length: number;
  tx_id: string;
  timestamp: number;
  value: number;
}
