import { chat, db } from "@/lib/drizzle";
import { getSession } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import SignOutBtn from "./SignOutBtn";
import { Chat } from "@/lib/types";

async function Sidebar({ children }: { children: React.ReactNode }) {
  const chats = await db.select().from(chat);
  const session = await getSession();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col justify-center items-center drawer-content">
        <label
          htmlFor="my-drawer-2"
          className="lg:hidden btn btn-ghost btn-square btn-sm drawer-button"
        >
          <TbLayoutSidebarLeftCollapse size={20} />
        </label>
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <aside className="p-2 w-72 min-h-full bg-base-200 text-base-content">
          <div className="items-center p-4 w-full">
            <div className="w-full dropdown dropdown-center">
              <div
                tabIndex={0}
                role="button"
                className="flex justify-between items-center w-full cursor-pointer btn btn-ghost"
              >
                <span>{session?.user.email}</span>
                {session?.user.image ? (
                  <div className="avatar">
                    <Image
                      src={session?.user.image as string}
                      alt="Avatar image"
                      width="30"
                      height="30"
                      className="rounded-full"
                    />
                  </div>
                ) : (
                  <div className="flex justify-center items-center rounded-full size-8 avatar bg-primary text-primary-content">
                    {session?.user.name[0].toUpperCase()}
                  </div>
                )}
              </div>
              <ul
                tabIndex={0}
                className="p-2 mt-2 space-y-1 w-64 shadow-sm dropdown-content menu bg-base-100 rounded-box z-1"
              >
                <li>
                  <Link href="/profile" className="btn btn-sm btn-ghost">
                    Profile
                  </Link>
                </li>
                <li>
                  <SignOutBtn />
                </li>
              </ul>
            </div>
          </div>
          <ul className="w-full menu">
            {chats.map((chat: Chat) => (
              <li key={chat.id}>
                <Link href={`/chat/${chat.id}`}>{chat.name}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default Sidebar;
