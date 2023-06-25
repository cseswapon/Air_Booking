import React, { useState } from "react";
import withDashboard from "../../../shared/DashboardLayout/DashboardLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCompanyName,
  updateContactNumber,
} from "../../../../redux/features/profileSetting/profileSetting";
import { useNavigate } from "react-router-dom";

const ProfileSetting = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const dispatch = useDispatch();
  const profileSetting = useSelector((state) => state.profileSetting);
  const email = useSelector((state) => state.login.email);

  const navigator = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can access the updated values in 'companyName', 'email', and 'image'
    // console.log(image);
    // console.log('profilesetting', image);

    const formData = new FormData();
    formData.append("image", image);
    formData.append("companyName", profileSetting.company);
    formData.append("contactNumber", profileSetting.contactNumber);

    fetch(`${process.env.REACT_APP_API_URL}api/v1/user/update/${email}`, {
      method: "PUT",
      body: formData,
    })
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        // console.log(data);
        if (data.message) {
          alert(data.message)
          navigator("/");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
    // console.log(fromData)

    // console.log(email);
  };
  return (
    <div className="container mx-10 my-10">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="companyName" className="block font-medium mb-1">
            Company Name
          </label>
          <input
            required={true}
            type="text"
            id="companyName"
            className="w-full px-4 py-2 border rounded"
            // value={companyName}
            onChange={(e) => dispatch(updateCompanyName(e.target.value))}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="number" className="block font-medium mb-1">
            Contact number
          </label>
          <input
            required={true}
            type="number"
            id="number"
            className="w-full px-4 py-2 border rounded"
            // value={email}
            onChange={(e) => dispatch(updateContactNumber(e.target.value))}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block font-medium mb-1">
            Image Upload
          </label>
          <input
            required={true}
            type="file"
            id="image"
            accept="image/*"
            className="w-full"
            name="avatar"
            onChange={handleImageUpload}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default withDashboard(ProfileSetting);
