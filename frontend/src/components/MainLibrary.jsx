import SectionContainer from "./SectionContainer";
import VerticalCard from "./Cards/VerticalCard";
import SecondaryButton from "./Buttons/SecondaryButton";
import FlatButton from "./Buttons/FlatButton";

export default function MainLibrary() {
  return (
   
    <SectionContainer>


      <div className="flex flex-col gap-1 px-2 overflow-auto h-[80vh]">
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

      <div className="flex flex-col items-start justify-between gap-5 px-6 pt-5 mb-10 h-[5vh]">
        <ul className="flex flex-wrap text-[0.7rem] text-neutral-400 gap-3">
          <li>
            <FlatButton href="#">About</FlatButton>
          </li>
          <li>
            <FlatButton href="#">Customer Support</FlatButton>
          </li>
          <li>
            <FlatButton href="#">Legal</FlatButton>
          </li>
          <li>
            <FlatButton href="#">Privacy Policy</FlatButton>
          </li>
          <li>
            <FlatButton href="#">Cookies</FlatButton>
          </li>
        </ul>


      </div>
    </SectionContainer>
  );
}
