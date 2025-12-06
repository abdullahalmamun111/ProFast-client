// src/components/ServiceFeatureCards.jsx
import img1 from "../../assets/Feature/Transit warehouse.png";
import {
  default as img2,
  default as img3,
} from "../../assets/Feature/Vector.png";
const features = [
  {
    id: 1,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    img: img1,
  },
  {
    id: 2,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    img: img2,
  },
  {
    id: 3,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    img: img3,
  },
];

const ServiceFeatureCards = () => {
  return (
    <section className="w-full py-8 space-y-6">
      {features.map((f) => (
        <article
          key={f.id}
          className="w-full bg-white  rounded-xl shadow-sm overflow-hidden"
        >
          {/* wrapper: on small screens stacked (col) - on md+ row */}
          <div className="flex flex-col md:flex-row">
            {/* left: image + dashed border on right for md+, bottom dashed on small */}
            <div
              className=" p-6 md:p-8 flex items-center justify-center
                         md:border-r-2 border-dashed border-slate-200 dark:border-slate-700
                         border-b-2 md:border-b-0"
              style={{ minWidth: 220 }}
            >
              <img
                src={f.img}
                alt={f.title}
                className="w-36 md:w-40 h-auto object-contain"
                loading="lazy"
              />
            </div>

            {/* right: content */}
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-semibold text-[#03373D]">
                {f.title}
              </h3>
              <p className="mt-3 text-sm md:text-base text-[#606060] leading-relaxed">
                {f.description}
              </p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default ServiceFeatureCards;
