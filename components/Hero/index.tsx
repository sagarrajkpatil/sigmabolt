"use client";
import Image from "next/image";
import { useState } from "react";
import { dataConstant } from "../DataConstant";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-70">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
            <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
              {dataConstant.bodySubTitle}
              </h1>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
              <img src="/images/nut-bolt.png" />
              {/* {dataConstant.bodySubTitle} */}
              </h1>
              <p>{dataConstant.bodyText} </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  {/* <div className="flex flex-wrap gap-5">
                
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Read More
                    </button>
                  </div> */}
                </form>
                <br/>
            {/* <div dangerouslySetInnerHTML={{__html: dataConstant.list}}></div> */}
               
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                {/* <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                /> */}
                <div className=" relative aspect-[700/444] w-full">
                  {/* <Image
                    className="shadow-Sigma-l dark:hidden"
                    src="/images/nut-bolt.png"
                    alt="Hero"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                  <Image
                    className="hidden shadow-Sigma-l dark:block"
                    src="/images/nut-bolt.png"
                    alt="Hero"
                    fill
                    style={{ objectFit: "contain" }}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
