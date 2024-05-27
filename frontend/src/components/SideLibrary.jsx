import SectionContainer from "./SectionContainer";
import VerticalCard from "./Cards/VerticalCard";
import SecondaryButton from "./Buttons/SecondaryButton";

export default function SideLibrary() {
  return (
    <SectionContainer>
      {/* <div className="relative flex items-center justify-between px-5 py-4 shadow-lg shadow-neutral-950">
        <RoundedButton className="flex items-center gap-3 px-2 py-1 transition-colors duration-300 text-neutral-400 hover:text-white">
          <FontAwesomeIcon icon={faListDots} />
          Your Library
        </RoundedButton>

        <CircularButton className="w-8 transition-colors hover:bg-neutral-800 text-neutral-400 hover:text-white">
          <FontAwesomeIcon icon={faPlus} />
        </CircularButton>
      </div> */}

      <div className="flex flex-col gap-1 px-2 overflow-auto h-[87vh]">
        <VerticalCard className="flex flex-col items-start justify-start gap-3 p-4 pb-5 rounded-lg bg-neutral-800">
          <p className="pt-2 pb-1 text-lg font-bold">Academics & Language Learning</p>
           <div className="flex flex-wrap gap-2.5">
            <SecondaryButton className="flex flex-wrap px-4 py-2">
              University 1st Class Honour Guide
            </SecondaryButton>
            <SecondaryButton className="flex flex-wrap px-4 py-2">
              High School Past Paper Q&A 
            </SecondaryButton>
            <SecondaryButton className="flex flex-wrap px-4 py-2">
              Sample Topic Essays
            </SecondaryButton>
            <SecondaryButton className="flex flex-wrap px-4 py-2">
              English Pronunication 
            </SecondaryButton>
            <SecondaryButton className="flex flex-wrap px-4 py-2">
              Accents & Speech Delivery
            </SecondaryButton>
            <SecondaryButton className="flex flex-wrap px-4 py-2">
              Business English
            </SecondaryButton>
            <SecondaryButton className="flex flex-wrap px-4 py-2">
              Storytelling Principles
            </SecondaryButton>
            <SecondaryButton className="flex flex-wrap px-4 py-2">
              Comedy Writing
            </SecondaryButton>
          </div>
            <p className="pt-5 pb-1 text-lg font-bold">Health & Lifestyle</p>
           <div className="flex flex-wrap gap-2.5">
           <SecondaryButton className="flex flex-wrap px-4 py-2">
              Dating
            </SecondaryButton>
            <SecondaryButton className="flex flex-wrap px-4 py-2">
              Muscle Building
            </SecondaryButton>
            <SecondaryButton className="flex flex-wrap px-4 py-2">
              Weight Loss 
            </SecondaryButton>
            <SecondaryButton className="flex flex-wrap px-4 py-2">
              Meal Recipes
            </SecondaryButton>
            <SecondaryButton className="flex flex-wrap px-4 py-2">
              Fashion
            </SecondaryButton>
            <SecondaryButton className="flex flex-wrap px-4 py-2">
              Makeup
            </SecondaryButton>
            <SecondaryButton className="flex flex-wrap px-4 py-2">
              Hairstyles
            </SecondaryButton>
          </div>

           <p className="pt-5 pb-1 text-lg font-bold">Social & Entertainment</p>
           <div className="flex flex-wrap gap-2.5">
           <SecondaryButton className="flex flex-wrap px-4 py-2">
              Movies & TV Shows
            </SecondaryButton>
            <SecondaryButton className="flex flex-wrap px-4 py-2">
              Travel Journals
            </SecondaryButton>
            <SecondaryButton className="flex flex-wrap px-4 py-2">
              Martial Arts
            </SecondaryButton>
            <SecondaryButton className="flex flex-wrap px-4 py-2">
              Basketball
            </SecondaryButton>
            <SecondaryButton className="flex flex-wrap px-4 py-2">
              Football
            </SecondaryButton>
            <SecondaryButton className="flex flex-wrap px-4 py-2">
              Pets
            </SecondaryButton>
            <SecondaryButton className="flex flex-wrap px-4 py-2">
              Cars & Driving Licence Test
            </SecondaryButton>
          </div>

          <p className="pt-5 pb-1 text-lg font-bold">Career & Finance</p>
           <div className="flex flex-wrap gap-2.5">
           <SecondaryButton className="flex flex-wrap px-4 py-2">
              Sample CVs & Cover Letters
            </SecondaryButton>
            <SecondaryButton className="flex flex-wrap px-4 py-2">
              Interview Techniques
            </SecondaryButton>
            <SecondaryButton className="flex flex-wrap px-4 py-2">
              Job Searching Guide
            </SecondaryButton>
             <SecondaryButton className="flex flex-wrap px-4 py-2">
              Dress Codes
            </SecondaryButton>
            <SecondaryButton className="flex flex-wrap px-4 py-2">
              Investing - Stocks & Crypto  
            </SecondaryButton>
            <SecondaryButton className="flex flex-wrap px-4 py-2">
              Investing - Real Estates 
            </SecondaryButton>
            <SecondaryButton className="flex flex-wrap px-4 py-2">
              Tech Knowledge
            </SecondaryButton>
          </div>

          <div className="pb-2"></div>
        </VerticalCard>

  
      </div>

  
    </SectionContainer>
  );
}
