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
