import React from 'react'
import { FaUsers, FaShieldAlt, FaClock, FaCubes, FaHome } from "react-icons/fa";

const features = [
  {
    icon: <FaUsers />,
    title: "Local Experts",
    desc: "Verified local constructors & designers",
    color: "bg-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: <FaShieldAlt />,
    title: "Transparent Pricing",
    desc: "No hidden costs, full clarity",
    color: "bg-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: <FaClock />,
    title: "On-time Delivery",
    desc: "Pakka waada, time par kaam",
    color: "bg-green-500",
    bg: "bg-green-50",
  },
  {
    icon: <FaCubes />,
    title: "Quality Materials",
    desc: "Local vendors, best quality",
    color: "bg-sky-500",
    bg: "bg-sky-50",
  },
  {
    icon: <FaHome />,
    title: "One Stop Solution",
    desc: "Design to Delivery, sab ek jagah",
    color: "bg-pink-500",
    bg: "bg-pink-50",
  },
];

const Features = () => {

  return (
    <section className="px-10 py-4 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {features.map((item, i) => (
          <div
            key={i}
            className={`${item.bg} flex items-center gap-5 rounded-2xl p-6 min-h-[130px]`}
          >
            <div
              className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl shrink-0`}
            >
              {item.icon}
            </div>

            <div>
              <h3 className="font-extrabold text-slate-900 text-lg">
                {item.title}
              </h3>
              <p className="text-base text-gray-700 mt-2 leading-6">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
