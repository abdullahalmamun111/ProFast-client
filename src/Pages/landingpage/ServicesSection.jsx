// src/components/ServicesSection.jsx

import {
  FiBox,
  FiBriefcase,
  FiClock,
  FiDollarSign,
  FiMapPin,
  FiRotateCw,
} from "react-icons/fi";
import ServiceCard from "../../shared/ServiceCard";

const ServicesSection = () => {
  // ✅ Data এখন এই component এর ভিতরে
  const services = [
    {
      id: 1,
      title: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
      Icon: FiClock,
    },
    {
      id: 2,
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
      Icon: FiMapPin,
    },
    {
      id: 3,
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
      Icon: FiBox,
    },
    {
      id: 4,
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      Icon: FiDollarSign,
    },
    {
      id: 5,
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
      Icon: FiBriefcase,
    },
    {
      id: 6,
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
      Icon: FiRotateCw,
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-[#006d77] rounded-lg mb-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
            Our Service
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
