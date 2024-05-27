import mb_portrait from "../../static/images/muscle_building_portrait.png";
import mb_banner from "../../static/images/course_banner.png";
import Footer from "../../components/Footer/Footer";

export default function MuscleBuilding() {
  return (
    <div className="flex flex-col pt-8 pl-8 overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-800 scrollbar-thumb-hover-gray-600">
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

      <div className="pl-5 text-lg font-bold pt-7">
        Series 1: Nutrition Theory
      </div>

      <Footer />
      <Footer />
    </div>
  );
}
