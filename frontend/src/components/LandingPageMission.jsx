export default function LandingPageMission() {
  return (
    <div>
      <div className="hidden md:block">
        <div className="flex justify-center items-center leading-tight flex-col mx-[9vw] mt-[12vh] font-extrabold text-4xl text-neutral-200">
          <div>Your Personal Growth & Success</div>
          <div>Matters To Us</div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex justify-center items-center text-center leading-tight flex-col mx-[10vw] mt-[9vh] font-extrabold text-3xl text-neutral-200">
          <div>Top-Performing Outcome with Top-Performing Mentors</div>
        </div>
      </div>
    </div>
  );
}
