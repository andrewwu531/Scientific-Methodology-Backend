import FlatButton from "./Buttons/FlatButton";
import RegisterButton from "./Buttons/RegisterButton";
import { routes } from "../shared/routes";

export default function Navbar() {
  return (
    <nav className="bg-black-1 flex justify-between px-9 h-[10vh]">
      <div className="flex items-center justify-center gap-2 text-3xl font-bold">
        M
      </div>

      <ul role="menu" className="flex items-center gap-7">
        <li>
          <FlatButton
            href="#"
            className="text-lg font-bold text-neutral-400 hover:text-white hover:scale-105"
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
