"use client";

import { login } from "@/actions/auth";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useActionState } from "react";

const initialState = {
  message: "",
};

function Login() {
  const [error, action, isPending] = useActionState(login, initialState);
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col p-4 border bg-base-200 border-base-300 rounded-box fieldset">
        <h1 className="mb-2 text-xl font-bold text-center">Login</h1>
        <button
          onClick={async () => {
            const data = await authClient.signIn.social({
              provider: "google",
            });
          }}
          className="text-black bg-white btn border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
        <div className="divider">Or Continue with Email</div>
        <form action={action} className="flex flex-col gap-2">
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
            <span className="text-xs text-red-500">
              {error.errors.password}
            </span>
          )}
          <div className="flex flex-col gap-1">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isPending}
            >
              Login
            </button>
            <p className="flex gap-1 text-sm">
              <span>Don't have an account?</span>
              <Link href="/register" className="link link-primary">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
