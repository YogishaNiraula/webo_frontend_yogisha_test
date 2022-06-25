/* eslint-disable @next/next/no-img-element */
// import Layout from "../components/layout";
import Image from "next/image";

export default function Index() {
  return (
    <>
      <header></header>
      <main>
        {/* Companies Logo */}
        <section className="bg-webo-gray py-12">
          <h2 className="text-center text-2xl mb-6">
            Over 32k+ software businesses growing with AR Shakir.
          </h2>
          <div className="grid md:grid-cols-7 justify-items-center gap-4 container mx-auto">
            <img src="/images/companies/OpenZeppelin.png" alt="OpenZeppelin" />
            <img src="/images/companies/Oracle.png" alt="Oracle" />
            <img src="/images/companies/Morpheus.png" alt="Morpheus" />
            <img src="/images/companies/Samsung.png" alt="Samsung" />
            <img src="/images/companies/Monday.png" alt="Monday" />
            <img src="/images/companies/Segment.png" alt="Segment" />
            <img src="/images/companies/Protonet.png" alt="Protonet" />
          </div>
        </section>
        {/* Companies Logo */}
        <section className="container mx-auto py-16">
          {/* Automated Tracking */}
          <div className="flex justify-between">
            <div className="max-w-lg">
              <h1 className="text-6xl font-extrabold">
                Automated portfolio tracking
              </h1>
              <p className="font-medium my-5">
                Yet bed any for travelling assistance indulgence unpleasing. Not
                thoughts all exercise blessing.
              </p>
            </div>
            <div className="bg-quote-gray p-9 rounded-2xl max-w-md relative">
              <svg
                className="absolute -top-4 left-5"
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
              >
                <circle cx="22" cy="22" r="22" fill="black" />
                <path
                  d="M29.1702 14.2559L28.8533 16.7119C28.0787 16.6591 27.4801 16.7999 27.0575 17.1344C26.635 17.4689 26.3533 17.9355 26.2125 18.534C26.0716 19.1326 26.0452 19.8104 26.1332 20.5675H29.1702V26.9319H23.334V20.0393C23.334 17.9619 23.8269 16.395 24.8128 15.3386C25.8163 14.2647 27.2688 13.9038 29.1702 14.2559ZM21.0364 14.2559L20.7195 16.7119C19.9449 16.6591 19.3463 16.7999 18.9238 17.1344C18.5012 17.4689 18.2195 17.9355 18.0787 18.534C17.9379 19.1326 17.9114 19.8104 17.9995 20.5675H21.0364V26.9319H15.2002V20.0393C15.2002 17.9619 15.6932 16.395 16.6791 15.3386C17.6826 14.2647 19.135 13.9038 21.0364 14.2559Z"
                  fill="white"
                />
              </svg>
              <figure>
                <blockquote>
                  Wise busy past both park when an ye no. Nay likely her length
                  sooner thrown sex lively income. The expense windows adapted
                  sir. Wrong widen.
                </blockquote>
                <figcaption className="mt-4">
                  - Mike Taylor, Web Designer
                </figcaption>
              </figure>
            </div>
          </div>
          {/* Automated Tracking */}
          {/* Cards */}
          <div className="grid grid-cols-3 gap-16 my-20">
            <div className="border-2 border-slate-300 rounded-2xl p-5">
              <h1 className="font-extrabold">01</h1>
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="45"
                  viewBox="0 0 50 45"
                  fill="none"
                >
                  <rect y="15" width="50" height="30" fill="#3734A9" />
                  <rect width="39" height="10" fill="black" />
                </svg>
              </div>
              <div className="grid justify-items-center">
                <h1 className="text-3xl font-extrabold max-w-xs text-center justify-self-center mt-5 mb-3">
                  Connect wallets & companies
                </h1>
                <p className="max-w-xs text-paragraph-gray text-center">
                  Indulgence way everything joy alteration boisterous the
                  attachment. Party we years to order allow asked of.{" "}
                </p>
              </div>
            </div>
            <div className="border-2 border-slate-300 rounded-2xl px-5 py-8">
              <h1 className="font-extrabold">02</h1>
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="45"
                  viewBox="0 0 50 45"
                  fill="none"
                >
                  <rect y="15" width="50" height="30" fill="#FF7F5C" />
                  <rect width="39" height="10" fill="black" />
                </svg>
              </div>
              <div className="grid justify-items-center">
                <h1 className="text-3xl font-extrabold max-w-xs text-center justify-self-center mt-5 mb-3">
                  Review <br />
                  transactions
                </h1>
                <p className="max-w-xs text-paragraph-gray text-center">
                  Indulgence way everything joy alteration boisterous the
                  attachment. Party we years to order allow asked of.
                </p>
              </div>
            </div>
            <div className="border-2 border-slate-300 rounded-2xl p-5">
              <h1 className="font-extrabold">03</h1>
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="45"
                  viewBox="0 0 50 45"
                  fill="none"
                >
                  <rect y="15" width="50" height="30" fill="#FDBC64" />
                  <rect width="39" height="10" fill="black" />
                </svg>
              </div>
              <div className="grid justify-items-center">
                <h1 className="text-3xl font-extrabold max-w-xs text-center justify-self-center mt-5 mb-3">
                  Get income
                  <br /> insights
                </h1>
                <p className="max-w-xs text-paragraph-gray text-center">
                  Indulgence way everything joy alteration boisterous the
                  attachment. Party we years to order allow asked of.
                </p>
              </div>
            </div>
          </div>
          {/* Cards */}
          {/* Track Payments */}
          <div className="md:grid grid-cols-2 gap-10 place-content-between">
            <div>
              <img src="/images/Card-bg.png" alt="card background" />
            </div>
            <div className="max-w-2xl justify-self-end">
              <h5 className="uppercase font-bold text-[#3734A9] mb-5">
                Why Choose Us
              </h5>
              <h1 className="text-6xl font-extrabold">
                Track your payments
                <br /> on the go with the
                <br /> best way possible
              </h1>
              <p className="my-5 text-paragraph-gray">
                Indulgence way everything joy alteration boisterous the
                attachment. Party we years to order allow asked of.
              </p>
              <hr className="my-5" />
              <div className="flex">
                <img src="/images/svg/check.svg" alt="check" />
                <p className="ml-4 text-paragraph-gray">
                  Get Overview at a glance
                </p>
              </div>
              <div className="flex my-4">
                <img src="/images/svg/check.svg" alt="check" />
                <p className="ml-4 text-paragraph-gray">
                  Deposit funds easily, security
                </p>
              </div>
              <div className="flex">
                <img src="/images/svg/check.svg" alt="check" />
                <p className="ml-4 text-paragraph-gray">Get Live Support</p>
              </div>
            </div>
          </div>
          {/* Track Pyaments */}
          {/* Save Money */}
          <div className="grid grid-cols-2 gap-10 place-content-between my-20">
            <div className="max-w-2xl justify-self-start">
              <h5 className="uppercase font-bold text-[#3734A9] mb-5">
                Why Choose Us
              </h5>
              <h1 className="text-6xl font-extrabold">
                Save money with proper transaction
              </h1>
              <p className="my-5 text-paragraph-gray">
                We so opinion friends me message as delight. Whole front do of
                plate heard oh ought. His defective nor convinced residence own.
              </p>
              <div className="bg-quote-gray p-8 rounded-2xl max-w-lg relative mt-10">
                <svg
                  className="absolute -top-4 left-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                >
                  <circle cx="22" cy="22" r="22" fill="black" />
                  <path
                    d="M29.1702 14.2559L28.8533 16.7119C28.0787 16.6591 27.4801 16.7999 27.0575 17.1344C26.635 17.4689 26.3533 17.9355 26.2125 18.534C26.0716 19.1326 26.0452 19.8104 26.1332 20.5675H29.1702V26.9319H23.334V20.0393C23.334 17.9619 23.8269 16.395 24.8128 15.3386C25.8163 14.2647 27.2688 13.9038 29.1702 14.2559ZM21.0364 14.2559L20.7195 16.7119C19.9449 16.6591 19.3463 16.7999 18.9238 17.1344C18.5012 17.4689 18.2195 17.9355 18.0787 18.534C17.9379 19.1326 17.9114 19.8104 17.9995 20.5675H21.0364V26.9319H15.2002V20.0393C15.2002 17.9619 15.6932 16.395 16.6791 15.3386C17.6826 14.2647 19.135 13.9038 21.0364 14.2559Z"
                    fill="white"
                  />
                </svg>
                <figure>
                  <blockquote>
                    Wise busy past both park when an ye no. Nay likely her
                    length sooner thrown sex lively income. The expense windows.
                  </blockquote>
                  <figcaption className="mt-4">
                    - Mike Taylor, Web Designer
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="bg-webo-blue rounded-md ">
              <img src="/images/handwithcard.png" alt="hand with card" />
            </div>
          </div>
          {/* Save Money */}
        </section>
        {/* Features that blows mind */}
        <section className="bg-webo-blue py-20">
          <div className="container mx-auto">
            <h1 className="font-extrabold text-6xl">
              Features that blows mind
            </h1>
            <p className="max-w-lg my-5">
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
            </p>
            <div className="grid grid-cols-3 gap-10">
              <div className="bg-gray-50 rounded-2xl p-5 border-2 border-slate-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="45"
                  viewBox="0 0 50 45"
                  fill="none"
                >
                  <rect y="15" width="50" height="30" fill="#3734A9" />
                  <rect width="39" height="10" fill="black" />
                </svg>
                <h1 className="text-2xl font-extrabold mt-5 mb-3">
                  Really boy law county she unable her sister
                </h1>
                <p>
                  We so opinion friends me message as delight. Whole front do of
                  plate heard oh ought.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-5 border-2 border-slate-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="45"
                  viewBox="0 0 50 45"
                  fill="none"
                >
                  <rect y="15" width="50" height="30" fill="#FF7F5C" />
                  <rect width="39" height="10" fill="black" />
                </svg>
                <h1 className="text-2xl font-extrabold mt-5 mb-3">
                  Among sex are leave law built now
                </h1>
                <p>
                  We so opinion friends me message as delight. Whole front do of
                  plate heard oh ought.
                </p>
              </div>
              <div className="grid gap-10">
                <div className="bg-gray-50 rounded-2xl p-5 border-2 border-slate-200">
                  <h1 className="text-2xl font-extrabold mt-5 mb-3">
                    Merits behind on afraid or warmly
                  </h1>
                </div>
                <div className="bg-gray-50 rounded-2xl p-5 border-2 border-slate-200">
                  <h1 className="text-2xl font-extrabold mt-5 mb-3">
                    Believing neglected so so allowance existence
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Features that blows mind */}
      </main>
      <footer></footer>
    </>
  );
}
