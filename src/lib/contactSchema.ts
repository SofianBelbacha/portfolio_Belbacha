import { z } from "zod";

const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+([ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "errors.name.tooShort" })
    .max(50, { message: "errors.name.tooLong" })
    .regex(nameRegex, { message: "errors.name.invalid" }),

  email: z
    .string()
    .trim()
    .email({ message: "errors.email.invalid" }),

  service: z
    .string()
    .min(1, { message: "errors.service.required" }),

  message: z
    .string()
    .trim()
    .min(10, { message: "errors.message.tooShort" })
    .max(1000, { message: "errors.message.tooLong" }),
});

export type ContactFormData = z.infer<typeof contactSchema>;