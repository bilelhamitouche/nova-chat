import SignOutBtn from "@/components/SignOutBtn";
import { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <h1>NovaChat</h1>
        <SignOutBtn />
      </div>
      {children}
    </div>
  );
}

export default layout;
