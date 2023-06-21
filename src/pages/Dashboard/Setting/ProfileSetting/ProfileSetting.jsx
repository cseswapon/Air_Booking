import React,{useState} from 'react';
import withDashboard from '../../../shared/DashboardLayout/DashboardLayout';
import { useDispatch, useSelector } from 'react-redux';
import { updateCompanyName, updateContactNumber, updateEmail } from '../../../../redux/features/profileSetting/profileSetting';

const ProfileSetting = () => {
  const [image, setImage] = useState(null);


  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const dispatch = useDispatch();
    const profileSetting = useSelector((state) => state.profileSetting);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can access the updated values in 'companyName', 'email', and 'image'
    console.log(image);
    console.log('profilesetting', profileSetting);
  };
    return (
      <div className='container mx-10 my-10'>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="companyName" className="block font-medium mb-1">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              className="w-full px-4 py-2 border rounded"
              // value={companyName}
              onChange={(e)=>dispatch(updateCompanyName(e.target.value))}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded"
              // value={email}
              onChange={(e)=>dispatch(updateEmail(e.target.value))}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="number" className="block font-medium mb-1">
              Contact number
            </label>
            <input
              type="number"
              id="number"
              className="w-full px-4 py-2 border rounded"
              // value={email}
              onChange={(e)=>dispatch(updateContactNumber(e.target.value))}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block font-medium mb-1">
              Image Upload
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              className="w-full"
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