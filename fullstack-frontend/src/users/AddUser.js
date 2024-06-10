import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    userName: "",
    email: "",
    bloodType:"",
    address:"",
    designation:"",
    contactDetails:"",
  });

  const { name, userName, email, bloodType, address, designation, contactDetails } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="userName" className="form-label">
                userName
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your userName"
                name="userName"
                value={userName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Designation" className="form-label">
                Designation
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your blood type"
                name="designation"
                value={designation}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="BloodType" className="form-label">
                Blood Type
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your blood type"
                name="bloodType"
                value={bloodType}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Address" className="form-label">
                Address
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your address"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ContactDetails" className="form-label">
                Contact No.
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your phone number"
                name="contactDetails"
                value={contactDetails}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            

            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}