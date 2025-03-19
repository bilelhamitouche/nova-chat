"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

function SignOutBtn() {
  return (
    <button
      onClick={async () => {
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              redirect("/login");
            },
          },
        });
      }}
      className="btn btn-error"
    >
      Sign Out
    </button>
  );
}

export default SignOutBtn;
