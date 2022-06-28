/* eslint-disable @next/next/no-img-element */
export default function Stats(props) {
  return (
    <div>
      <h1 className="text-7xl font-extrabold">{props.metric}</h1>
      <label>
        <span className="flex items-baseline">
          <img src={props.src} alt={props.alt} />
          <h3 className="text-xl font-normal tracking-widest ml-2 mt-4">
            {props.text}
          </h3>
        </span>
      </label>
    </div>
  );
}
