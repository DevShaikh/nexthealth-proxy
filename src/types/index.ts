export interface ExternalAPIErrorResponse {
  code: boolean;
  description: string | null;
  data: unknown;
  error: string[];
}

export interface ExternalAPIError {
  response: {
    data: ExternalAPIErrorResponse;
    status: number;
  };
}

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
 * Interface for the 'Patient' object, as provided by you.
 * This is used for the 'Patient' array within data.
 */
export interface Patient {
  id: number;
  email: string;
  first_name: string;
  middle_name: string | null;
  last_name: string;
  name: string;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
  institution_id: number;
  foreign_id: string;
  foreign_id_type: string;
  bio: {
    gender: string;
    phone_number: string;
    date_of_birth: string; // ISO date string (e.g., "1957-07-03")
    verified_mobile: string;
  };
  inactive: boolean;
  last_sync_time: string | null;
  guarantor_id: number | null;
  unsubscribe_sms: boolean;
  balance: {
    amount: string;
    currency: string;
  };
  billing_type: string | null;
  chart_id: string | null;
  preferred_language: string | null;
  preferred_locale: string | null;
  location_ids: number[];
  provider_id: number | null;
}

/**
 * Interface for the 'Authenticate' object, as provided by you.
 * This is used for the 'Authentication Token' within data.
 */
export interface Authenticate {
  token: string;
}

/**
 * Interface for the 'Location' object, as provided by you.
 * This is used for the 'locations' array within data.
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

export interface Appointment {
  id: number;
  patient_id: number;
  provider_id: number;
  provider_name: string;
  start_time: string;
  confirmed: boolean;
  patient_missed: boolean;
  created_at: string;
  updated_at: string;
  note: string | null;
  end_time: string;
  unavailable: boolean;
  cancelled: boolean;
  timezone: string;
  institution_id: number;
  appointment_type_id: number | null;
  checkin_at: string | null;
  location_id: number;
  foreign_id: string | null;
  foreign_id_type: string | null;
  misc: {
    is_booked_on_nexhealth: boolean;
    booked_by_api_user_id: number;
  };
  last_sync_time: string | null;
  patient_confirmed: boolean;
  created_by_user_id: number;
  is_guardian: boolean;
  patient_confirmed_at: string | null;
  cancelled_at: string | null;
  is_new_clients_patient: boolean | null;
  confirmed_at: string | null;
  sooner_if_possible: boolean;
  operatory_id: number;
  deleted: boolean;
  checked_out: boolean;
  checked_out_at: string | null;
  referrer: string | null;
  is_past_patient: boolean;
  timezone_offset: string;
}
