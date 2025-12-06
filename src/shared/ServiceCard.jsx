// src/components/ServiceCard.jsx

const ServiceCard = ({ service }) => {
  const { Icon, title, description } = service;

  return (
    <article
      className="group bg-white hover:bg-[#CAEB66] transition-all duration-300 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-lg flex flex-col gap-4"
      aria-labelledby={`service-${title}`}
    >
      <div className=" justify-center items-center gap-4">
        <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-indigo-100 group-hover:scale-105 transform transition-all duration-300">
          <Icon className="w-6 h-6 text-indigo-700" aria-hidden="true" />
        </div>

        <h3
          id={`service-${title}`}
          className="text-lg font-semibold text-[#006d77]"
        >
          {title}
        </h3>
      </div>

      <p className="text-sm text-slate-700 flex-1">{description}</p>

      <div className="mt-2">
        <button
          className="text-sm inline-flex items-center gap-2 font-medium text-indigo-700 hover:underline focus:outline-none"
          aria-label={`Learn more about ${title}`}
        >
          Learn more
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default ServiceCard;
