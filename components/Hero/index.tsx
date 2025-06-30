"use client";
import Image from "next/image";
import { useState } from "react";
import { dataConstant } from "../DataConstant";
import {products} from "../../data/products"
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
            <div className="">
            <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
              {dataConstant.bodySubTitle}
              </h1>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
              <img src="/images/nut-bolt1-r.png" />
              {/* {dataConstant.bodySubTitle} */}
              </h1>
              {/* <p>{dataConstant.bodyText} </p> */}

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


          </div>
          <div>
          <div className="home-product-content">
              <ul className="home-product-list" style={{}}>
               {products.categories.map((val) => <li>
                  <a href="/">
                  <center>
                  <img src={val.image} width="100" height="80"/>
                    {/* <amp-img  layout="responsive" src="images/bolts.png" alt="Bolts" title="Bolts" class="i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-built i-amphtml-layout" i-amphtml-layout="responsive" style="--loader-delay-offset: 1ms !important;"><i-amphtml-sizer slot="i-amphtml-svc" style="padding-top: 80%;"></i-amphtml-sizer><img decoding="async" alt="Bolts" title="Bolts" src="images/bolts.png" class="i-amphtml-fill-content i-amphtml-replaced-content"></amp-img> */}
                    <h2>{val.name}</h2>
                    </center>
                  </a>
              </li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
