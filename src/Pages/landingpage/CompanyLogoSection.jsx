import Marquee from "react-fast-marquee";
import img1 from "../../assets/brands/amazon.png";
import img2 from "../../assets/brands/amazon_vector.png";
import img3 from "../../assets/brands/casio.png";
import img4 from "../../assets/brands/moonstar.png";
import img5 from "../../assets/brands/randstad.png";
import img6 from "../../assets/brands/star.png";
import img7 from "../../assets/brands/start_people.png";

const CompanyLogoSection = () => {
  const companies = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    { id: 5, src: img5 },
    { id: 6, src: img6 },
    { id: 7, src: img7 },
  ];

  return (
    <section className="py-12 ">
      <h2 className="text-center text-2xl md:text-[28px] font-bold text-[#03373D] mb-8">
        We've helped thousands of sales teams
      </h2>

      <Marquee speed={40} pauseOnHover={true} gradient={false}>
        <div className="flex items-center border-b-2 pb-10 border-dashed border-black gap-12 px-4">
          {companies.map((company) => (
            <img
              key={company.id}
              src={company.src}
              alt={company.alt}
              className="w-24 md:w-32 h-auto object-contain opacity-80 hover:opacity-100 transition"
            />
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default CompanyLogoSection;
