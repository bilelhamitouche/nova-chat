import Link from "next/link";

function GetStarted() {
  return (
    <div className="py-16 space-y-4 text-center bg-primary text-primary-content">
      <h2 className="text-3xl font-bold">Ready to get Started?</h2>
      <p className="text-lg">
        Join our community of users who trust NovaChat for their communication
        needs.
      </p>
      <Link href="/register" className="btn bg-primary-content text-primary">
        Create Free Account
      </Link>
    </div>
  );
}

export default GetStarted;
