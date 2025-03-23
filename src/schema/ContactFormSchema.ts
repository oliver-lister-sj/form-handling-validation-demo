import { z } from "zod";
import * as yup from "yup";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

// --------------------------------------------------------------------
// ZOD
// --------------------------------------------------------------------

const NameSchemaZod = (name: string) =>
  z
    .string()
    .min(1, `${name} is required`)
    .max(50, `${name} cannot be longer than 50 characters`);

export const ContactFormSchemaZod = z.object({
  firstName: NameSchemaZod("First Name"),
  lastName: NameSchemaZod("Last Name"),
  phoneNumber: z
    .string()
    .min(1, "phoneNumber is required")
    .regex(phoneRegex, "Invalid number"),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
});

// Can easily integrate with external validation libraries like ValidatePhoneNumber, via .refine() method
// e.g. phone: z.string().refine(validator.isMobilePhone)

// Can easily infer the type of the form data via z.infer method.
export type ContactFormDataZod = z.infer<typeof ContactFormSchemaZod>;

// --------------------------------------------------------------------
// YUP
// --------------------------------------------------------------------

const NameSchemaYup = (name: string) =>
  yup
    .string()
    .min(1, `${name} is required`)
    .max(50, `${name} cannot be longer than 50 characters`);

export const ContactFormSchemaYup = yup.object({
  firstName: NameSchemaYup("First Name"),
  lastName: NameSchemaYup("Last Name"),
  phoneNumber: yup
    .string()
    .min(1, "phoneNumber is required")
    .matches(phoneRegex, "Invalid number"),
  email: yup.string().email("Invalid email").nullable().optional(),
});

// Can easily infer the type of the form data via z.infer method.
export type ContactFormDataYup = yup.InferType<typeof ContactFormSchemaYup>;
