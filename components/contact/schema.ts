import { z } from 'zod';

export const generalEnquirySchema = z.object({
  name: z.string().min(1, 'Name is required'),
  city: z.string().min(1, 'City/State is required'),
  phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
});

export type GeneralEnquiryFormData = z.infer<typeof generalEnquirySchema>;

export const dealerEnquirySchema = z.object({
  name: z.string().min(1, 'Name is required'),
  company: z.string().min(1, 'Company name is required'),
  businessType: z.string().min(1, 'Business type is required'),
  phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits'),
  email: z.string().email('Invalid email address'),
  city: z.string().min(1, 'City is required'),
  message: z.string().min(1, 'Message is required'),
});

export type DealerEnquiryFormData = z.infer<typeof dealerEnquirySchema>;
