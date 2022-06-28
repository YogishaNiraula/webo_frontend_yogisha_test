import * as Accordion from "@radix-ui/react-accordion";

export default function FAQ(props) {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className="border-2 border-gray-300 rounded-md p-5 bg-white"
    >
      <Accordion.Item value="item-2" className="bg-white">
        <Accordion.Header>
          <Accordion.Trigger className="flex justify-between w-full ">
            <span className="font-extrabold text-xl">{props.summary}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 20.5V0.5H11V20.5H9Z"
                fill="#3D3D3D"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M-1.90735e-06 9.5L20 9.5L20 11.5L-1.99477e-06 11.5L-1.90735e-06 9.5Z"
                fill="#3D3D3D"
              />
            </svg>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="py-4">{props.details}</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
