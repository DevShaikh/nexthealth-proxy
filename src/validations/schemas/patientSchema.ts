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
