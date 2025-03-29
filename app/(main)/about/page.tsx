import Image from "next/image";
import { accolates } from "../lib/data";
import AccolateCard from "../components/AccolateCard";
import Link from "next/link";

function About() {
  return (
    <div className="container flex flex-col gap-16 items-center py-28 px-8 mx-auto max-w-6xl">
      <div className="space-y-4 max-w-2xl text-center">
        <h2 className="text-4xl font-bold">About NovaChat</h2>
        <p className="text-xl text-gray-500">
          We're on a mission to revolutionize digital communication by providing
          the most secure, efficient, and user-friendly messaging platform.
        </p>
      </div>
      <div className="flex flex-col gap-8 items-start mx-auto md:flex-row">
        <div className="flex flex-col gap-4 md:max-w-1/2">
          <h3 className="text-2xl font-bold">Our Story</h3>
          <div className="text-base text-gray-500">
            <p>
              Founded in 2025, NovaChat emerged from a simple idea:
              communication should be seamless, secure, and accessible to
              everyone. What started as a small team of passionate developers
              has grown into a global platform serving millions of users
              worldwide.
            </p>
            <br />
            <p>
              Our commitment to privacy, innovation, and user experience has
              made us one of the fastest-growing messaging platforms in the
              industry.
            </p>
          </div>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Team Image"
          width="550"
          height="400"
          className="rounded-box"
        />
      </div>
      <div className="grid grid-cols-1 gap-16 py-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {accolates.map((accolate, index) => (
          <AccolateCard
            key={index}
            icon={accolate.icon}
            record={accolate.record}
            text={accolate.text}
          />
        ))}
      </div>
      <div className="flex flex-col gap-4 items-center text-center">
        <h3 className="text-2xl font-bold">Join Our Team</h3>
        <p className="max-w-2xl text-gray-500">
          We're always looking for talented individuals who share our passion
          for innovation and privacy-focused communication.
        </p>
        <Link
          href="https://emploitic.com"
          className="btn btn-primary"
          target="_blank"
        >
          View Open Positions
        </Link>
      </div>
    </div>
  );
}

export default About;
