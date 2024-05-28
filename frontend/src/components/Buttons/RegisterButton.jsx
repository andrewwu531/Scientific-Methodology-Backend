import MainButton from "./MainButton";

export default function RegisterButton({ type, href, className, children }) {
  return (
    <MainButton
      type={type}
      href={href}
      className={`text-base font-bold bg-yellow-400 rounded-lg  ${className}`}
    >
      {children}
    </MainButton>
  );
}
