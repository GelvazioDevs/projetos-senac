export interface NCMQuery {
  code: string;
  originState?: string;
  destinationState?: string;
  operationType: 'purchase' | 'sale' | 'import';
  taxRegime: 'simple' | 'actual' | 'presumed';
}

export interface TaxCalculation {
  icmsRate: number;
  icmsValue: number;
  ipiRate: number;
  ipiValue: number;
  pisRate: number;
  pisValue: number;
  cofinsRate: number;
  cofinsValue: number;
  totalTaxes: number;
}

export interface QueryHistory {
  id: string;
  date: Date;
  query: NCMQuery;
  result: TaxCalculation;
}