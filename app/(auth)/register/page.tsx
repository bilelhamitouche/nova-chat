"use client";

import { register } from "@/actions/auth";
import Link from "next/link";
import { useActionState } from "react";

const initialState = {
  message: "",
};

function Register() {
  const [error, action, isPending] = useActionState(register, initialState);
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-full">
      <form
        action={action}
        className="flex flex-col gap-2 p-4 rounded-lg bg-base-200"
      >
        <h1 className="text-xl font-bold text-center">Register</h1>
        {error?.message && (
          <span className="text-red-500">{error.message}</span>
        )}
        <label htmlFor="name" className="text-sm fieldset-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter name"
          className="input validator"
        />
        {error?.errors?.name && (
          <span className="text-xs text-red-500">{error.errors.name}</span>
        )}
        <label htmlFor="email" className="text-sm fieldset-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          className="input min-w-2xs validator"
        />
        {error?.errors?.email && (
          <span className="text-xs text-red-500">{error.errors.email}</span>
        )}
        <label htmlFor="password" className="text-sm fieldset-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          className="input validator"
        />
        {error?.errors?.password && (
          <span className="text-xs text-red-500">{error.errors.password}</span>
        )}
        <div className="flex flex-col gap-1">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isPending}
          >
            Register
          </button>
          <p className="flex gap-1">
            <span>Already have an account?</span>
            <Link href="/login" className="link link-primary">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
