import React from 'react'
import Image from "next/image";
import { FaUserTie, FaCouch, FaPencilRuler } from "react-icons/fa";

const experts = [
  {
    icon: <FaUserTie />,
    title: "Local Constructors",
    desc: "Verified, experienced & trusted constructors near you.",
    btn: "Explore Constructors",
    img: "/constructor.jpg",
    color: "bg-orange-500",
    btnColor: "border-orange-400 text-orange-500",
  },
  {
    icon: <FaCouch />,
    title: "Interior Designers",
    desc: "Creative & budget-friendly designers to style your dream home.",
    btn: "Explore Designers",
    img: "/interior.jpg",
    color: "bg-purple-600",
    btnColor: "border-purple-500 text-purple-600",
  },
  {
    icon: <FaPencilRuler />,
    title: "Structural Consultants",
    desc: "Get expert advice for safe & strong construction.",
    btn: "Explore Consultants",
    img: "/consultant-3.jpg",
    color: "bg-green-500",
    btnColor: "border-green-500 text-green-600",
  },
];

const Experts = () => {
  return (
   <section className="px-10 py-6 bg-white">
      <div className="flex items-start justify-between mb-5">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Hire Local Experts
          </h2>
          <p className="text-gray-600 text-base">
            Choose from verified local professionals for your project
          </p>
        </div>

        <button className="text-purple-700 font-bold">
          View All →
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {experts.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-2 min-h-[230px] rounded-2xl overflow-hidden border border-gray-200 bg-white"
          >
            <div className="p-6 flex flex-col justify-between">
              <div>
                <div
                  className={`${item.color} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl mb-5`}
                >
                  {item.icon}
                </div>

                <h3 className="text-xl font-extrabold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-700 leading-6">
                  {item.desc}
                </p>
              </div>

              <button
                className={`mt-5 border ${item.btnColor} px-1 py-2 rounded-lg text-sm font-bold w-fit`}
              >
                {item.btn}
              </button>
            </div>

            <Image
              src={item.img}
              width={350}
              height={230}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experts
