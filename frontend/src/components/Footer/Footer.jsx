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
    <footer className="flex flex-col px-12 pb-8 gap-7 bg-neutral-900">
      <p className="flex justify-end pr-5 text-md text-neutral-400">
        &copy; &nbsp;2024 &nbsp;M
      </p>
    </footer>
  );
}
