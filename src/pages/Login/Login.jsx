import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {

  const handleLogin =(e)=>{
    e.preventDefault()
    // const email= e.target.email.value
    // console.log(email)

    // value neya jay another way te eitai just r kichu na
    const form = new FormData(e.currentTarget)
    console.log(form.get('password'))

  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="my-12 bg-gray-200 rounded-md shadow-xl md:w-3/4 lg:w-1/2 mx-auto p-4">
        <h2 className=" lg:text-3xl font-semibold text-center">Please Login </h2>
        <form onSubmit={handleLogin} className="card-body  w-full mx-auto">
          <div className="form-control">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input "
              required
            />
          </div>
          <div className="form-control my-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input   "
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn  bg-gradient-to-r from-cyan-100 to-blue-700">Login</button>
          </div>
        </form>
        <p className="text-center">Dont Have an Acoount? Please <Link to='/register' className="text-blue-800 font-medium"> Register </Link> </p>
      </div>
    </div>
  );
};

export default Login;
