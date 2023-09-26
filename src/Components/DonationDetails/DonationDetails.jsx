import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setLocalStoredObj } from "../../../public/LocalStorage";

const DonationDetails = () => {
  const params = useParams();
  const data = useLoaderData();
  const target = data.find((item) => item.id === params.id);
  const { id, title, description, picture, text_button_bg, price } = target;

  const handleDonation = (id, price) => {
    const check = setLocalStoredObj(id);
    if (check) {
      toast.success(`Successfully Donated   $${price}`, {
        autoClose: 2000,
      });
    } else {
      toast.error("You've Already Donated here!", {
        autoClose: 2000,
      });
    }
  };
  return (
    <div>
      <ToastContainer />
      <ToastContainer />
      <div className="w-[85%] mx-auto my-20">
        <div className="relative">
          <img
            className="w-full h-[300px] md:h-[400px] lg:h-[600px]"
            src={picture}
            alt=""
          />
          <div className="absolute w-full h-[120px] bottom-0 bg-black opacity-50"></div>
          <button
            onClick={() => handleDonation(id, parseInt(price))}
            style={{
              backgroundColor: text_button_bg,
              borderColor: text_button_bg,
              color: "#fff",
            }}
            className="btn capitalize font-semibold rounded-md absolute bottom-8 left-8"
          >
            Donate ${price}
          </button>
        </div>
        <p className="text-[#0b0b0b] text-4xl font-bold mt-14 mb-5">{title}</p>
        <p className="text-[#585858] text-base leading-8">{description}</p>
      </div>
    </div>
  );
};

export default DonationDetails;
