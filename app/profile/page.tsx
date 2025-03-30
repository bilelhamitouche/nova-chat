"use client";

import { useActionState } from "react";
import { updateProfileAction } from "./actions/profile";

const initialState = {
  err: "",
};

function Profile() {
  const [error, action, isPending] = useActionState(
    updateProfileAction,
    initialState,
  );
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl font-bold">Profile settings</h3>
      <form action={action} className="flex flex-col gap-2">
        {error && <span className="text-red-500">{error.err}</span>}
        <label>Name</label>
        <input type="text" name="name" className="input" />
        <label>Email</label>
        <input type="email" name="email" className="input" />
        <label>Password</label>
        <input type="password" name="password" className="input" />
        <button type="submit" className="mt-2 btn btn-primary max-w-fit">
          Save
        </button>
      </form>
    </div>
  );
}

export default Profile;
