import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import tbpLogo from "../../../assets/icon/logo/tbp_logo.png";
const Register = () => {
  return (
    <div className="bg-slate-700 min-h-screen flex items-center justify-center">
      <div className="flex items-center w-3/4 bg-gradient-to-r from-gray-800 to-gray-900 rounded">
        {/* login intro part */}
        <div className="w-1/2 p-11 flex flex-col relative text-white">
          <div className="my-3">
            <h1 className="my-2 font-bold text-3xl">
              {" "}
              Welcome to <br />
              Travel Business Portal
            </h1>
            <div className="my-5">
              <button
                type="button"
                className="w-1/4 bg-blue-900 p-1 text-white rounded hover:text-black hover:bg-yellow-500 transition ease-in-out delay-150 hover:duration-300"
              >
                Login
              </button>
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
          <div className="absolute w-1/4 bottom-0 right-0">
            <img src={tbpLogo} alt="avatar" />
          </div>
        </div>
        {/* login part */}
        <div className="w-1/2 p-11 bg-slate-50">
          <h1 className="text-center font-bold text-3xl my-3">Sing Up</h1>
          <form>
            <div className="flex items-center">
              <div>
                <label htmlFor="cname">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <br />
                <input type="text" name="cname" id="cname" required />
              </div>
              <div>
                <label htmlFor="pname">
                  Contact Persons Name <span className="text-red-500">*</span>
                </label>
                <br />
                <input type="text" name="pname" id="pname" required />
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <label htmlFor="district">
                  Select District <span className="text-red-500">*</span>
                </label>
                <br />
                <select name="district" id="district">
                  <option value="bangladesh">Bangladesh</option>
                  <option value="india">Bangladesh</option>
                </select>
              </div>
              <div>
                <label htmlFor="country">
                  Country <span className="text-red-500">*</span>
                </label>
                <br />
                <select name="country" id="country">
                  <option value="bangladesh">Bangladesh</option>
                  <option value="india">Bangladesh</option>
                </select>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <label htmlFor="district">
                  Select District <span className="text-red-500">*</span>
                </label>
                <br />
                <select name="district" id="district">
                  <option value="bangladesh">Bangladesh</option>
                  <option value="india">Bangladesh</option>
                </select>
              </div>
              <div>
                <label htmlFor="division">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <br />
                <select name="division" id="division">
                  <option disabled value="bangladesh">
                    ---Select Number---
                  </option>
                  <option value="india">+88</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-1/4 bg-blue-900 p-1 text-white rounded hover:text-white hover:bg-pink-500 transition ease-in-out delay-150 hover:duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
