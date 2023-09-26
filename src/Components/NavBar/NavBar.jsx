import { NavLink } from "react-router-dom";
import logo from "/Logo.png";

const NavBar = () => {
  return (
    <nav className="w-[85%] mx-auto flex flex-col md:flex-row justify-between gap-4 md:gap-0 items-center pt-9">
      <div className="">
        <img className="w-56" src={logo} alt="" />
      </div>
      <div className="flex items-center gap-12 list-none">
        <NavLink to="/">
          {" "}
          <li className="text-[#0b0b0b] text-lg">Home</li>
        </NavLink>
        <NavLink to="/my-donations">
          <li className="text-[#0b0b0b] text-lg">Donations</li>
        </NavLink>
        <NavLink to="/my-statistics">
          <li className="text-[#0b0b0b] text-lg">Statistics</li>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
