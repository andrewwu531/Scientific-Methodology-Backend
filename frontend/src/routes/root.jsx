import SectionContainer from "../components/SectionContainer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MuscleBuilding from "../components/MainContents/MuscleBuilding";

export default function Root() {
  return (
    <div className="h-screen">
      <div>
        <Navbar />
      </div>
      <div className="h-[90vh] min-w-[50rem] grid overflow-hidden grid-cols-[min-content_auto] gap-y-2 p-1.5 bg-black-2">
        <Sidebar />

        <SectionContainer className="overflow-auto bg-neutral-900">
          {/* <TesterPage /> */}
          <MuscleBuilding />
        </SectionContainer>

        <aside className="flex items-center justify-between col-span-2 px-4 py-3 bg-gradient-to-r from-accent-1 to-accent-2">
          <p className="pl-3">
            <span className="block text-base tracking-wider ">
              We are M. Our mission is to provide the highest standard education
              for all through AI and qualified experts, from boosting
            </span>
            <span className="text-base tracking-wider">
              your academic performance and language skills to accelerating your
              bodybuilding progress and career prospect.{" "}
            </span>
          </p>

          {/* <RegisterButton href={routes.LOGIN} className="px-8 py-3 mr-4">
            Register/ Log in
          </RegisterButton> */}
        </aside>
      </div>
    </div>
  );
}
