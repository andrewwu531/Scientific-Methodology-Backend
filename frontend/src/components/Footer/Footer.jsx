import CircularButton from "../Buttons/CircularButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
// import FooterList from "./FooterList";

// const companyLinks = ["About", "Jobs", "For the record"];

// const communityLinks = ["Advertising", "Investors", "Vendors"];

// const usefulLinks = ["Support", "Free Mobile App"];

const socialIcons = [faInstagram, faTwitter, faFacebook];

export default function Footer() {
  return (
    <footer className="flex flex-col px-12 gap-7 bg-neutral-900">
      <div className="flex items-center justify-between">
        <p className="flex justify-end pr-5 text-md text-neutral-400">
          &copy; &nbsp;2024 &nbsp;M
        </p>

        <ul className="flex gap-2">
          {socialIcons.map((icon, i) => (
            <li key={`social${i}`}>
              <CircularButton className="w-10 hover:bg-neutral-500" href="#">
                <FontAwesomeIcon size="lg" icon={icon} />
              </CircularButton>
            </li>
          ))}
        </ul>
      </div>

      <hr className="pb-10 border-t-neutral-600" />
    </footer>
  );
}
