import React from 'react'
import { FaShieldAlt, FaCreditCard, FaTag, FaHeadset, FaWhatsapp } from "react-icons/fa";

const items = [
  {
    icon: <FaShieldAlt />,
    title: "100% Secure",
    desc: "Your data is safe with us",
  },
  {
    icon: <FaCreditCard />,
    title: "Easy Payments",
    desc: "Multiple payment options",
  },
  {
    icon: <FaTag />,
    title: "Best Prices",
    desc: "Direct from local vendors",
  },
  {
    icon: <FaHeadset />,
    title: "24x7 Support",
    desc: "We're here to help",
  },
];

const BottomBar = () => {
  return (
     <section className="px-10 py-5 bg-white">
      <div className="flex items-center justify-between">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 text-xl">
              {item.icon}
            </div>

            <div>
              <h3 className="font-bold text-slate-900">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}

        <button className="flex items-center gap-2 border border-green-500 text-green-600 px-6 py-3 rounded-full font-bold">
          <FaWhatsapp />
          Chat with us
        </button>
      </div>
    </section>
  )
}

export default BottomBar
