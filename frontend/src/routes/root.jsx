import SectionContainer from "../components/SectionContainer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MainContents from "../components/MainContents/MuscleBuilding";
import RegisterButton from "../components/Buttons/RegisterButton";
import { routes } from "../shared/routes";
import TesterPage from "../components/MainContents/TesterPage";

export default function Root() {
  return (
    <div className="h-screen bg-black-2">
      <div>
        <Navbar />
      </div>
      <div className="relative z-10 h-[90vh] min-w-[50rem] grid overflow-hidden grid-cols-[min-content_auto] gap-y-2 p-2 bg-black-2">
        <Sidebar />

        <SectionContainer className="relative overflow-auto z-25 bg-black-1">
          {/* <TesterPage /> */}
          <MainContents />
        </SectionContainer>

        <aside className="flex items-center justify-between col-span-2 px-4 py-3 bg-gradient-to-r from-accent-1 to-accent-2">
          <p className="pl-3">
            <span className="block text-base tracking-wider ">
              We are M. Our mission is to provide everyone the highest quality
              education possible in the world!
            </span>
            <span className="text-base">
              Sign up to gain access to some our courses for free! No bank cards
              required.{" "}
            </span>
          </p>

          <RegisterButton href={routes.LOGIN} className="px-8 py-3 mr-4">
            Register/ Log in
          </RegisterButton>
        </aside>
      </div>
    </div>
  );
}
