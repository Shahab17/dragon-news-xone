import { Link, NavLink } from "react-router-dom";
import userIcon from '../../../assets/user.png'

const Navbar = () => {
  const links = (
    <>
      <li className="">
        {" "}
        <NavLink>Home</NavLink>{" "}
      </li>
      <li className="lg:mx-6">
        {" "}
        <NavLink>About</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink>Contact</NavLink>{" "}
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 mt-5 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 "
          >
            {links}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src= {userIcon} />
          </div>
        </label>
        <Link className="btn ml-3">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
