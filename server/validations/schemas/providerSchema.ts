import { z } from "zod";

export const GetProvidersSchema = z.object({
  subdomain: z.string().min(1, "Subdomain is required"),
  location_id: z.string().optional(),
  requestable: z.string().optional(),
  inactive: z.string().optional(),
  page: z.string().optional(),
  per_page: z.string().optional(),
});

// Infer the TypeScript type directly from the Zod schema
export type GetProvidersInput = z.infer<typeof GetProvidersSchema>;
