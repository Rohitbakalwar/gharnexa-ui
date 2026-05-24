import React from "react";
import { FaHome, FaClipboardList } from "react-icons/fa";
import { MdHandshake } from "react-icons/md";
import { GiHouseKeys } from "react-icons/gi";
import { LuConstruction } from "react-icons/lu";

const steps = [
  {
    icon: <FaHome />,
    step: "Step 1",
    title: "Share Your Requirements",
    desc: "Tell us what you need",
    color: "bg-yellow-400",
  },
  {
    icon: <MdHandshake />,
    step: "Step 2",
    title: "Get Matched",
    desc: "We connect you with local experts",
    color: "bg-pink-500",
  },
  {
    icon: <FaClipboardList />,
    step: "Step 3",
    title: "Plan & Estimate",
    desc: "Get transparent estimate & plan",
    color: "bg-green-500",
  },
  {
    icon: <LuConstruction />,
    step: "Step 4",
    title: "Build & Track",
    desc: "Track progress in real-time",
    color: "bg-blue-500",
  },
  {
    icon: <GiHouseKeys />,
    step: "Step 5",
    title: "Move In",
    desc: "Handover & post-completion support",
    color: "bg-orange-500",
  },
];

const WorkProcess = () => {
  return (
    <section className="px-10 py-5 bg-white">
      <div className="bg-purple-800 rounded-xl px-7 py-5 text-white">
        <h2 className="text-2xl font-extrabold mb-5">
          How <span className="text-yellow-400">GharNexa</span> Works
        </h2>

        <div className="grid grid-cols-5 gap-5">
          {steps.map((item, i) => (
            <div key={i} className="relative flex items-center gap-4">
              <div
                className={`${item.color} w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl shrink-0`}
              >
                {item.icon}
              </div>

              <div>
                <p className="text-xs font-semibold">{item.step}</p>
                <h3 className="text-sm font-bold leading-4">{item.title}</h3>
                <p className="text-xs text-white/80 mt-1 leading-4">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
