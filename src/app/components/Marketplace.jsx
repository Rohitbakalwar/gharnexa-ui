import React from 'react'
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import {
  GiCementShoes,
  GiSteelClaws,
  GiBrickWall,
  GiSandstorm,
  GiFloorPolisher,
  GiWaterDrop,
  GiElectricalResistance,
} from "react-icons/gi";
import { MdPlumbing } from "react-icons/md";


const categories = [
  { name: "Cement", icon: <GiCementShoes /> },
  { name: "Steel", icon: <GiSteelClaws /> },
  { name: "Bricks & Blocks", icon: <GiBrickWall /> },
  { name: "Sand & Aggregate", icon: <GiSandstorm /> },
  { name: "Tiles & Flooring", icon: <GiFloorPolisher /> },
  { name: "Paints & Chemicals", icon: <GiWaterDrop /> },
  { name: "Plumbing", icon: <MdPlumbing /> },
  { name: "Electricals", icon: <GiElectricalResistance /> },
];

const products = [
  { name: "UltraTech Cement", qty: "(50kg)", price: "₹380", unit: "/bag", img: "/cement.jpg"},
  { name: "Tata TMT Steel", qty: "(12mm)", price: "₹62", unit: "/kg", img: "/steel.jpg" },
  { name: "Red Bricks", qty: "(1000 pcs)", price: "₹6,500", unit: "/1000 pcs", img: "/bricks.jpg" },
  { name: "M-Sand", qty: "(1 CFT)", price: "₹48", unit: "/CFT", img: "/sand.jpg" },
  { name: "Kajaria Tiles", qty: "(2x2 ft)", price: "₹65", unit: "/sq.ft", img: "/tiles.jpg" },
  { name: "Asian Paints", qty: "(20L)", price: "₹4,200", unit: "/20L", img: "/paint.jpg" },
];

const Marketplace = () => {
  return (
     <section className="px-10 py-6 bg-white">
      <div className="flex justify-between items-start mb-5">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Materials Marketplace
          </h2>
          <p className="text-gray-600">
            Order construction materials online from trusted local vendors
          </p>
        </div>

        <button className="text-purple-700 font-bold">
          View All Products →
        </button>
      </div>

      {/* Categories */}
     <div className="grid grid-cols-9 gap-4 mb-4">
  {categories.map((cat, i) => (
    <div key={i} className="text-center">
      <div className="mx-auto w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center text-3xl text-orange-500">
        {cat.icon}
      </div>
      <p className="mt-2 text-sm font-semibold text-slate-900">
        {cat.name}
      </p>
    </div>
  ))}

  <div className="text-center">
    <div className="mx-auto w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center text-3xl text-purple-700">
      <BsThreeDots />
    </div>
    <p className="mt-2 text-sm font-semibold text-slate-900">More</p>
  </div>
</div>

      {/* Products */}
      <div className="relative">
        <div className="grid grid-cols-6 gap-4">
          {products.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white"
            >
              <Image
                src={item.img}
                width={260}
                height={140}
                alt={item.name}
                className="w-full h-30 object-cover"
              />

              <div className="p-3">
                <h3 className="font-bold text-slate-900">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.qty}</p>

                <p className="mt-2 font-extrabold text-lg text-slate-900">
                  {item.price}
                  <span className="text-sm font-normal text-gray-500">
                    {" "}
                    {item.unit}
                  </span>
                </p>

                <button className="mt-3 w-full border border-orange-400 text-orange-500 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2">
                  Add to Cart <FaShoppingCart />
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="absolute -right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-lg text-purple-700 text-3xl">
          ›
        </button>
      </div>
    </section>
  )
}

export default Marketplace
