
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
  consent: z.literal('on', {
    errorMap: () => ({ message: "You must agree to the terms." }),
  }),
}).refine(data => data.email === data.confirmEmail, {
  message: "Emails don't match",
  path: ["confirmEmail"],
});

export type State = {
  errors?: {
    firstName?: string[];
    lastName?: string[];
    position?: string[];
    email?: string[];
    confirmEmail?: string[];
    companyName?: string[];
    companyPhone?:string[];
    companyAddress?: string[];
    companyWebsite?: string[];
    country?: string[];
    mcNumber?: string[];
    usDotNumber?: string[];
    ctpat?: string[];
    smartway?: string[];
    comments?: string[];
    consent?: string[];
  };
  message?: string | null;
  success: boolean;
};


export async function submitCarrierForm(prevState: State | null, formData: FormData): Promise<State> {
  const rawFormData = Object.fromEntries(formData.entries());

  const validatedFields = contactSchema.safeParse(rawFormData);
  
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
