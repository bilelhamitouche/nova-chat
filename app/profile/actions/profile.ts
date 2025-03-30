"use server";

import { auth } from "@/lib/auth";
import { APIError } from "better-auth/api";
import { headers } from "next/headers";

export type State = {
  err: string;
};

export async function updateProfileAction(_state: State, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  try {
    if (name) {
      await auth.api.updateUser({
        body: {
          name,
        },
        headers: await headers(),
      });
    }
    if (email) {
      await auth.api.changeEmail({
        body: {
          newEmail: email,
        },
        headers: await headers(),
      });
    }
  } catch (err) {
    if (err instanceof APIError) {
      return {
        err: err.message,
      };
    }
  }
}

export async function updatePasswordAction(_state: State, formData: FormData) {
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirm_password") as string;
  const currentPassword = formData.get("current_password") as string;
  try {
    if (password) {
      await auth.api.changePassword({
        body: {
          currentPassword,
          newPassword: password,
        },
        headers: await headers(),
      });
    }
  } catch (err) {
    if (err instanceof APIError) {
      return {
        err: err.message,
      };
    }
  }
}
