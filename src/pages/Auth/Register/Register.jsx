import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import tbpLogo from "../../../assets/icon/logo/tbp_logo.png";
import { steppers } from "../../../redux/features/register/registerSlice";
const Register = () => {
  const dispatch = useDispatch();
  const { step } = useSelector((state) => state.register);
  // console.log(step);
  const stepper = [
    {
      number: 1,
      details: "Company Information",
    },
    {
      number: 2,
      details: "Account Credential",
    },
  ];
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(steppers(1));
    console.log("First From");
  };
  return (
    <div className="lg:bg-slate-700 bg-slate-100 min-h-screen lg:flex items-center justify-center">
      <div className="lg:flex items-center justify-between lg:w-3/4 w-full bg-gradient-to-r from-gray-800 to-gray-900 rounded relative">
        {/* login intro part */}
        <div className="w-1/2 p-11 lg:flex flex-col text-white hidden">
          <div className="my-3">
            <h1 className="my-2 font-bold text-3xl">
              {" "}
              Welcome to <br />
              Travel Business Portal
            </h1>
            <div className="my-5">
              <Link to={"/login"}>
                <button
                  type="button"
                  className="w-1/4 bg-blue-900 p-1 text-white rounded hover:text-black hover:bg-yellow-500 transition ease-in-out delay-150 hover:duration-300"
                >
                  Login
                </button>
              </Link>
            </div>
            <p className="mt-6 mb-2 text-yellow-400 after_line">Reservation</p>
            <div className="flex items-center">
              <BsFillTelephoneFill />
              <a className="ml-2" href="tel:+8801844656565">
                +8801844656565, +88 02-55048277(24x7)
              </a>
            </div>
            <div className="flex items-center">
              <MdEmail />
              <p className="ml-2">tbp@aotrek.com</p>
            </div>
          </div>
          <div className="absolute w-24 bottom-0 left-0">
            <img src={tbpLogo} alt="avatar" />
          </div>
        </div>
        {/* login part */}
        <div className={`${step === 0 ? "w-2/2" : "lg:w-1/2"} p-11 bg-slate-50`}>
          <h1 className="text-center font-bold text-3xl my-4">Sing Up</h1>
          <div className="flex justify-center text-center my-5">
            {stepper.map((step, i) => (
              <div className="mx-8" key={i}>
                <button
                  disabled
                  className="bg-blue-500 p-2 rounded-full w-10 text-white"
                >
                  {step.number}
                </button>
                <p className="text-xs mt-2">
                  {step.details.split(" ")[0]} <br />
                  {step.details.split(" ")[1]}
                </p>
              </div>
            ))}
          </div>
          {step === 0 && (
            <form onSubmit={handelSubmit}>
              <div className="lg:flex items-center justify-between">
                <div className="lg:mr-1">
                  <label htmlFor="cname">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <br />
                  <input
                    className="my-1 w-full p-2 bg-white drop-shadow-sm focus:outline-none border-0 rounded"
                    type="text"
                    name="cname"
                    id="cname"
                    required
                  />
                </div>
                <div className="lg:ml-1">
                  <label htmlFor="pname">
                    Person Name <span className="text-red-500">*</span>
                  </label>
                  <br />
                  <input
                    className="my-1 p-2 bg-white w-full drop-shadow-sm focus:outline-none border-0 rounded"
                    type="text"
                    name="pname"
                    id="pname"
                    required
                  />
                </div>
              </div>
              <div className="lg:grid grid-cols-2">
                <div className="lg:mr-1">
                  <label htmlFor="country">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <br />
                  <select
                    className="w-full my-1 p-2 bg-white drop-shadow-sm focus:outline-none border-0 rounded"
                    name=""
                    id=""
                  >
                    <option value="">Bangladesh</option>
                  </select>
                </div>
                <div className="lg:ml-1">
                  <label htmlFor="country">
                    Select Division <span className="text-red-500">*</span>
                  </label>
                  <br />
                  <select
                    className="w-full my-1 p-2 bg-white drop-shadow-sm focus:outline-none border-0 rounded"
                    name=""
                    id=""
                  >
                    <option value="">Bangladesh</option>
                  </select>
                </div>
              </div>
              <div className="lg:grid grid-cols-2">
                <div className="lg:mr-1">
                  <label htmlFor="country">
                    Select District <span className="text-red-500">*</span>
                  </label>
                  <br />
                  <select
                    className="w-full my-1 p-2 bg-white drop-shadow-sm focus:outline-none border-0 rounded"
                    name=""
                    id=""
                  >
                    <option value="">Dhaka</option>
                    <option value="">Tangail</option>
                  </select>
                </div>
                <div className="lg:ml-1">
                  <label htmlFor="country">
                    Concat Number <span className="text-red-500">*</span>
                  </label>
                  <br />
                  <input
                    required
                    className="my-1 p-2 w-full bg-white drop-shadow-sm focus:outline-none border-0 rounded"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <button
                type="submit"
                className="lg:w-1/4 w-full my-4 bg-blue-900 p-1 text-white rounded hover:text-white hover:bg-sky-500 transition ease-in-out delay-150 hover:duration-300"
              >
                Submit
              </button>
            </form>
          )}
          {step === 1 && (
            <form>
              <div className="lg:mr-1">
                <label htmlFor="cname">
                  Password <span className="text-red-500">*</span>
                </label>
                <br />
                <input
                  className="my-1 w-full p-2 bg-white drop-shadow-sm focus:outline-none border-0 rounded"
                  type="text"
                  name="cname"
                  id="cname"
                  required
                />
              </div>
              <div className="lg:mr-1">
                <label htmlFor="cname">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <br />
                <input
                  className="my-1 w-full p-2 bg-white drop-shadow-sm focus:outline-none border-0 rounded"
                  type="text"
                  name="cname"
                  id="cname"
                  required
                />
              </div>
              <div className="w-full lg:flex px-1">
                <button
                  onClick={() => dispatch(steppers(0))}
                  type="button"
                  className="lg:w-2/4 w-full my-4 mr-1 bg-blue-300 p-1 text-white rounded hover:text-white hover:bg-sky-500 transition ease-in-out delay-150 hover:duration-300"
                >
                  Pervious
                </button>
                <button
                  type="submit"
                  className="lg:w-2/4 w-full my-4 ml-1 bg-blue-900 p-1 text-white rounded hover:text-white hover:bg-sky-500 transition ease-in-out delay-150 hover:duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
          <div className="lg:hidden block text-center">
            Already Register <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
