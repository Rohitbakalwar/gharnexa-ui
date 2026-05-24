import React from "react";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { IoPlayCircleOutline } from "react-icons/io5";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const Hero = () => {
  const customers = [
    "/customer1.jpg",
    "/customer2.jpg",
    "/customer3.jpg",
    "/customer4.jpg",
    "/customer5.jpg",
  ];
  return (
    <section className="relative px-10 pt-10 pb-16 overflow-hidden bg-white">
      <div className="grid grid-cols-12 items-center gap-8">
        {/* Left */}
        <div className="col-span-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm text-sm font-semibold mb-7 text-slate-900">
            <span className="text-yellow-400">★</span>
            Trusted by 2500+ Families
          </div>

          <h1 className="text-[50px] leading-[1.08] font-extrabold tracking-tight text-slate-900">
            Apna Ghar.
            <br />
            <span className="text-purple-700">Apne Log.</span>
            <br />
            <span className="text-orange-500">Pakka Waada.</span>
          </h1>

          <p className="mt-6 text-[17px] leading-[1.8] text-slate-800 max-w-[520px]">
            Construction, Interior Design aur Building Materials -
            <br />
            sab kuch ek platform par. Local experts ke saath,
            <br />
            sapno ka ghar banayein asaan tareeke se.
          </p>

          <div className="mt-8 flex items-center gap-5">
            <button className="flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-[14px]">
              Start Your Project
              <GoArrowRight className="text-xl" />
            </button>

            <button className="flex items-center gap-2 border border-purple-600 text-purple-700 px-8 py-4 rounded-xl font-bold text-[14px]">
              <IoPlayCircleOutline className="text-xl" />
              How It Works
            </button>
          </div>

          <div className="mt-9 flex items-center gap-5">
            <div className="flex -space-x-3">
              {customers.map((customer, i) => (
                <Image
                  key={i}
                  src={customer}
                  width={44}
                  height={44}
                  alt="customer"
                  className="w-11 h-11 rounded-full bg-gray-300 border-2 border-white object-cover"
                />
              ))}
            </div>

            <p className="text-base text-gray-600">
              <span className="text-purple-700 font-bold">30,000+</span> happy
              customers <br /> across India
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="col-span-8 relative">
          <div className="absolute left-0 top-36 w-64 h-64 bg-yellow-400 rounded-full -z-10" />

          <Image
            src="/house-img.png"
            width={1000}
            height={650}
            priority
            alt="Modern House"
            className="w-full h-[500px] object-cover rounded-tl-[180px] rounded-br-[90px]"
          />

          <div className="absolute right-16 top-16 bg-white rounded-[26px] shadow-xl p-6 w-[410px]">
            <h2 className="text-[28px] font-extrabold mb-8 text-slate-900">
              Get Your <span className="text-orange-500">Free Estimate</span>
            </h2>

            <div className="space-y-4">
              <div className="relative">
                <label className="absolute -top-3 left-16 bg-white px-2 text-sm text-gray-500">
                  Project Type
                </label>

                <div className="flex items-center gap-4 border border-gray-200 rounded-xl px-4 py-4">
                  <HiOutlineClipboardDocumentList className="text-2xl text-slate-700" />

                  <select className="w-full bg-white outline-none font-bold text-slate-900">
                    <option>Residential Building</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <label className="absolute -top-3 left-16 bg-white px-2 text-sm text-gray-500">
                  Plot Area (Sq.ft.)
                </label>

                <div className="flex items-center gap-4 border border-gray-200 rounded-xl px-4 py-4">
                  <MdOutlineCalendarMonth className="text-2xl text-slate-700" />

                  <select className="w-full bg-white outline-none font-bold text-slate-900">
                    <option>1200 - 1500</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <label className="absolute -top-3 left-16 bg-white px-2 text-sm text-gray-500">
                  Location
                </label>

                <div className="flex items-center gap-4 border border-gray-200 rounded-xl px-4 py-4">
                  <CiLocationOn className="text-2xl text-slate-700" />

                  <select className="w-full bg-white outline-none font-bold text-slate-900">
                    <option>Pune</option>
                  </select>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-orange-500 to-pink-600 text-white py-5 rounded-xl font-bold text-lg">
                Get Free Estimate
              </button>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex -space-x-3">
                {customers.slice(0, 3).map((customer, i) => (
                  <Image
                    key={i}
                    src={customer}
                    width={40}
                    height={40}
                    alt="customer"
                    className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"
                  />
                ))}
              </div>

              <p className="text-gray-600 text-base">
                30,000+ estimates generated
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
