import mb_banner from "../../static/images/Muscle_Building_Image_2.jpg";
import Footer from "../../components/Footer/Footer";
import mb_icon1 from "../../static/images/Muscle_Building_Video_Icon_1.jpg";
import mb_icon2 from "../../static/images/Muscle_Building_Video_Icon_2.jpg";
import mb_icon3 from "../../static/images/Muscle_Building_Video_Icon_3.jpg";
import mb_icon4 from "../../static/images/Muscle_Building_Video_Icon_4.jpg";
import mb_icon5 from "../../static/images/Muscle_Building_Video_Icon_5.jpg";
import MuscleBuildingAccordion from "../Accordion/MuscleBuildingAccordion";

export default function MuscleBuilding() {
  return (
    <div>
      <div className="flex flex-col pb-16 pl-8 overflow-auto pt-7 scrollbar-thin scrollbar-thumb-rounded bg-black-1 scrollbar-thumb-gray-800 scrollbar-thumb-hover-gray-600">
        <div className="pb-6 text-2xl font-bold text-neutral-100">
          The Science of Shredded Muscle Building
        </div>

        {/* <div className="flex flex-row items-center justify-between">
          <div className="w-48 h-48 pt-5">
            <img
              src={mb_portrait}
              alt="portrait"
              className="object-cover w-full h-full rounded-full "
            />
          </div> */}
        <div className="h-40 mr-60">
          <img
            src={mb_banner}
            alt="banner"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        <div className="pb-4 pl-3 text-lg font-bold pt-9 text-neutral-300">
          Series 1: Nutrition Theory
        </div>

        <div className="flex flex-row items-center justify-between pt-3 mr-8 rounded-tl-lg rounded-tr-lg bg-neutral-900 ">
          <div className="flex flex-row items-center justify-start">
            <div className="ml-5 h-7">
              <img
                src={mb_icon1}
                alt="icon"
                className="object-cover w-full h-full rounded-md "
              />
            </div>
            <div className="px-5 py-2 font-sans text-yellow-600 text-small">
              S1 E1 &nbsp; &nbsp; Bodybuilding is 80% diet and 20% workout
            </div>
          </div>
          <div className="flex flex-row items-center">
            {/* <div className="h-1 bg-gray-200 rounded-full"> */}
            <div className="w-32 mr-7 h-0.5 bg-yellow-600 rounded-full"></div>
            <div className="text-sm text-yellow-600 mr-7">32:51</div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between mr-8 bg-neutral-900 ">
          <div className="flex flex-row items-center justify-start">
            <div className="ml-5 h-7">
              <img
                src={mb_icon2}
                alt="icon"
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <div className="px-5 py-2 mr-10 font-sans text-small text-neutral-300">
              S1 E2 &nbsp; &nbsp; Why the medium calories, medium carbs, low fat
              and high protein diet
            </div>
          </div>
          <div className="flex flex-row items-center">
            {/* <div className="h-1 bg-gray-200 rounded-full"> */}
            <div className="w-32 mr-7 h-0.5 bg-teal-500 rounded-full"></div>
            <div className="text-sm text-neutral-300 mr-7">32:51</div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between mr-8 bg-neutral-900 ">
          <div className="flex flex-row items-center justify-start">
            <div className="ml-5 h-7">
              <img
                src={mb_icon3}
                alt="icon"
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <div className="px-5 py-2 mr-10 font-sans text-small text-neutral-300">
              S1 E3 &nbsp; &nbsp; Calculating your personalised recommended
              calories, protein, carbohydrates and fat intake
            </div>
          </div>
          <div className="flex flex-row items-center">
            {/* <div className="h-1 bg-gray-200 rounded-full"> */}
            <div className="w-32 mr-7 h-0.5 bg-teal-500 rounded-full"></div>
            <div className="text-sm mr-7 text-neutral-300">32:51</div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between mr-8 bg-neutral-900 ">
          <div className="flex flex-row items-center justify-start">
            <div className="ml-5 h-7">
              <img
                src={mb_icon4}
                alt="icon"
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <div className="px-5 py-2 mr-10 font-sans text-small text-neutral-300">
              S1 E4 &nbsp; &nbsp; The importance of food choices: meat, pasta,
              veg, sauce and oil
            </div>
          </div>
          <div className="flex flex-row items-center">
            {/* <div className="h-1 bg-gray-200 rounded-full"> */}
            <div className="w-32 mr-7 h-0.5 bg-teal-500 rounded-full"></div>
            <div className="text-sm mr-7 text-neutral-300">32:51</div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between pb-3 mr-8 rounded-bl-lg rounded-br-lg bg-neutral-900 ">
          <div className="flex flex-row items-center justify-start">
            <div className="ml-5 h-7">
              <img
                src={mb_icon5}
                alt="icon"
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <div className="px-5 py-2 mr-10 font-sans text-small text-neutral-300">
              S1 E5 &nbsp; &nbsp; Carb cycling & the front-heavy approach
              dieting
            </div>
          </div>
          <div className="flex flex-row items-center">
            {/* <div className="h-1 bg-gray-200 rounded-full"> */}
            <div className="w-32 mr-7 h-0.5 bg-teal-500 rounded-full"></div>
            <div className="text-sm mr-7 text-neutral-300">32:51</div>
          </div>
        </div>

        <div className="pb-4 pl-3 text-lg font-bold pt-9 text-neutral-300">
          Series 2: Weightlifting Mechanisms
        </div>

        <div className="flex flex-row items-center justify-between pt-3 mr-8 rounded-tl-lg rounded-tr-lg bg-neutral-900 ">
          <div className="flex flex-row items-center justify-start">
            <div className="ml-5 h-7">
              <img
                src={mb_icon1}
                alt="icon"
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <div className="px-5 py-2 mr-10 font-sans text-small text-neutral-300">
              S1 E1 &nbsp; &nbsp; Bodybuilding is 80% diet and 20% workout
            </div>
          </div>
          <div className="flex flex-row items-center">
            {/* <div className="h-1 bg-gray-200 rounded-full"> */}
            <div className="w-32 mr-7 h-0.5 bg-teal-500 rounded-full"></div>
            <div className="text-sm mr-7 text-neutral-300">32:51</div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between mr-8 bg-neutral-900 ">
          <div className="flex flex-row items-center justify-start">
            <div className="ml-5 h-7">
              <img
                src={mb_icon2}
                alt="icon"
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <div className="px-5 py-2 mr-10 font-sans text-small text-neutral-300">
              S1 E2 &nbsp; &nbsp; Why the medium calories, medium carbs, low fat
              and high protein diet
            </div>
          </div>
          <div className="flex flex-row items-center">
            {/* <div className="h-1 bg-gray-200 rounded-full"> */}
            <div className="w-32 mr-7 h-0.5 bg-teal-500 rounded-full"></div>
            <div className="text-sm mr-7 text-neutral-300">32:51</div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between mr-8 bg-neutral-900 ">
          <div className="flex flex-row items-center justify-start">
            <div className="ml-5 h-7">
              <img
                src={mb_icon3}
                alt="icon"
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <div className="px-5 py-2 mr-10 font-sans text-small text-neutral-300">
              S1 E3 &nbsp; &nbsp; Calculating your personalised recommended
              calories, protein, carbohydrates and fat intake
            </div>
          </div>
          <div className="flex flex-row items-center">
            {/* <div className="h-1 bg-gray-200 rounded-full"> */}
            <div className="w-32 mr-7 h-0.5 bg-teal-500 rounded-full"></div>
            <div className="text-sm mr-7 text-neutral-300">32:51</div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between mr-8 bg-neutral-900 ">
          <div className="flex flex-row items-center justify-start">
            <div className="ml-5 h-7">
              <img
                src={mb_icon4}
                alt="icon"
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <div className="px-5 py-2 mr-10 font-sans text-small text-neutral-300">
              S1 E4 &nbsp; &nbsp; The importance of food choices: meat, pasta,
              veg, sauce and oil
            </div>
          </div>
          <div className="flex flex-row items-center">
            {/* <div className="h-1 bg-gray-200 rounded-full"> */}
            <div className="w-32 mr-7 h-0.5 bg-teal-500 rounded-full"></div>
            <div className="text-sm mr-7 text-neutral-300">32:51</div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between pb-3 mr-8 rounded-bl-lg rounded-br-lg bg-neutral-900 ">
          <div className="flex flex-row items-center justify-start">
            <div className="ml-5 h-7">
              <img
                src={mb_icon5}
                alt="icon"
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <div className="px-5 py-2 text-small mr-10font-sans text-neutral-300">
              S1 E5 &nbsp; &nbsp; Carb cycling & the front-heavy approach
              dieting
            </div>
          </div>
          <div className="flex flex-row items-center">
            {/* <div className="h-1 bg-gray-200 rounded-full"> */}
            <div className="w-32 mr-7 h-0.5 bg-teal-500 rounded-full"></div>
            <div className="text-sm mr-7 text-neutral-300">32:51</div>
          </div>
        </div>
      </div>

      <div>
        <MuscleBuildingAccordion />
      </div>
    </div>
  );
}
