import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default layout;
