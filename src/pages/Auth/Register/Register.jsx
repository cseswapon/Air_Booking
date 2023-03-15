import React, { useEffect } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { countries } from "../../../assets/db/fackDb";
import tbpLogo from "../../../assets/icon/logo/tbp_logo.png";
import {
  steppers,
  password,
  confirmPass,
  companyName,
  personName,
  country,
  division,
  district,
  number,
  districtValue,
} from "../../../redux/features/register/registerSlice";
import "./Register.css";
const Register = () => {
  const dispatch = useDispatch();
  const singUpValue = useSelector((state) => state.register);
  // console.log(singUpValue);
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
  // console.log(countries[0].state.Bangladesh[0].divisions);
  useEffect(() => {
    const countrys = countries[0].state.Bangladesh[0].divisions.map(
      (name) => name
    );
    const countryFilter = countrys.filter(
      (name) => name.name === singUpValue?.division
    );
    dispatch(district(countryFilter[0]?.district));
  }, [singUpValue?.division, dispatch]);

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
        <div
          className={`${
            singUpValue?.step === 0 ? "w-2/2" : "lg:w-1/2"
          } p-11 bg-slate-50`}
        >
          <h1 className="text-center font-bold text-3xl my-4">Sing Up</h1>
          <div className="flex justify-center text-center my-5">
            {stepper.map((newStep, i) => (
              <div className="mx-8" key={i}>
                <button
                  disabled
                  className={`bg-blue-500 p-2 rounded-full w-10 text-white relative ${
                    singUpValue?.step === 1 && "steps_" + i + 1
                  } ${singUpValue?.step === 0 && "step_" + i}`}
                >
                  {newStep.number}
                </button>
                <p className="text-xs mt-2">
                  {newStep.details.split(" ")[0]} <br />
                  {newStep.details.split(" ")[1]}
                </p>
              </div>
            ))}
          </div>
          {singUpValue?.step === 0 && (
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
                    onChange={(e) => dispatch(companyName(e.target.value))}
                    defaultValue={singUpValue?.companyName}
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
                    onChange={(e) => dispatch(personName(e.target.value))}
                    defaultValue={singUpValue?.personName}
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
                    required
                    onChange={(e) => dispatch(country(e.target.value))}
                    defaultValue={singUpValue?.country}
                  >
                    <option value="bangladesh">Bangladesh</option>
                  </select>
                </div>
                <div className="lg:ml-1">
                  <label htmlFor="country">
                    Select Division <span className="text-red-500">*</span>
                  </label>
                  <br />
                  <select
                    defaultValue={singUpValue?.division}
                    onChange={(e) => dispatch(division(e.target.value))}
                    className="w-full my-1 p-2 bg-white drop-shadow-sm focus:outline-none border-0 rounded"
                  >
                    <option disabled selected>
                      select division
                    </option>
                    {countries[0].state.Bangladesh[0].divisions.map(
                      (name, i) => (
                        <option key={i} value={name.name}>
                          {name.name}
                        </option>
                      )
                    )}
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
                    defaultValue={singUpValue?.districtValue}
                    onChange={(e) => dispatch(districtValue(e.target.value))}
                    required
                  >
                    <option disabled selected>
                      select district
                    </option>
                    {singUpValue?.district?.map((name, i) => (
                      <option key={i} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="lg:ml-1">
                  <label htmlFor="country">
                    Concat Number <span className="text-red-500">*</span>
                  </label>
                  <br />
                  <input
                    className="my-1 p-2 w-full bg-white drop-shadow-sm focus:outline-none border-0 rounded"
                    type="text"
                    onChange={(e) => dispatch(number(e.target.value))}
                    defaultValue={singUpValue?.number}
                    required
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
          {singUpValue?.step === 1 && (
            <form>
              <div className="lg:mr-1">
                <label htmlFor="cname">
                  Password <span className="text-red-500">*</span>
                </label>
                <br />
                <input
                  className="my-1 w-full p-2 bg-white drop-shadow-sm focus:outline-none border-0 rounded"
                  type="password"
                  name="cname"
                  id="cname"
                  defaultValue={singUpValue?.password}
                  onChange={(e) => dispatch(password(e.target.value))}
                  required
                />
              </div>
              <div className="lg:mr-1">
                <label htmlFor="cname">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <br />
                <input
                  defaultValue={singUpValue?.confirmPass}
                  onChange={(e) => dispatch(confirmPass(e.target.value))}
                  className="my-1 w-full p-2 bg-white drop-shadow-sm focus:outline-none border-0 rounded"
                  type="password"
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
