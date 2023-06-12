import React from "react";

const Adult = (props) => {
  const { values, adultdvalue, setAdultValue } = props;
  return (
    <div className="my-3">
      <input
      required
        autoComplete="off"
        className="w-[33%] p-2 border border-blue-900 border-spacing-1 ring-1"
        placeholder="First Name"
        type="text"
        name={`adult_fname_${values}`}
        onChange={(e) =>
          setAdultValue({
            ...adultdvalue,
            [e.target.name]: e.target.value,
          })
        }
      />
      <input
      required
        autoComplete="off"
        className="w-[32%] p-2 border border-blue-900 border-spacing-1 mx-2 ring-1"
        placeholder="Last Name"
        type="text"
        name={`adult_lname_${values}`}
        onChange={(e) =>
          setAdultValue({
            ...adultdvalue,
            [e.target.name]: e.target.value,
          })
        }
      />
      <input
      required
        autoComplete="off"
        className="w-[33%] p-2 border border-blue-900 border-spacing-1 ring-1"
        type="date"
        name={`adult_date_${values}`}
        onChange={(e) =>
          setAdultValue({
            ...adultdvalue,
            [e.target.name]: e.target.value,
          })
        }
      />
      <br />
    </div>
  );
};

export default Adult;
