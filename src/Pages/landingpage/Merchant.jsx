import merchant from "../../assets/location-merchant.png";

const Merchant = () => {
  return (
    <div
      data-aos="zoom-in-up"
      className="hero bg-[url('assets/be-a-merchant-bg.png')] bg-[#03373D] w-full  mx-auto p-20 mb-3 rounded-4xl"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={merchant} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="py-6">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <button className="btn btn-primary bg-[#CAEB66] text-black rounded-full">
            Become a marchent
          </button>
          <button className="btn btn-primary text-[#CAEB66] hover:bg-[#CAEB66] hover:text-black  btn-outline ms-4 rounded-full">
            Earn with ZapShift Courier
          </button>
        </div>
      </div>
    </div>
  );
};

export default Merchant;
