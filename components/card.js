export default function Card(props) {
  return (
    <>
      <div className="border-2 border-slate-300 rounded-2xl p-5">
        <h1 className="font-extrabold">{props.number}</h1>
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="45"
            viewBox="0 0 50 45"
            fill="none"
          >
            <rect y="15" width="50" height="30" fill={props.color} />
            <rect width="39" height="10" fill="black" />
          </svg>
        </div>
        <div className="grid justify-items-center">
          <h1 className="text-3xl font-extrabold max-w-[16rem] text-center justify-self-center mt-5 mb-3">
            {props.title}
          </h1>
          <p className="max-w-xs text-paragraph-gray text-center">
            {props.description}
          </p>
        </div>
      </div>
    </>
  );
}
