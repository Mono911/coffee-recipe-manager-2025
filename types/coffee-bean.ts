export interface CoffeeBean {
  id: string;
  name: string;
  origin: string;
  roast: string; // changed from roast_level to match DB
  processing_method?: string; // changed from processing to match DB
  farm?: string;
  altitude_m?: number; // changed from altitude (text) to altitude_m (number)
  variety?: string;
  flavor_notes?: string[]; // changed from tasting_notes (text) to flavor_notes (array)
  purchase_date?: string;
  roast_date?: string;
  quantity_g?: number;
  quantity_unit?: string; // added to match DB
  price_per_kg?: number; // changed from price_per_bag to match DB
  currency?: string; // added to match DB
  notes?: string;
  acidity?: string; // added to match DB
  type?: string; // added to match DB
  supplier?: string; // added to match DB
  created_at: string;
  updated_at: string;
  _error?: string;
}

export type CreateCoffeeBeanData = Omit<CoffeeBean, 'id' | 'created_at' | 'updated_at'>

export interface CoffeeBeanFilters {
  search?: string
  processing?: string[]
  origin?: string[]
  roast?: string[]
  type?: string[]
  acidity?: string[]
}
