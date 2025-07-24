import { z } from "zod";

export const GetAppointmentTypesSchema = z.object({
  subdomain: z.string().min(1, "Subdomain is required."),
  location_id: z.string().optional(),
});

// Infer the TypeScript type from the Zod schema
export type GetAppointmentTypesInput = z.infer<
  typeof GetAppointmentTypesSchema
>;

export const GetAppointmentSlotsSchema = z.object({
  subdomain: z.string(),
  start_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "Must be a valid YYYY-MM-DD date string",
  }),
  days: z.coerce.number().int(),

  "lids[]": z
    .union([
      z.coerce.number().int(), // handles single: ?lids=123
      z.array(z.coerce.number().int()), // handles multiple: ?lids=123&lids=456
    ])
    .transform((val) => (Array.isArray(val) ? val : [val])),

  "pids[]": z
    .union([z.coerce.number().int(), z.array(z.coerce.number().int())])
    .transform((val) => (Array.isArray(val) ? val : [val])),
});

export type GetAppointmentSlotsInput = z.infer<
  typeof GetAppointmentSlotsSchema
>;

export const CreateAppointmentQuerySchema = z.object({
  subdomain: z.string().min(1, "Subdomain is required."),
  location_id: z.string().optional(),
});

export const CreateAppointmentSchema = z.object({
  patient_id: z.number(),
  provider_id: z.number(),
  operatory_id: z.number(),
  start_time: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid ISO date string",
  }),
  appointment_type_id: z.number().optional(),
});

export type CreateAppointmentQueryInput = z.infer<
  typeof CreateAppointmentQuerySchema
>;
export type CreateAppointmentInput = z.infer<typeof CreateAppointmentSchema>;
