import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import qXone1 from "../../../assets/qZone1.png";
import qXone2 from "../../../assets/qZone2.png";
import qXone3 from "../../../assets/qZone3.png";

const RightSideBar = () => {
  return (
    <div>
      {/* Login part */}
      <div className="   mb-6">
        <h2 className="lg:text-3xl font-semibold ">Login With</h2>
        <button className="btn my-4 btn-outline w-full text-blue-700">
          <FaGoogle></FaGoogle>
          Login With Google
        </button>
        <button className="btn  btn-outline w-full ">
          <FaGithub></FaGithub>
          Login With Github
        </button>
      </div>

      {/* find us side */}
      <div className="p-4 ">
        <h2 className="lg:text-3xl font-semibold mb-5">Find Us On</h2>
        <a href="" className=" flex items-center text-xl border-b pb-2">
          <FaInstagram className="mr-3 text-red-600"></FaInstagram>{" "}
          <span className="text-[#706F6F]">Instagram</span>{" "}
        </a>
        <a href="" className=" flex items-center text-xl  border-b pb-2">
          <FaFacebook className="mr-3 text-blue-600 "></FaFacebook>{" "}
          <span className="text-[#706F6F]">Facebook</span>{" "}
        </a>
        <a href="" className=" flex items-center text-xl">
          <FaTwitter className="mr-3  text-blue-500"></FaTwitter>{" "}
          <span className="text-[#706F6F]">Twitter</span>{" "}
        </a>
      </div>

      {/* Q xone */}
      <div className="p-4">
        <h2 className=" lg:text-3xl font-semibold mb-5">Q Xone</h2>
        <img src={qXone1} alt="" />
        <img src={qXone2} alt="" />
        <img src={qXone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideBar;
