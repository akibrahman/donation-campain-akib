import "./App.css";
import {
  default as img,
  default as img2,
  default as img3,
  default as img4,
} from "/HomePage.png";

function App() {
  return (
    <div className="">
      {/* Main Banner with Navbar  */}
      <div className="bg-[url('https://i.ibb.co/tPz3tK9/Rectangle-4281.png')] bg-cover bg-center bg-no-repeat">
        <div className="bg-white bg-opacity-95">
          <div className="py-32">
            <p className="text-[#0b0b0b] text-center text-[42px] font-bold mb-10">
              I Grow By Helping People In Need
            </p>
            <div className="flex w-max mx-auto">
              <input
                className="border border-r-0 rounded-lg rounded-e-none px-4 w-80 focus:outline-none"
                type="text"
                placeholder="Search here..."
                name=""
                id=""
              />
              <button className="btn capitalize min-h-[] h-[] rounded-s-none bg-[#FF444A] hover:bg-[#FF444A] border-[#FF444A] hover:border-[#FF444A] text-white">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Cards */}

      <div className="w-[85%] mx-auto grid grid-cols-4 gap-6 my-[100px]">
        <div className="bg-[#D9E5FF] rounded-lg">
          <img src={img4} alt="" />
          <div className="p-4">
            <p className="px-2 py-1 bg-[#AEC8FF] text-[#0052FF] text-sm font-medium w-max rounded-md mb-3">
              Health
            </p>
            <p className="text-[#0052FF] text-lg font-semibold">
              Clean Water for children
            </p>
          </div>
        </div>

        <div className="bg-[#FFE3E4] rounded-lg">
          <img src={img2} alt="" />
          <div className="p-4">
            <p className="px-2 py-1 bg-[#FFC3C5] text-[#FF444A] text-sm font-medium w-max rounded-md mb-3">
              Education
            </p>
            <p className="text-[#FF444A] text-lg font-semibold">
              Clean Water for children
            </p>
          </div>
        </div>

        <div className="bg-[#EBF6E2] rounded-lg">
          <img src={img} alt="" />
          <div className="p-4">
            <p className="px-2 py-1 bg-[#D4ECC1] text-[#79C23F] text-sm font-medium w-max rounded-md mb-3">
              Clothing
            </p>
            <p className="text-[#79C23F] text-lg font-semibold">
              Clean Water for children
            </p>
          </div>
        </div>

        <div className="bg-[#FEEAE3] rounded-lg">
          <img src={img3} alt="" />
          <div className="p-4">
            <p className="px-2 py-1 bg-[#FDD2C4] text-[#F87147] text-sm font-medium w-max rounded-md mb-3">
              Food
            </p>
            <p className="text-[#F87147] text-lg font-semibold">
              Clean Water for children
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
