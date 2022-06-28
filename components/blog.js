/* eslint-disable @next/next/no-img-element */
export default function Blog({ title, summary, image, alt = "blog article" }) {
  return (
    <article className="bg-white overflow-hidden w-full lg:max-w-[382px]">
      <header className="p-6 h-[185px]">
        <h5 className="uppercase font-bold tracking-wider">{title}</h5>
        <h2 className="font-bold text-2xl my-1 tracking-wide">{summary}</h2>
      </header>
      <img src={image} className="w-full" alt={alt} />
    </article>
  );
}
