"use server";

import { auth } from "@/lib/auth";
import { loginSchema, registerSchema } from "@/lib/zod";
import { APIError } from "better-auth/api";
import z from "zod";
import { redirect } from "next/navigation";

export type State = {
  errors?: {
    name: string;
    email: string;
    password: string;
  };
  message: string;
};

export async function login(_state: State, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const validateLoginCredentials = loginSchema.parse({
      email,
      password,
    });
    await auth.api.signInEmail({
      body: {
        email: validateLoginCredentials.email,
        password: validateLoginCredentials.password,
      },
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return {
        errors: err.flatten().fieldErrors,
      };
    }
    if (err instanceof APIError) {
      return {
        message: err.message,
      };
    }
  }
  redirect("/chat");
}

export async function register(_state: State, formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const validateRegisterCredentials = registerSchema.parse({
      name,
      email,
      password,
    });
    await auth.api.signUpEmail({
      body: {
        name: validateRegisterCredentials.name,
        email: validateRegisterCredentials.email,
        password: validateRegisterCredentials.password,
      },
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return {
        errors: err.flatten().fieldErrors,
      };
    }
    if (err instanceof APIError) {
      return {
        message: err.message,
      };
    }
  }
  redirect("/login");
}
