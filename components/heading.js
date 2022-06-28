export default function Heading({ title, className }) {
  return (
    <>
      <h1
        className={`text-6xl font-extrabold tracking-wide leading-[72px]",
          ${className}`}
      >
        {title}
      </h1>
    </>
  );
}
