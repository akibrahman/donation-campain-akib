import { useLoaderData, useNavigate } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const navigate = useNavigate();
  const showDetails = (id) => {
    navigate(`/donation-details/${id}`);
  };
  const data = useLoaderData();

  return (
    <div className="">
      {/* Main Banner with Navbar  */}
      <div className="bg-[url('https://i.ibb.co/tPz3tK9/Rectangle-4281.png')] bg-cover bg-center bg-no-repeat">
        <div className="bg-white bg-opacity-95">
          <NavBar></NavBar>
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
        {data.map((card) => (
          <div
            onClick={() => showDetails(card.id)}
            key={card.id}
            className="rounded-md cursor-pointer"
            style={{ backgroundColor: card.card_bg }}
          >
            <img
              className="rounded-md rounded-b-none"
              src="https://i.ibb.co/tPz3tK9/Rectangle-4281.png"
              alt=""
            />
            <div className="p-4">
              <p
                className={`px-2 py-1  text-[#fff] text-sm font-medium w-max rounded-md mb-3`}
                style={{
                  backgroundColor: card.category_bg,
                  color: card.text_button_bg,
                }}
              >
                {card.category}
              </p>
              <p
                className={`text-lg font-semibold`}
                style={{
                  color: card.text_button_bg,
                }}
              >
                {card.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
