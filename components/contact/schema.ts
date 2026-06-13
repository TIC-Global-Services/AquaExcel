import { z } from 'zod';

export const generalEnquirySchema = z.object({
  name: z.string().min(1, 'Name is required').max(50,"Name should be at most 50 characters").regex(/^[a-zA-Z\s]+$/, 'Name should only contain alphabets'),
  city: z.string().min(1, 'City/State is required').max(50,"City/State should be at most 50 characters").regex(/^[a-zA-Z\s]+$/, 'City/State should only contain alphabets'),
  phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits').regex(/^\d+$/, 'Phone number should only contain numbers').max(10,"Phone number should be at most 10 digits"),
  email: z.string().email('Invalid email address').max(50,"Email should be at most 50 characters"),
  message: z.string().min(1, 'Message is required').max(500,"Message should be at most 500 characters"),
});

export type GeneralEnquiryFormData = z.infer<typeof generalEnquirySchema>;

export const dealerEnquirySchema = z.object({
  name: z.string().min(1, 'Name is required').regex(/^[a-zA-Z\s]+$/, 'Name should only contain alphabets'),
  company: z.string().min(1, 'Company name is required'),
  businessType: z.string().min(1, 'Business type is required'),
  phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits').regex(/^\d+$/, 'Phone number should only contain numbers'),
  email: z.string().email('Invalid email address'),
  city: z.string().min(1, 'City is required').regex(/^[a-zA-Z\s]+$/, 'City should only contain alphabets'),
  message: z.string().min(1, 'Message is required'),
});

export type DealerEnquiryFormData = z.infer<typeof dealerEnquirySchema>;
