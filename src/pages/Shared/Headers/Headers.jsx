import moment from "moment";
import logo from "../../../assets/logo.png";

const Headers = () => {
  return (
    <div className="text-center space-y-2 my-12">
      <img className="mx-auto mb-4" src={logo} alt="" />

      <p>Journalism Without Fear or Favour</p>
      <p>{moment().format("dddd, MMMM D, YYYY")} </p>
    </div>
  );
};

export default Headers;
