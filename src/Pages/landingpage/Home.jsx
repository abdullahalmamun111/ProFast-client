import CompanyLogoSection from "./CompanyLogoSection";
import HowitWorks from "./HowitWorks";
import Merchant from "./Merchant";
import ServiceFeatureCards from "./ServiceFeatureCards";
import ServicesSection from "./ServicesSection";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <HowitWorks></HowitWorks>
      <ServicesSection></ServicesSection>
      <CompanyLogoSection></CompanyLogoSection>
      <ServiceFeatureCards></ServiceFeatureCards>
      <Merchant></Merchant>
    </div>
  );
};

export default Home;
