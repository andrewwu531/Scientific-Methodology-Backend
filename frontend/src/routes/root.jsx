import SectionContainer from "../components/SectionContainer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MainContents from "../components/MainContents/MuscleBuilding";

export default function Root() {
  return (
    <div className="h-screen bg-black-2">
      <div>
        <Navbar />
      </div>
      <div className="h-[90vh] min-w-[50rem] grid overflow-hidden grid-cols-[min-content_auto] gap-y-2 p-2 bg-black-2">
        <Sidebar />
        

        <SectionContainer className="relative overflow-auto bg-black-1">


          <MainContents />
         
         
        </SectionContainer>

      </div>
    </div>
  );
}
