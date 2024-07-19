import CircularButton from "../Buttons/CircularButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import FooterList from "./FooterList";

const companyLinks = ["Mission", "Legal", "Privacy"];

const communityLinks = [
  "For Artists",
  "Developers",
  "Advertising",
  "Investors",
  "Vendors",
];

const usefulLinks = ["Support", "Free Mobile App"];

const socialIcons = [faInstagram, faTwitter, faFacebook];

export default function Footer() {
  return (
    <footer className="flex flex-col mb-12 mt-16 gap-9 mx-[5vw]">
      <p className="flex justify-end pr-5 text-md text-neutral-300">
        &copy; 2024
      </p>
    </footer>
  );
}
