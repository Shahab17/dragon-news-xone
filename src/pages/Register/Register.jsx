import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    // another way to get form field value
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    console.log(name, email, photo, password);

    createUser(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="my-12 bg-gray-200 rounded-md shadow-xl md:w-3/4 lg:w-1/2 mx-auto p-4">
        <h2 className=" lg:text-3xl font-semibold text-center">
          Please Register{" "}
        </h2>
        <form
          onSubmit={handleRegister}
          className="card-body  w-full mx-auto space-y-3"
        >
          <div className="form-control  ">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input "
              required
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input "
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input "
              required
            />
          </div>
          <div className="form-control ">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input   "
              required
            />
            <label className="label mt-3">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-4">
            <button className="btn  bg-gradient-to-r from-cyan-100 to-blue-700">
              Register
            </button>
          </div>
        </form>
        <p className="text-center">
          Already Register? Please{" "}
          <Link to="/login" className="text-blue-800 font-medium">
            {" "}
            Login{" "}
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
