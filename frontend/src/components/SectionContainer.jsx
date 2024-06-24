export default function SectionContainer({ className, children }) {
  return (
    <div className={`flex flex-col rounded-t-xl ${className}`}>{children}</div>
  );
}
