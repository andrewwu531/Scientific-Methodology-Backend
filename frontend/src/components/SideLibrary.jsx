import SectionContainer from "./SectionContainer";
import VerticalCard from "./Cards/VerticalCard";
import SecondaryButton from "./Buttons/SecondaryButton";
import FlatButton from "./Buttons/FlatButton";

const categories = [
  {
    title: "Academics & Language Learning",
    items: [
      { text: "University 1st Class Honour Guide", border: true },
      { text: "High School Past Paper Q&A", border: true },
      { text: "Sample Topic Essays", border: false },
      { text: "English Pronunciation", border: true },
      { text: "Accents & Speech Delivery", border: false },
      { text: "Business English", border: false },
      { text: "Storytelling Principles", border: false },
      { text: "Comedy Writing", border: false },
    ],
  },
  {
    title: "Health & Lifestyle",
    items: [
      { text: "Muscle Building", border: true },
      { text: "Weight Loss", border: true },
      { text: "Fashion", border: false },
      { text: "Meal Recipes", border: false },
      { text: "Social Skills", border: false },
      { text: "Makeup", border: false },
      { text: "Hairstyles", border: false },
      { text: "Psychology", border: false },
    ],
  },
  {
    title: "Social & Entertainment",
    items: [
      { text: "Movies & TV Shows", border: true },
      { text: "Travel Journals", border: true },
      { text: "Football", border: true },
      { text: "Basketball", border: false },
      { text: "Martial Art", border: false },
      { text: "Pets", border: false },
      { text: "Cars & Driving Licence Test", border: false },
    ],
  },
  {
    title: "Career & Finance",
    items: [
      { text: "Sample CVs & Cover Letters", border: true },
      { text: "Job Searching Guide", border: true },
      { text: "Interview Techniques", border: true },
      { text: "Dress Codes", border: false },
      { text: "Investing - Stocks & Crypto", border: false },
      { text: "Investing - Real Estates", border: false },
      { text: "Tech Knowledge", border: false },
    ],
  },
];

export default function SideLibrary() {
  return (
    <div>
      <SectionContainer>
        <div className="flex flex-col overflow-auto h-[70vh] scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-800 scrollbar-thumb-hover-gray-600">
          <VerticalCard className="flex flex-col items-start gap-3 p-3.5 pb-5 rounded-lg bg-black-1">
            {categories.map((category) => (
              <div key={category.title}>
                <p className="pt-2 pb-3 pl-2 text-base font-bold text-white">
                  {category.title}
                </p>
                <div className="flex flex-wrap gap-2.5 mb-3">
                  {category.items.map((item, index) => (
                    <SecondaryButton
                      key={index}
                      className={`px-4 py-2 pt-2.5 text-tiny text-neutral-100 text-sans font-regular ${
                        item.border ? "border-2 border-yellow-400" : ""
                      }`}
                    >
                      {item.text}
                    </SecondaryButton>
                  ))}
                </div>
              </div>
            ))}
            <div className="pb-3"></div>
          </VerticalCard>
        </div>
        <div className="bg-neutral-900 flex flex-col items-start justify-center px-5 h-[9vh]">
          <ul className="flex flex-wrap text-[0.9rem] text-neutral-400 gap-3">
            {["About", "Customer Support", "Legal", "Privacy"].map((item) => (
              <li key={item}>
                <FlatButton href="#">{item}</FlatButton>
              </li>
            ))}
          </ul>
        </div>
      </SectionContainer>
    </div>
  );
}
