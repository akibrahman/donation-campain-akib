import img from "/DetailsPage.png";

const DonationDetails = () => {
  return (
    <div>
      <div className="w-[85%] mx-auto my-20">
        <img src={img} alt="" />
        <p className="text-[#0b0b0b] text-4xl font-bold mt-14 mb-5">
          Good Education
        </p>
        <p className="text-[#585858] text-base leading-8">
          There are many things that can be done to ensure that all people have
          access to a good education. Governments can invest in public schools,
          provide financial assistance to students, and make sure that all
          schools have qualified teachers and resources. Families can support
          their childrens education by creating a learning environment at home
          and helping them with their schoolwork. Teachers can create a positive
          and supportive learning environment for their students and challenge
          them to reach their full potential.
        </p>
      </div>
    </div>
  );
};

export default DonationDetails;
