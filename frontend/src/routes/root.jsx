import { Outlet } from "react-router-dom";
import SectionContainer from "../components/SectionContainer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar";

export default function Root() {
  return (
    <div className="h-screen">
      <div>
        <Navbar />
      </div>
      <div className="min-w-[50rem] grid overflow-hidden grid-cols-[min-content_auto] gap-y-2 p-2 bg-black">
        <Sidebar />

        <SectionContainer className="relative overflow-auto bg-local bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-900">
        
          <main>
            <Outlet />
          </main>

          <Footer />
        </SectionContainer>

      </div>
    </div>
  );
}
