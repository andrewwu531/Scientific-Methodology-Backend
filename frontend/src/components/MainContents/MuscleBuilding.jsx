import mb_portrait from "../../static/images/muscle_building_portrait.png";
import mb_banner from "../../static/images/course_banner.png";
import Footer from "../../components/Footer/Footer";

export default function MuscleBuilding() {
  return (
    <div className="flex flex-col pl-8 overflow-auto pt-7 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-800 scrollbar-thumb-hover-gray-600">
      <div className="pb-2 text-2xl font-bold">
        The Science of Shredded Muscle Building
      </div>

      <div className="flex justify-start pl-5">
        <div className="relative pt-5 w-36 h-38">
          <img
            src={mb_portrait}
            alt="portrait"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        <div className="h-40 pt-5 pl-10 w-280">
          <img
            src={mb_banner}
            alt="banner"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="pb-3 pl-5 text-lg font-bold pt-7">
        Series 1: Nutrition Theory
      </div>

      <div className="flex flex-row items-center justify-between pt-3 mr-20 bg-black-3 ">
        <div className="px-5 py-2 mr-20 font-sans text-sm text-gray-1">
          S1 E1 &nbsp; &nbsp; Bodybuilding is 80% diet and 20% workout
        </div>
        <div className="flex flex-row items-center">
          {/* <div className="h-1 bg-gray-200 rounded-full"> */}
          <div className="w-32 mr-7 h-0.5 bg-teal-500 rounded-full"></div>
          <div className="text-sm mr-7">32:51</div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between mr-20 bg-black-3">
        <div className="px-5 py-2 mr-20 font-sans text-sm text-gray-1">
          S1 E2 &nbsp; &nbsp; Why the medium calories, medium carbs, low fat and
          high protein diet
        </div>
        <div className="flex flex-row items-center">
          {/* <div className="h-1 bg-gray-200 rounded-full"> */}
          <div className="w-32 mr-7 h-0.5 bg-teal-500 rounded-full"></div>
          <div className="text-sm mr-7">32:51</div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between mr-20 bg-black-3">
        <div className="px-5 py-2 mr-20 font-sans text-sm text-gray-1">
          S1 E3 &nbsp; &nbsp; Calculating your personalised recommended
          calories, protein, carbohydrates and fat intake
        </div>
        <div className="flex flex-row items-center">
          {/* <div className="h-1 bg-gray-200 rounded-full"> */}
          <div className="w-32 mr-7 h-0.5 bg-teal-500 rounded-full"></div>
          <div className="text-sm mr-7">32:51</div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between mr-20 bg-black-3">
        <div className="px-5 py-2 mr-20 font-sans text-sm text-gray-1">
          S1 E4 &nbsp; &nbsp; The importance of food choices: meat, pasta, veg,
          sauce and oil
        </div>
        <div className="flex flex-row items-center">
          {/* <div className="h-1 bg-gray-200 rounded-full"> */}
          <div className="w-32 mr-7 h-0.5 bg-teal-500 rounded-full"></div>
          <div className="text-sm mr-7">32:51</div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between pb-3 mr-20 bg-black-3">
        <div className="px-5 py-2 mr-20 font-sans text-sm text-gray-1">
          S1 E5 &nbsp; &nbsp; Carb cycling & the front-heavy approach dieting
        </div>
        <div className="flex flex-row items-center">
          {/* <div className="h-1 bg-gray-200 rounded-full"> */}
          <div className="w-32 mr-7 h-0.5 bg-teal-500 rounded-full"></div>
          <div className="text-sm mr-7">32:51</div>
        </div>
      </div>

      <div className="pb-3 pl-5 text-lg font-bold pt-7">
        Series 2: Weightlifting Mechanisms
      </div>

      <div className="flex flex-row items-center justify-between pt-3 mr-20 bg-black-3 ">
        <div className="px-5 py-2 mr-20 font-sans text-sm text-gray-1">
          S1 E1 &nbsp; &nbsp; Bodybuilding is 80% diet and 20% workout
        </div>
        <div className="flex flex-row items-center">
          {/* <div className="h-1 bg-gray-200 rounded-full"> */}
          <div className="w-32 mr-7 h-0.5 bg-teal-500 rounded-full"></div>
          <div className="text-sm mr-7">32:51</div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between mr-20 bg-black-3">
        <div className="px-5 py-2 mr-20 font-sans text-sm text-gray-1">
          S1 E2 &nbsp; &nbsp; Why the medium calories, medium carbs, low fat and
          high protein diet
        </div>
        <div className="flex flex-row items-center">
          {/* <div className="h-1 bg-gray-200 rounded-full"> */}
          <div className="w-32 mr-7 h-0.5 bg-teal-500 rounded-full"></div>
          <div className="text-sm mr-7">32:51</div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between mr-20 bg-black-3">
        <div className="px-5 py-2 mr-20 font-sans text-sm text-gray-1">
          S1 E3 &nbsp; &nbsp; Calculating your personalised recommended
          calories, protein, carbohydrates and fat intake
        </div>
        <div className="flex flex-row items-center">
          {/* <div className="h-1 bg-gray-200 rounded-full"> */}
          <div className="w-32 mr-7 h-0.5 bg-teal-500 rounded-full"></div>
          <div className="text-sm mr-7">32:51</div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between mr-20 bg-black-3">
        <div className="px-5 py-2 mr-20 font-sans text-sm text-gray-1">
          S1 E4 &nbsp; &nbsp; The importance of food choices: meat, pasta, veg,
          sauce and oil
        </div>
        <div className="flex flex-row items-center">
          {/* <div className="h-1 bg-gray-200 rounded-full"> */}
          <div className="w-32 mr-7 h-0.5 bg-teal-500 rounded-full"></div>
          <div className="text-sm mr-7">32:51</div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between pb-3 mr-20 bg-black-3">
        <div className="px-5 py-2 mr-20 font-sans text-sm text-gray-1">
          S1 E5 &nbsp; &nbsp; Carb cycling & the front-heavy approach dieting
        </div>
        <div className="flex flex-row items-center">
          {/* <div className="h-1 bg-gray-200 rounded-full"> */}
          <div className="w-32 mr-7 h-0.5 bg-teal-500 rounded-full"></div>
          <div className="text-sm mr-7">32:51</div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
