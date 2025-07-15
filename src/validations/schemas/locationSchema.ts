// validations/schemas/locationSchema.ts
import { z } from "zod";

export const GetLocationsSchema = z.object({
  subdomain: z.string().min(1, "Subdomain is required."),
});

// Infer the TypeScript type from the Zod schema
export type GetLocationsInput = z.infer<typeof GetLocationsSchema>;
