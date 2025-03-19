import Link from "next/link";
import { FiMessageSquare } from "react-icons/fi";

function Navbar() {
  return (
    <header className="flex fixed z-10 justify-between items-center p-4 w-full shadow bg-base-100">
      <h1 className="flex gap-2 items-center text-xl font-bold">
        <FiMessageSquare size="25" className="text-primary" />
        <span>NovaChat</span>
      </h1>
      <nav className="flex gap-2 items-center"></nav>
      <div className="space-x-2">
        <Link href="/login" className="btn btn-ghost">
          Login
        </Link>
        <Link href="/register" className="btn btn-primary">
          Sign Up
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
