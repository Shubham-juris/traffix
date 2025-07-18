"use server";

import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().min(1, "First Name is required."),
  lastName: z.string().min(1, "Last Name is required."),
  position: z.string().min(1, "Position is required."),
  email: z.string().email("Invalid email address."),
  confirmEmail: z.string().email("Invalid email address."),
  companyName: z.string().min(1, "Company Name is required."),
  companyPhone: z.string().min(1, "Company Phone is required."),
  companyAddress: z.string().min(1, "Company Address is required."),
  companyWebsite: z.string().url("Invalid URL.").optional().or(z.literal('')),
  country: z.string().min(1, "Country is required."),
  mcNumber: z.string().optional(),
  usDotNumber: z.string().optional(),
  ctpat: z.boolean().optional(),
  smartway: z.boolean().optional(),
  comments: z.string().optional(),
  consent: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms.",
  }),
}).refine(data => data.email === data.confirmEmail, {
  message: "Emails don't match",
  path: ["confirmEmail"],
});


type State = {
  errors?: {
    [key: string]: string[] | undefined;
  };
  message?: string | null;
  success?: boolean;
};

export async function submitCarrierForm(prevState: State, formData: FormData): Promise<State> {
  
  const validatedFields = contactSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    position: formData.get("position"),
    email: formData.get("email"),
    confirmEmail: formData.get("confirmEmail"),
    companyName: formData.get("companyName"),
    companyPhone: formData.get("companyPhone"),
    companyAddress: formData.get("companyAddress"),
    companyWebsite: formData.get("companyWebsite"),
    country: formData.get("country"),
    mcNumber: formData.get("mcNumber"),
    usDotNumber: formData.get("usDotNumber"),
    ctpat: formData.get("ctpat") === 'on',
    smartway: formData.get("smartway") === 'on',
    comments: formData.get("comments"),
    consent: formData.get("consent") === 'on',
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors below.",
      success: false,
    };
  }

  console.log("New Carrier Form Submission:", validatedFields.data);

  return {
    message: "Thank you! Your information has been submitted successfully.",
    success: true,
  };
}