import mb_portrait from "../../static/images/muscle_building_portrait.png";


export default function MuscleBuilding() {
  return (
    <div>

      <div className="my-6 ml-8 text-lg font-bold">
        The Science of Shredded Muscle Building
      </div>

      <img src={ mb_portrait } alt="portrait" className='object-cover w-48 h-48 my-6 ml-12 rounded-full'/>



    </div>
  );
}
