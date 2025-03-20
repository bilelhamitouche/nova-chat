import Link from "next/link";
import { FiMessageSquare } from "react-icons/fi";

function Navbar() {
  return (
    <header className="flex fixed z-10 shadow navbar bg-base-100">
      <div className="space-x-2 navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="p-2 mt-3 w-52 shadow z-1 menu menu-md dropdown-content bg-base-100 rounded-box"
          >
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="flex gap-2 items-center text-xl font-bold">
          <FiMessageSquare size="25" className="text-primary" />
          <span>NovaChat</span>
        </Link>
      </div>
      <div className="hidden lg:flex navbar-center">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <nav className="flex gap-2 items-center navbar-end">
        <Link href="/login" className="btn btn-ghost">
          Login
        </Link>
        <Link href="/register" className="btn btn-primary">
          Sign Up
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
