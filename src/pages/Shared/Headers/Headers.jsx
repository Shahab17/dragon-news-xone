import moment from "moment";
import logo from "../../../assets/logo.png";

const Headers = () => {
  return (
    <div className="text-center  mt-12">
      <div className="flex justify-center mb-5">
        <img src={logo} alt="" />
      </div>
      <p>Journalism Without Fear or Favour</p>
      <p>{moment().format("dddd, MMMM D, YYYY")} </p>
    </div>
  );
};

export default Headers;
