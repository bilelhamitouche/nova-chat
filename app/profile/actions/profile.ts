"use server";

import { auth } from "@/lib/auth";

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
      });
    }
    if (email) {
      await auth.api.changeEmail({
        body: {
          newEmail: email,
        },
      });
    }
  } catch (err) {
    console.log(err);
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
      });
    }
  } catch (err) {
    return {
      err: "Error while changing password",
    };
  }
}
