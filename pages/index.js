/* eslint-disable @next/next/no-img-element */
import Heading from "../components/heading.js";
import FAQ from "../components/accordion.js";
import Card from "../components/card.js";
import Image from "next/image";
import Stats from "../components/stat.js";
import Quote from "../components/quote.js";

export default function Index() {
  return (
    <>
      <header className="bg-gradient-to-r from-[#C9E7F2] to-[#62BADA] xl:h-screen relative overflow-hidden">
        <img
          src="/images/svg/patterns/pattern1.svg"
          alt="pattern"
          className="absolute right-0 top-32"
        />
        <img
          src="/images/svg/patterns/pattern2.svg"
          alt="pattern"
          className="absolute left-0 bottom-24"
        />
        <div className="container mx-auto px-5 pt-8">
          {/* Navbar */}
          <div className="relative hidden md:block">
            <div className="flex justify-between items-center py-6 md:justify-start space-x-10">
              <div className="flex justify-start xl:w-0 xl:flex-1">
                <a href="#">
                  <span className="text-2xl font-bold">AR Shakir</span>
                </a>
              </div>
              <nav className="flex space-x-10">
                <div className="relative group">
                  <button
                    type="button"
                    className="flex items-center"
                    aria-expanded="false"
                  >
                    <span>Product</span>

                    <svg
                      className="ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div className="absolute z-10 px-2 w-screen max-w-xs hidden group-hover:block">
                    <div className="rounded-lg shadow-lg overflow-hidden">
                      <div className="relative grid bg-white px-2 py-6">
                        <a
                          href="#"
                          className="p-3 flex items-start rounded-lg hover:bg-gray-100"
                        >
                          Product 1
                        </a>
                        <a
                          href="#"
                          className="p-3 flex items-start rounded-lg hover:bg-gray-100"
                        >
                          Product 2
                        </a>
                        <a
                          href="#"
                          className="p-3 flex items-start rounded-lg hover:bg-gray-100"
                        >
                          Product 3
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <button
                    type="button"
                    className="flex items-center"
                    aria-expanded="false"
                  >
                    <span>Template</span>

                    <svg
                      className="ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div className="absolute z-10 px-2 w-screen max-w-xs hidden group-hover:block">
                    <div className="rounded-lg shadow-lg overflow-hidden">
                      <div className="relative grid bg-white px-2 py-6">
                        <a
                          href="#"
                          className="p-3 flex items-start rounded-lg hover:bg-gray-100"
                        >
                          Template 1
                        </a>
                        <a
                          href="#"
                          className="p-3 flex items-start rounded-lg hover:bg-gray-100"
                        >
                          Template 2
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <a href="#">Blog</a>
                <a href="#">Pricing</a>
              </nav>
              <div className="flex items-center justify-end flex-1">
                <a href="#">Sign in</a>
                <a
                  href="#"
                  className="ml-8 px-4 py-2 text-white bg-webo-purple"
                >
                  Start Free
                </a>
              </div>
            </div>
          </div>
          {/* Navbar */}

          <div className="grid md:grid-cols-2 gap-10">
            <div className="my-5 place-self-center">
              <Heading title="Managing freelance payments has never been easier" />
              <p className="text-paragraph-gray max-w-sm text-xl my-6">
                Yet bed any for traveling assistance indulgence unpleasing. Not
                thoughts all exercise blessing.
              </p>
              <div className="flex md:flex-row flex-col max-w-sm space-x-10 space-y-5">
                <button className="bg-webo-purple text-white rounded-full md:px-8 md:py-2 py-3">
                  Get Started
                </button>
                <span className="flex items-center">
                  <img
                    src="/images/svg/play.svg"
                    alt="play icon"
                    className="h-12 w-12"
                  />
                  <a className="text-paragraph-gray ml-3">See How It Works</a>
                </span>
              </div>
              <div className="flex items-baseline max-w-sm text-paragraph-gray my-10 justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle cx="12" cy="12.0005" r="12" fill="#3734A9" />
                  <path
                    d="M8 12.0005L10.8 15.0005L16 9.00049"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="ml-2 mr-6">Free Register</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle cx="12" cy="12.0005" r="12" fill="#3734A9" />
                  <path
                    d="M8 12.0005L10.8 15.0005L16 9.00049"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="ml-2">Great Service</p>
              </div>
            </div>
            <img
              src="/images/main.png"
              alt="main image"
              className="justify-self-end h-screen max-h-fit hidden md:block overflow-hidden"
            />
          </div>
        </div>
      </header>
      <main>
        {/* Companies Logo */}
        <section className="bg-webo-gray py-12">
          <h2 className="text-center text-2xl mb-6">
            Over 32k+ software businesses growing with AR Shakir.
          </h2>
          <div className="grid md:grid-cols-7 justify-items-center gap-4 container mx-auto px-5">
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
        <section className="container mx-auto px-5 pt-16 pb-16 xl:pb-0">
          {/* Automated Tracking */}
          <div className="flex xl:flex-row flex-col justify-between">
            <div className="max-w-lg">
              <Heading title="Automated portfolio tracking" />
              <p className="font-medium text-base my-5">
                Yet bed any for traveling assistance indulgence unpleasing. Not
                thoughts all exercise blessing.
              </p>
            </div>
            <div className="max-w-md">
              <Quote
                quote="Wise busy past both park when an ye no. Nay likely her
                    length sooner thrown sex lively income. The expense windows
                    adapted sir. Wrong widen."
                author="- Mike Taylor, Web Designer"
              />
            </div>
          </div>
          {/* Automated Tracking */}
          {/* Cards */}
          <div className="grid md:grid-cols-3 xl:gap-16 gap-5 my-20">
            <Card
              number="01"
              color="#3734A9"
              title="Connect wallets & companies"
              description="Indulgence way everything joy alteration boisterous the
                  attachment. Party we years to order allow asked of."
            />
            <Card
              number="02"
              color="#FF7F5C"
              title="Review transactions"
              description="Indulgence way everything joy alteration boisterous the
                  attachment. Party we years to order allow asked of."
            />
            <Card
              number="03"
              color="#FDBC64"
              title="Get income insights"
              description="Indulgence way everything joy alteration boisterous the
                  attachment. Party we years to order allow asked of."
            />
          </div>
          {/* Cards */}
          {/* Track Payments */}
          <div className="md:grid grid-cols-2 gap-10 place-content-between">
            <div className="relative">
              <img
                src="/images/Card-bg.png"
                alt="card background"
                className="max-h-full"
              />
              <img
                src="/images/svg/patterns/pattern3.svg"
                alt="pattern"
                className="absolute -top-4 right-32 -translate-x-3"
              />
            </div>
            <div className="max-w-2xl justify-self-end">
              <h5 className="uppercase font-bold text-[#3734A9] mb-5">
                Why Choose Us
              </h5>
              <Heading
                title={`Track your payments
                 on the go with the
                 best way possible`}
              />

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
          <div className="grid md:grid-cols-2 gap-10 place-content-between place-items-center mt-10 md:my-0">
            <div className="max-w-2xl justify-self-start">
              <h5 className="uppercase font-bold text-[#3734A9] mb-5">
                Why Choose Us
              </h5>
              <Heading title="Save money with proper transaction" />
              <p className="my-5 text-paragraph-gray">
                We so opinion friends me message as delight. Whole front do of
                plate heard oh ought. His defective nor convinced residence own.
              </p>
              <div className="max-w-lg mt-10">
                <Quote
                  quote="Wise busy past both park when an ye no. Nay likely her
                    length sooner thrown sex lively income. The expense windows."
                  author="- Mike Taylor, Web Designer"
                />
              </div>
            </div>
            <img
              src="/images/handwithcard.png"
              alt="hand with card"
              className="max-h-full xl:-mt-10"
            />
          </div>
          {/* Save Money */}
        </section>
        {/* Features that blows mind */}
        <section className="bg-webo-blue py-20 relative">
          <img
            src="/images/svg/patterns/pattern4.svg"
            alt="pattern"
            className="absolute bottom-14 left-0"
          />
          <div className="container mx-auto px-5">
            <Heading title="Features that blows mind" />
            <p className="max-w-prose my-5">
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
            </p>
            <div className="grid md:grid-cols-3 xl:gap-10 gap-4">
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
              <div className="grid xl:gap-10 gap-5">
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
        {/* Testimonials */}
        <section className="container mx-auto py-20 px-5 relative">
          <img
            src="/images/svg/patterns/pattern5.svg"
            alt="pattern"
            className="absolute top-24 right-10"
          />
          <Heading title="Testimonials" />
          <p className="max-w-prose my-5">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
          </p>
          {/* Slider */}
          <div className="grid grid-cols-2 gap-10 py-16">
            <div className="flex border-2 border-gray-300 rounded-md p-5 relative">
              <svg
                className="absolute -top-8 left-5 h-16 w-16"
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
              <figure className="self-center font-semibold">
                <blockquote className="text-xl">
                  Wise busy past both park when an ye no. Nay likely her length
                  sooner thrown sex lively income. The expense windows adapted
                  sir. Wrong widen.
                </blockquote>
                <figcaption className="mt-4 text-base">
                  - Mike Taylor, Web Designer
                </figcaption>
              </figure>
              <img
                src="/images/testimonials/Testimonial1.png"
                alt="picture of a girl"
              />
            </div>
            <div className="flex border-2 border-gray-300 rounded-md p-5 relative">
              <svg
                className="absolute -top-8 left-5 h-16 w-16"
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
              <figure className="self-center font-semibold">
                <blockquote className="text-xl">
                  Wise busy past both park when an ye no. Nay likely her length
                  sooner thrown sex lively income. The expense windows adapted
                  sir. Wrong widen.
                </blockquote>
                <figcaption className="mt-4 text-base">
                  - Mike Taylor, Web Designer
                </figcaption>
              </figure>
              <img
                src="/images/testimonials/Testimonial2.png"
                alt="picture of a boy"
              />
            </div>
          </div>
          {/* Slider */}
        </section>
        {/* Testimonials */}
        {/* Metric */}
        <section className="bg-webo-purple py-16 text-white relative">
          <img
            src="/images/svg/patterns/pattern6.svg"
            alt="pattern"
            className="absolute right-0 top-6"
          />
          <div className="container mx-auto px-4 grid xl:grid-cols-4 md:grid-cols-3 place-content-center gap-10 md:gap-0">
            <p className="tracking-widest align-top col-span-full xl:col-span-1 place-self-center text-xl xl:text-base">
              We speak with
              <br /> our powerful
              <br /> statistics
            </p>
            <Stats
              metric="1M+"
              src="/images/svg/person.svg"
              alt="person"
              text="Active Users"
            />
            <Stats
              metric="30K+"
              src="/images/svg/star.svg"
              alt="star"
              text="5-Stars Reviews"
            />
            <Stats
              metric="$252M"
              src="/images/svg/star.svg"
              alt="star"
              text="Transactions"
            />
          </div>
        </section>
        {/* Metric */}
        {/* Blog */}
        <section className="container mx-auto xl:py-20 py-10 px-5">
          <Heading title="Recent Blogs" />
          <article className="grid grid-cols-2 gap-4 place-content-between my-6">
            <section className="justify-self-start place-self-center">
              <header>
                <h5 className="uppercase font-bold tracking-wider">
                  Best Practices
                </h5>
                <h2 className="text-bold text-3xl my-3">
                  In design active temper be uneasy.
                  <br /> Thirty for remove plenty regard.
                </h2>
              </header>
              <footer className="mt-10">
                <span className="flex">
                  Read More
                  <img src="/images/svg/arrow-right.svg" alt="arrow right" />
                </span>
              </footer>
            </section>
            <img
              src="/images/blogs/blog1.png"
              alt="people"
              className="justify-self-end"
            />
          </article>
          <div className="grid xl:grid-cols-3">
            <article>
              <header>
                <h5 className="uppercase font-bold tracking-wider">
                  Best Practices
                </h5>
                <h2 className="text-bold text-3xl my-3">
                  Partiality on or
                  <br /> continuing particular
                  <br /> principles as.
                </h2>
              </header>
              <img src="/images/blogs/blog2.png" alt="people" />
            </article>
            <article>
              <header>
                <h5 className="uppercase font-bold tracking-wider">
                  Best Practices
                </h5>
                <h2 className="text-bold text-3xl my-3">
                  Village did removed
                  <br /> enjoyed explain
                </h2>
              </header>
              <img src="/images/blogs/blog3.png" alt="people" />
            </article>
            <article>
              <header>
                <h5 className="uppercase font-bold tracking-wider">
                  Best Practices
                </h5>
                <h2 className="text-bold text-3xl my-3">
                  Wise busy past both <br />
                  park when an ye no.
                  <br /> Nay likely her length.
                </h2>
              </header>
              <img src="/images/blogs/blog4.png" alt="people" />
            </article>
          </div>
        </section>
        {/* Blog */}
        {/* FAQ */}
        <section className="py-10 px-5 relative">
          <img
            src="/images/svg/patterns/pattern8.svg"
            alt="pattern"
            className="absolute left-0 top-36"
          />
          <img
            src="/images/svg/patterns/pattern9.svg"
            alt="pattern"
            className="absolute right-0 top-20"
          />
          <div className="container mx-auto xl:py-20">
            <Heading
              title="Frequently
            asked questions"
            />
            <div className="grid xl:grid-cols-3 xl:gap-10 gap-y-10 mt-12">
              <div className="col-span-2 grid gap-y-4">
                <FAQ
                  details="Offending belonging promotion provision an be oh consulted
                  ourselves it. Blessing welcomed ladyship she met humoured sir
                  breeding her."
                  summary="The expense windows adapted sir. Wrong widen drawn."
                />
                <FAQ
                  details="Offending belonging promotion provision an be oh consulted
                  ourselves it. Blessing welcomed ladyship she met humoured sir
                  breeding her."
                  summary="Six curiosity day assurance bed necessary?"
                />
                <FAQ
                  details="Offending belonging promotion provision an be oh consulted
                  ourselves it. Blessing welcomed ladyship she met humoured sir
                  breeding her."
                  summary="Produce say the ten moments parties?"
                />
                <FAQ
                  details="Offending belonging promotion provision an be oh consulted
                  ourselves it. Blessing welcomed ladyship she met humoured sir
                  breeding her."
                  summary="Simple innate summer fat appear basket his desire joy?"
                />
                <FAQ
                  details="Offending belonging promotion provision an be oh consulted
                  ourselves it. Blessing welcomed ladyship she met humoured sir
                  breeding her."
                  summary="Outward clothes promise at gravity do excited?"
                />
              </div>
              <div className="flex flex-col items-center border-2 border-gray-300 rounded-md px-5 py-8">
                <div className="">
                  <img src="/images/svg/message.svg" alt="message icon" />
                </div>
                <div className="text-center my-6">
                  <h5 className="font-extrabold text-2xl">
                    Do you have more questions?
                  </h5>
                  <p>
                    End-to-end payments and financial management in a single
                    solution. Meet the right platform to help realize.
                  </p>
                </div>
                <div>
                  <button className="bg-webo-red text-white px-24 py-4 self-end">
                    Shoot a Direct Mail
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ */}
        {/* Discover */}
        <section className="container mx-auto py-20 px-5">
          <div className="bg-webo-purple rounded-xl px-16 py-20 flex flex-col items-center relative">
            <img
              src="/images/svg/patterns/pattern10.svg"
              alt="pattern"
              className="absolute left-28 bottom-20"
            />
            <img
              src="/images/svg/patterns/pattern10.svg"
              alt="pattern"
              className="rotate-90 absolute right-28 top-5"
            />
            <img
              src="/images/svg/patterns/pattern11.svg"
              alt="pattern"
              className="absolute left-1/3 top-16 -translate-x-48"
            />
            <img
              src="/images/svg/patterns/pattern12.svg"
              alt="pattern"
              className="absolute left-1/3 bottom-1/3 -translate-x-36"
            />
            <img
              src="/images/svg/patterns/pattern13.svg"
              alt="pattern"
              className="absolute right-10 bottom-10"
            />
            <Heading
              className="text-white text-center my-10"
              title="Discover a better way to
              manage spendings"
            />
            <h1 className="text-white text-6xl font-extrabold text-center my-10"></h1>
            <button className="bg-webo-red rounded-md py-4 px-8 my-10 text-white">
              Get Started Now
            </button>
          </div>
        </section>
        {/* Discover */}
      </main>
      <footer className="container mx-auto px-5">
        <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-0 2xl:gap-8 mt-10 xl:mb-20">
          <section className="flex flex-col space-y-4">
            <h3 className="font-bold text-xl">AR Shakir</h3>
            <p className="text-paragraph-gray">
              Finance helps companies <br />
              manage payments easily.
            </p>
            <section className="flex space-x-4">
              <a href="https://www.linkedin.com/">
                <img
                  src="/images/svg/social/linkedin.svg"
                  alt="linkedin logo"
                />
              </a>
              <a href="https://www.messenger.com/">
                <img
                  src="/images/svg/social/messenger.svg"
                  alt="messenger logo"
                />
              </a>
              <a href="https://twitter.com/">
                <img src="/images/svg/social/twitter.svg" alt="twitter logo" />
              </a>
              <a href="https://twoo.com/">
                <img src="/images/svg/social/twoo.svg" alt="twoo logo" />
              </a>
            </section>
          </section>
          <section className="flex flex-col justify-between">
            <h3 className="font-bold text-xl">Company</h3>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Pricing</a>
          </section>
          <section className="flex flex-col justify-between">
            <h3 className="font-bold text-xl">Resources</h3>
            <a href="#">Proposal Template</a>
            <a href="#">Invoice Template</a>
            <a href="#">Tutorial</a>
            <a href="#">How to write a contract</a>
          </section>
          <section className="flex flex-col mt-10 xl:m-0">
            <h3 className="font-bold text-xl">Join Our Newsletter</h3>
            <form className="flex my-3">
              <input
                type="email"
                placeholder="Your email address"
                className="placeholder:text-slate-400 block bg-quote-gray border  focus:outline-none focus:border-slate-300 px-3 py-2"
              />
              <button
                type="submit"
                className="bg-webo-purple text-white px-2 2xl:px-4 py-2"
              >
                Subscribe
              </button>
            </form>
            <p className="text-paragraph-gray my-4">
              * Will send you weekly updates for your better finance management.
            </p>
          </section>
        </div>
        <hr />
        <p className="text-center my-5">
          Copyright @ AR Shakir 2022. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
