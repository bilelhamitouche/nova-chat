"use client";

import { login } from "@/actions/auth";
import Link from "next/link";
import { useActionState } from "react";

const initialState = {
  message: "",
};

function Login() {
  const [error, action, isPending] = useActionState(login, initialState);
  return (
    <div className="flex justify-center items-center h-full">
      <form
        action={action}
        className="flex flex-col gap-2 p-4 rounded-lg bg-base-200"
      >
        <h1 className="text-xl font-bold text-center">Login</h1>
        {error?.message && (
          <span className="text-red-500">{error.message}</span>
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
            Login
          </button>
          <p className="flex gap-1">
            <span>Don't have an account?</span>
            <Link href="/register" className="link link-primary">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
