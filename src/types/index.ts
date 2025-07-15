/**
 * Interface for the standard NextHealth API Response wrapper.
 * This is a generic interface that can wrap any data type.
 */
export interface NextHealthAPIResponse<Data> {
  code: boolean;
  description: string;
  error: string;
  data: Data;
  count: number;
}

/**
 * Interface for the 'Location' object, as provided by you.
 * This is used for the 'locations' array within the Provider data.
 */
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

/**
 * Interface for the 'bio' object within the Provider data.
 */
export interface ProviderBio {
  city: string;
  state: string;
  gender: string;
  zip_code: string;
  new_patient: boolean;
  non_patient: boolean;
  phone_number: string;
  date_of_birth: string; // Consider using Date type if you parse it
  address_line_1: string;
  address_line_2: string;
  street_address: string;
  cell_phone_number: string;
  home_phone_number: string;
  work_phone_number: string;
}

/**
 * Interface for the 'provider_requestables' array items.
 */
export interface ProviderRequestable {
  location_id: number;
}

/**
 * Interface for the 'custom_recurrence' object within Availabilities.
 */
export interface CustomRecurrence {
  num: number;
  unit: string;
  ref: string; // Consider using Date type
}

/**
 * Interface for 'appointment_types' array items within Availabilities.
 */
export interface AppointmentType {
  id: number;
  name: string;
  parent_type: string;
  parent_id: number;
  minutes: number;
  bookable_online: boolean;
}

/**
 * Interface for the 'availabilities' array items within the Provider data.
 */
export interface ProviderAvailability {
  id: number;
  provider_id: number;
  location_id: number;
  operatory_id: number;
  begin_time: string; // Time string, e.g., "10:30"
  end_time: string; // Time string, e.g., "17:00"
  days: string[]; // Array of day names, e.g., ["Monday", "Tuesday"]
  specific_date: string; // Date string, e.g., "YYYY-MM-DD", consider Date type
  custom_recurrence: CustomRecurrence;
  tz_offset: string;
  active: boolean;
  synced: boolean;
  appointment_types: AppointmentType[];
}

/**
 * Main interface for the Provider data.
 * This now correctly uses your existing 'Location' interface for the 'locations' array.
 */
export interface Provider {
  id: number;
  email: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  name: string;
  created_at: string; // Consider using Date type
  updated_at: string; // Consider using Date type
  institution_id: number;
  foreign_id: string;
  foreign_id_type: string;
  bio: ProviderBio;
  inactive: boolean;
  last_sync_time: string; // Consider using Date type
  display_name: string;
  npi: string;
  tin: string;
  state_license: string;
  specialty_code: string;
  locations: Location[]; // <--- This now correctly uses your 'Location' interface
  provider_requestables: ProviderRequestable[];
  availabilities: ProviderAvailability[];
}
