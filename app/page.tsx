import Features from "@/components/Features";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session) redirect("/chat");
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Features />
      <GetStarted />
      <Footer />
    </div>
  );
}
