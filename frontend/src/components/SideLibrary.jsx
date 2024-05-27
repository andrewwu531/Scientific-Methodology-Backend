import SectionContainer from "./SectionContainer";
import VerticalCard from "./Cards/VerticalCard";
import SecondaryButton from "./Buttons/SecondaryButton";

export default function SideLibrary() {
  return (
    <SectionContainer>
      {/* <div className="relative flex items-center justify-between px-4 py-4 shadow-lg shadow-neutral-950">
        <RoundedButton className="flex items-center gap-3 px-2 py-1 transition-colors duration-300 text-neutral-400 hover:text-white">
          <FontAwesomeIcon icon={faListDots} />
          Your Library
        </RoundedButton>

        <CircularButton className="w-8 transition-colors hover:bg-neutral-800 text-neutral-400 hover:text-white">
          <FontAwesomeIcon icon={faPlus} />
        </CircularButton>
      </div> */}

      <div className="flex flex-col overflow-auto h-[80vh] scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-800 scrollbar-thumb-hover-gray-600">
        <VerticalCard className="flex flex-col items-start justify-start gap-3 p-3.5 pb-5 rounded-lg bg-black-1">
          <p className="pt-2 pb-1 pl-2 text-base font-bold text-sans">Academics & Language Learning</p>
           <div className="flex flex-wrap gap-2.5 ">
            <SecondaryButton className="px-4 py-2 pt-2 text-white text-tiny text-sans font-regular">
              University 1st Class Honour Guide
            </SecondaryButton>
            <SecondaryButton className="px-4 py-2 pt-2.5 text-tiny text-white text-sans font-regular">
              High School Past Paper Q&A 
            </SecondaryButton>
            <SecondaryButton className="px-4 py-2 pt-2.5 text-tiny text-white text-sans font-regular">
              Sample Topic Essays
            </SecondaryButton>
            <SecondaryButton className="px-4 py-2 pt-2.5 text-tiny text-white text-sans font-regular">
              English Pronunication 
            </SecondaryButton>
            <SecondaryButton className="px-4 py-2 pt-2.5 text-tiny text-white text-sans font-regular">
              Accents & Speech Delivery
            </SecondaryButton>
            <SecondaryButton className="px-4 py-2 pt-2.5 text-tiny text-white text-sans font-regular">
              Business English
            </SecondaryButton>
            <SecondaryButton className="px-4 py-2 pt-2.5 text-tiny text-white text-sans font-regular">
              Storytelling Principles
            </SecondaryButton>
            <SecondaryButton className="px-4 py-2 pt-2.5 text-tiny text-white text-sans font-regular">
              Comedy Writing
            </SecondaryButton>
          </div>
            <p className="pt-5 pb-1 pl-2 text-base font-bold">Health & Lifestyle</p>
           <div className="flex flex-wrap gap-2.5">
            <SecondaryButton className="px-4 py-2 pt-2.5 text-tiny text-white text-sans font-regular">
              Dating
            </SecondaryButton>
            <SecondaryButton className="px-4 py-2 pt-2.5 text-tiny text-white text-sans font-regular">
              Muscle Building
            </SecondaryButton>
            <SecondaryButton className="px-4 py-2 pt-2.5 text-tiny text-white text-sans font-regular">
              Weight Loss 
            </SecondaryButton>
            <SecondaryButton className="px-4 py-2 pt-2.5 text-tiny text-white text-sans font-regular">
              Meal Recipes
            </SecondaryButton>
            <SecondaryButton className="px-4 py-2 pt-2.5 text-tiny text-white text-sans font-regular">
              Fashion
            </SecondaryButton>
            <SecondaryButton className="px-4 py-2 pt-2.5 text-tiny text-white text-sans font-regular">
              Makeup
            </SecondaryButton>
            <SecondaryButton className="px-4 py-2 pt-2.5 text-tiny text-white text-sans font-regular">
              Hairstyles
            </SecondaryButton>
          </div>

           <p className="pt-5 pb-1 pl-2 text-base font-bold">Social & Entertainment</p>
           <div className="flex flex-wrap gap-2.5">
           <SecondaryButton className="px-4 py-2 pt-2.5 text-tiny text-white text-sans font-regular">
              Movies & TV Shows
            </SecondaryButton>
            <SecondaryButton className="px-4 py-2 pt-2.5 text-tiny text-white text-sans font-regular">
              Travel Journals
            </SecondaryButton>
            <SecondaryButton className="px-4 py-2 pt-2.5 text-tiny text-white text-sans font-regular">
              Martial Arts
            </SecondaryButton>
            <SecondaryButton className="px-4 py-2 pt-2.5 text-tiny text-white text-sans font-regular">
              Basketball
            </SecondaryButton>
            <SecondaryButton className="px-4 py-2 pt-2.5 text-tiny text-white text-sans font-regular">
              Football
            </SecondaryButton>
            <SecondaryButton className="px-4 py-2 pt-2.5 text-tiny text-white text-sans font-regular">
              Pets
            </SecondaryButton>
            <SecondaryButton className="px-4 py-2 pt-2.5 text-tiny text-white text-sans font-regular">
              Cars & Driving Licence Test
            </SecondaryButton>
          </div>

          <p className="pt-5 pb-1 pl-2 text-base font-bold">Career & Finance</p>
           <div className="flex flex-wrap gap-2.5">
           <SecondaryButton className="px-4 py-2 pt-2.5 text-tiny text-white text-sans font-regular">
              Sample CVs & Cover Letters
            </SecondaryButton>
            <SecondaryButton className="px-4 py-2 pt-2.5 text-tiny text-white text-sans font-regular">
              Interview Techniques
            </SecondaryButton>
            <SecondaryButton className="px-4 py-2 pt-2.5 text-tiny text-white text-sans font-regular">
              Job Searching Guide
            </SecondaryButton>
             <SecondaryButton className="px-4 py-2 pt-2.5 text-tiny text-white text-sans font-regular">
              Dress Codes
            </SecondaryButton>
            <SecondaryButton className="px-4 py-2 pt-2.5 text-tiny text-white text-sans font-regular">
              Investing - Stocks & Crypto  
            </SecondaryButton>
            <SecondaryButton className="px-4 py-2 pt-2.5 text-tiny text-white text-sans font-regular">
              Investing - Real Estates 
            </SecondaryButton>
            <SecondaryButton className="px-4 py-2 pt-2.5 text-tiny text-white text-sans font-regular">
              Tech Knowledge
            </SecondaryButton>
          </div>

          <div className="pb-3"></div>
        </VerticalCard>

  
      </div>

  
    </SectionContainer>
  );
}
