import { FaMoneyBillWave, FaTruckPickup } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RiBuilding2Line } from "react-icons/ri";

const HowitWorks = () => {
  const cards = [
    {
      title: "Booking Pick & Drop",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
      icon: <FaTruckPickup className="text-4xl text-[#006d77]" />,
    },
    {
      title: "Cash On Delivery",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
      icon: <FaMoneyBillWave className="text-4xl text-[#006d77]" />,
    },
    {
      title: "Delivery Hub",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
      icon: <MdOutlineLocalShipping className="text-4xl text-[#006d77]" />,
    },
    {
      title: "Booking SME & Corporate",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
      icon: <RiBuilding2Line className="text-4xl text-[#006d77]" />,
    },
  ];

  return (
    <div className=" py-12 px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">How it Works</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200
              hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4">{item.icon}</div>

              <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowitWorks;
