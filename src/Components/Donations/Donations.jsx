import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getLocalStoredObj } from "../../../public/LocalStorage";

const Donations = () => {
  const data = useLoaderData();
  const [donations, setDonations] = useState([]);
  const [displayDonations, setDisplayDonations] = useState([]);
  const [seeAllBtn, setSeeAllBtn] = useState(false);
  const [pageBlank, setPageBlank] = useState(false);

  useEffect(() => {
    const localStoredObj = getLocalStoredObj();
    const myDonations = [];
    for (const id of localStoredObj) {
      const intId = parseInt(id);
      const myDonation = data.find((item) => parseInt(item.id) === intId);
      if (myDonation) {
        myDonations.push(myDonation);
      }
    }
    if (myDonations.length == 0) {
      setPageBlank(true);
    } else if (myDonations.length > 4) {
      setPageBlank(false);
      setSeeAllBtn(true);
      setDonations(myDonations);
      const temp = [...myDonations];
      const temp2 = temp.slice(0, 4);
      setDisplayDonations(temp2);
    } else {
      setDonations(myDonations);
      setDisplayDonations(myDonations);
    }
  }, [data]);
  const handleSeeAll = () => {
    setSeeAllBtn(false);
    setDisplayDonations(donations);
  };

  return (
    <div className="">
      {pageBlank && (
        <p className="bg-[#FF444A] w-max px-16 py-2 rounded-lg text-2xl font-semibold text-white mx-auto mt-36">
          No Donation
        </p>
      )}
      <div className="w-[85%] mx-auto grid grid-cols-2 gap-6 mt-20 mb-10">
        {displayDonations.map((i) => (
          <div
            key={i.id}
            style={{ backgroundColor: i.card_bg }}
            className="rounded-lg flex"
          >
            <img
              className="rounded-md rounded-e-none w-1/2"
              src={i.picture}
              alt=""
            />
            <div className="p-4 flex flex-col items-start gap-2 justify-center">
              <p
                style={{
                  color: i.text_button_bg,
                  backgroundColor: i.category_bg,
                }}
                className="px-2 py-1 text-sm font-medium w-max rounded-md"
              >
                {i.category}
              </p>
              <p className="text-[#000] text-lg font-semibold">{i.title}</p>
              <p
                style={{ color: i.text_button_bg }}
                className="text-base font-semibold"
              >
                ${i.price}
              </p>
              <Link to={`/donation-details/${i.id}`}>
                <button
                  style={{ backgroundColor: i.text_button_bg }}
                  className="btn btn-sm text-white capitalize"
                >
                  view details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {seeAllBtn && (
        <div className="w-max mx-auto mb-20">
          <button
            onClick={handleSeeAll}
            className="btn capitalize bg-[#009444] hover:bg-[#009444] font-bold text-white"
          >
            See All
          </button>
        </div>
      )}
    </div>
  );
};

export default Donations;
