import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  service: z.string().refine(val => val !== "default", {
    message: "Veuillez sélectionner un service valide",
  }),
  message: z.string().min(5, "Message trop court"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
