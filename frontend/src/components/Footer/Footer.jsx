import CircularButton from "../Buttons/CircularButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import FooterList from "./FooterList";

const companyLinks = ["About", "Jobs", "For the record"];

const communityLinks = ["Advertising", "Investors", "Vendors"];

const usefulLinks = ["Support", "Free Mobile App"];

const socialIcons = [faInstagram, faTwitter, faFacebook];

export default function Footer() {
  return (
    <footer className="flex flex-col mt-12 gap-9 px-7">
      <div className="flex justify-between gap-10">
        <div className="flex flex-wrap gap-x-28 gap-y-10">
          <FooterList title="Company" links={companyLinks} />

          <FooterList title="Communities" links={communityLinks} />

          <FooterList title="Useful links" links={usefulLinks} />
        </div>

        <ul className="flex gap-3">
          {socialIcons.map((icon, i) => (
            <li key={`social${i}`}>
              <CircularButton
                className="w-10 bg-neutral-700 hover:bg-neutral-500"
                href="#"
              >
                <FontAwesomeIcon size="lg" icon={icon} />
              </CircularButton>
            </li>
          ))}
        </ul>
      </div>

      <p className="flex justify-end pr-5 text-md text-neutral-400">
        &copy; &nbsp;2024 &nbsp;M
      </p>

      <hr className="pb-10 border-t-neutral-600" />
    </footer>
  );
}
