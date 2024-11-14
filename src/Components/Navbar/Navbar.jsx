import { NavLink } from "react-router-dom";
import User from "../../assets/img/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="flex gap-5">
        <NavLink
          style={({ isActive }) =>
            isActive ? { backgroundColor: "red", color: "white" } : {}
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { backgroundColor: "red", color: "white" } : {}
          }
          to={"/career"}
        >
          Career
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { backgroundColor: "red", color: "white" } : {}
          }
          to={"/about"}
        >
          About
        </NavLink>
      </div>
      <div className="flex gap-2">
        <img src={User} alt="User Icon" />
        <button className="btn bg-neutral-800 text-white p-2 font-bold">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
