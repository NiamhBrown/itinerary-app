import { z } from "zod";

export const tripFormSchema = z
  .object({
    destination: z.string().min(1, "Destination is required"),
    startDate: z.string().min(1, "Start date is required"),
    endDate: z.string().min(1, "End date is required"),
    peopleCount: z.coerce.number().min(1, "At least 1 person required"),
    interests: z.string().optional(),
  })
  .refine((data) => new Date(data.endDate) > new Date(data.startDate), {
    message: "End date must be after start date",
    path: ["endDate"], // 👈 associate error with the endDate field
  });
