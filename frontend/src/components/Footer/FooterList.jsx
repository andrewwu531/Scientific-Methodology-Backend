import FlatButton from "../Buttons/FlatButton";

export default function FooterList({ title, links }) {
  return (
    <ul className="flex flex-col gap-2">
      <li className="mb-2 text-xl font-bold">{title}</li>

      {links.map((link) => (
        <li key={link}>
          <button
            href="#"
            className="text-md focus:outline-white whitespace-nowrap text-neutral-300 hover:text-white hover:underline hover:underline-offset-1"
          >
            {link}
          </button>
        </li>
      ))}
    </ul>
  );
}
