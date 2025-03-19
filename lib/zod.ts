import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Email must be a valid Email address")
    .trim(),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, "Password must be more than 8 characters long")
    .max(20, "Password must be less than 20 characters long")
    .regex(/[a-zA-Z0-9]/)
    .trim(),
});

export const registerSchema = z.object({
  name: z.string({ required_error: "Name is required" }).trim(),
  email: z
    .string({ required_error: "Email is required" })
    .email("Email must be a valid Email address")
    .trim(),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, "Password must be more than 8 characters long")
    .max(20, "Password must be less than 20 characters long")
    .regex(
      /[a-zA-Z0-9]/,
      "Password must contain at least one letter, one uppercase letter, one digit and one symbol",
    )
    .trim(),
});
