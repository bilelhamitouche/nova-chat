import { getSession } from "@/lib/utils";
import Image from "next/image";

async function Profile() {
  const session = await getSession();
  return (
    <div className="p-8 h-full">
      <h2 className="text-2xl font-bold">Profile Settings</h2>
      <p className="text-gray-500">Manage your profile settings</p>
      <form className="flex flex-col gap-2 p-4 mt-4 max-w-lg border rounded-box bg-base-200 border-base-300">
        <h3 className="mb-2 text-xl font-bold">Profile</h3>
        {session?.user.image ? (
          <Image
            src={session?.user.image}
            alt="avatar image"
            className="mb-2 rounded-full size-24 avatar"
          />
        ) : (
          <div className="flex justify-center items-center mb-2 text-4xl rounded-full size-24 avatar bg-primary text-primary-content">
            {session?.user.name[0].toUpperCase()}
          </div>
        )}
        <label className="fieldset-label">Name</label>
        <input
          type="text"
          name="name"
          defaultValue={session?.user.name}
          className="w-full input"
        />
        <label className="fieldset-label">Email</label>
        <input
          type="email"
          name="email"
          defaultValue={session?.user.email}
          className="w-full input"
        />
        <label className="fieldset-label">Password</label>
        <input type="password" name="password" className="w-full input" />
        <label className="fieldset-label">Confirm Password</label>
        <input
          type="password"
          name="confirm_password"
          className="w-full input"
        />
        <button className="mt-2 btn btn-primary max-w-fit">Save</button>
      </form>
    </div>
  );
}

export default Profile;
