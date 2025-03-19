import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session) redirect("/dashboard");
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}
