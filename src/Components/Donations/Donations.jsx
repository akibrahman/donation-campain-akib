// import img from "/Clothing.png";
// import img2 from "/Education.png";
// import img3 from "/Food.png";
import { Link } from "react-router-dom";
import img from "/DonationsPage.png";

const Donations = () => {
  return (
    <div className="">
      <div className="w-[85%] mx-auto grid grid-cols-2 gap-6 mt-20 mb-10">
        <div className="bg-[#D9E5FF] rounded-lg flex ">
          <img className="rounded-md rounded-e-none" src={img} alt="" />
          <div className="p-4 flex flex-col items-start gap-2 justify-center">
            <p className="px-2 py-1 bg-[#AEC8FF] text-[#0052FF] text-sm font-medium w-max rounded-md">
              Health
            </p>
            <p className="text-[#000] text-lg font-semibold">
              Clean Water for children
            </p>
            <p className="text-[#0052FF] text-base font-semibold">$290.00</p>
            <Link to="/donation-details">
              <button className="btn btn-sm bg-[#0052FF] text-white capitalize">
                view details
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-[#D9E5FF] rounded-lg flex ">
          <img className="rounded-md rounded-e-none" src={img} alt="" />
          <div className="p-4 flex flex-col items-start gap-2 justify-center">
            <p className="px-2 py-1 bg-[#AEC8FF] text-[#0052FF] text-sm font-medium w-max rounded-md">
              Health
            </p>
            <p className="text-[#000] text-lg font-semibold">
              Clean Water for children
            </p>
            <p className="text-[#0052FF] text-base font-semibold">$290.00</p>
            <button className="btn btn-sm bg-[#0052FF] text-white capitalize">
              view details
            </button>
          </div>
        </div>

        <div className="bg-[#D9E5FF] rounded-lg flex ">
          <img className="rounded-md rounded-e-none" src={img} alt="" />
          <div className="p-4 flex flex-col items-start gap-2 justify-center">
            <p className="px-2 py-1 bg-[#AEC8FF] text-[#0052FF] text-sm font-medium w-max rounded-md">
              Health
            </p>
            <p className="text-[#000] text-lg font-semibold">
              Clean Water for children
            </p>
            <p className="text-[#0052FF] text-base font-semibold">$290.00</p>
            <button className="btn btn-sm bg-[#0052FF] text-white capitalize">
              view details
            </button>
          </div>
        </div>

        <div className="bg-[#D9E5FF] rounded-lg flex ">
          <img className="rounded-md rounded-e-none" src={img} alt="" />
          <div className="p-4 flex flex-col items-start gap-2 justify-center">
            <p className="px-2 py-1 bg-[#AEC8FF] text-[#0052FF] text-sm font-medium w-max rounded-md">
              Health
            </p>
            <p className="text-[#000] text-lg font-semibold">
              Clean Water for children
            </p>
            <p className="text-[#0052FF] text-base font-semibold">$290.00</p>
            <button className="btn btn-sm bg-[#0052FF] text-white capitalize">
              view details
            </button>
          </div>
        </div>
      </div>
      <div className="w-max mx-auto mb-20">
        <button className="btn capitalize bg-[#009444] hover:bg-[#009444] font-bold text-white">
          See All
        </button>
      </div>
    </div>
  );
};

export default Donations;
