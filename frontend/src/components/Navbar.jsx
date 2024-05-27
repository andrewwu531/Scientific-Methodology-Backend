import FlatButton from "./Buttons/FlatButton";
import RegisterButton from "./Buttons/RegisterButton";
import { routes } from "../shared/routes";

export default function Navbar() {
  return (
    <nav className="bg-black-1 flex justify-between px-8 pt-1.5 h-[10vh]">
      <div className="flex flex-row justify-start">
        <div className="flex flex-col gap-2 pt-4 text-3xl font-bold ">M</div>
        <div className="flex gap-2 pl-12 text-sm font-bold pt-9 ">
          | &nbsp; Academics &nbsp; | &nbsp; Language &nbsp; | &nbsp; Lifestyles
          &nbsp; | &nbsp; Career &nbsp; | &nbsp; Personal Development &nbsp; |
        </div>
      </div>

      <ul role="menu" className="flex items-center gap-7">
        <li>
          <FlatButton
            href="#"
            className="text-base font-bold text-neutral-400 hover:text-white hover:scale-105"
          >
            Try for Free
          </FlatButton>
        </li>
        <li>
          <RegisterButton href={routes.LOGIN} className="px-6 py-3">
            Register/ Log in
          </RegisterButton>
        </li>
      </ul>
    </nav>
  );
}
