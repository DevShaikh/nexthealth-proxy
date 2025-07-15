export interface NextHealthAPIResponse<Data> {
  code: boolean;
  description: string;
  error: string;
  data: Data;
  count: number;
}

export interface Location {
  id: number;
  name: string;
  institution_id: number;
  street_address: string;
  street_address_2: string;
  city: string;
  state: string;
  zip_code: string;
  created_at: string;
  updated_at: string;
  latitude: number;
  longitude: number;
  phone_number: string;
  foreign_id: string;
  foreign_id_type: string;
  email: string;
  tz: string;
  last_sync_time: string;
  insert_appt_client: string;
  map_by_operatory: string;
  set_availability_by_operatory: boolean;
  inactive: string;
}
