import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const showDetails = (id) => {
    navigate(`/donation-details/${id}`);
  };
  const data = useLoaderData();
  const [displayData, setDisplayData] = useState([]);
  useEffect(() => {
    setDisplayData(data);
  }, [data]);
  const handleInput = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };
  const handleSearch = () => {
    if (searchText === "health") {
      const filteredH = data.filter(
        (i) => i.category.toLowerCase() === "health"
      );
      setDisplayData(filteredH);
    } else if (searchText === "food") {
      const filteredF = data.filter((i) => i.category.toLowerCase() === "food");
      setDisplayData(filteredF);
    } else if (searchText === "education") {
      const filteredE = data.filter(
        (i) => i.category.toLowerCase() === "education"
      );
      setDisplayData(filteredE);
    } else if (searchText === "clothing") {
      const filteredC = data.filter(
        (i) => i.category.toLowerCase() === "clothing"
      );
      setDisplayData(filteredC);
    } else {
      setDisplayData(data);
    }
  };
  return (
    <div className="">
      {/* Main Banner with Navbar  */}
      <div className="bg-[url('https://i.ibb.co/tPz3tK9/Rectangle-4281.png')] bg-cover bg-center bg-no-repeat">
        <div className="bg-white bg-opacity-95">
          <NavBar></NavBar>
          <div className="py-32">
            <p className="text-[#0b0b0b] text-center text-xl md:text-[42px] font-bold mb-10">
              I Grow By Helping People In Need
            </p>
            <div className="flex w-max mx-auto">
              <input
                onChange={handleInput}
                className="border border-r-0 rounded-lg rounded-e-none px-4 w-60 md:w-80 focus:outline-none"
                type="text"
                placeholder="Search here..."
                name=""
                id=""
              />
              <button
                onClick={handleSearch}
                className="btn capitalize min-h-[] h-[] rounded-s-none bg-[#FF444A] hover:bg-[#FF444A] border-[#FF444A] hover:border-[#FF444A] text-white"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Cards */}

      <div className="w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-[100px]">
        {displayData.map((card) => (
          <div
            onClick={() => showDetails(card.id)}
            key={card.id}
            className="rounded-md cursor-pointer"
            style={{ backgroundColor: card.card_bg }}
          >
            <img
              className="rounded-md rounded-b-none h-[60%] w-full"
              src={card.picture}
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
