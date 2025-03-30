"use client";

import { useActionState } from "react";
import { updatePasswordAction } from "../actions/profile";

const initialState = {
  err: "",
};

function Password() {
  const [error, action, isPending] = useActionState(
    updatePasswordAction,
    initialState,
  );
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-bold">Password settings</h3>
      <form action={action} className="flex flex-col gap-2">
        {error && <span className="text-red-500">{error.err}</span>}
        <label>Current Password</label>
        <input type="password" name="current_password" className="input" />
        <label>Password</label>
        <input type="password" name="password" className="input" />
        <label>Confirm Password</label>
        <input type="password" name="confirm_password" className="input" />
        <button
          type="submit"
          className="mt-2 btn btn-primary max-w-fit"
          disabled={isPending}
        >
          {isPending ? (
            <div className="flex gap-1 items-center">
              <span className="loading loading-spinner"></span>
              <span>Saving</span>
            </div>
          ) : (
            <span>Save</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default Password;
