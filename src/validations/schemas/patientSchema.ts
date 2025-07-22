import { z } from "zod";

export const GetAppointmentTypesSchema = z.object({
  subdomain: z.string().min(1, "Subdomain is required."),
  location_id: z.string().optional(),
});

// Infer the TypeScript type from the Zod schema
export type GetAppointmentTypesInput = z.infer<
  typeof GetAppointmentTypesSchema
>;

export const GetPatientsSchema = z.object({
  subdomain: z.string().min(1, { message: "subdomain is required" }),
  location_id: z.string().min(1, { message: "location_id is required" }),
  name: z.string().optional(),
  email: z.string().optional(),
  phone_number: z.string().optional(),
  date_of_birth: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .optional(),
  non_patient: z.string().optional(),
  location_strict: z.string().optional().optional(),
});

export type GetPatientsInput = z.infer<typeof GetPatientsSchema>;

export const CreatePatientParamsSchema = z.object({
  subdomain: z.string().min(1, "Subdomain is required."),
  location_id: z.string().optional(),
});

export const CreatePatientSchema = z.object({
  provider: z.object({
    provider_id: z.number(),
  }),
  patient: z.object({
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().email(),
    bio: z.object({
      gender: z.enum(["Male", "Female", "Other"]).optional(), // optional enum if needed
      phone_number: z.string().min(7).max(15),
      date_of_birth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
        message: "Must be a valid YYYY-MM-DD date string",
      }),
    }),
  }),
});

export type CreatePatientParamsInput = z.infer<
  typeof CreatePatientParamsSchema
>;
export type CreatePatientBodyInput = z.infer<typeof CreatePatientSchema>;
