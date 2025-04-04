import Sidebar from "@/components/Sidebar";

function layout({ children }: { children: React.ReactNode }) {
  return <Sidebar>{children}</Sidebar>;
}

export default layout;
