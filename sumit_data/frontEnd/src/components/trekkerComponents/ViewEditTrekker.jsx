import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewEditTrekker = () => {
  const [userData, setUserData] = useState({});
  const [editing, setEditing] = useState(false);

  const username = localStorage.getItem("myData");
  console.log(username);

  useEffect(() => {
    // Fetch user data from backend API when component mounts
    axios.get(`http://localhost:8080/fetchtrekker/${username}`)
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
      });
  },[username]);

  const handleEditClick = () => {
    // Enable editing mode
    setEditing(true);
  };

  const handleSaveClick = () => {
    // Send updated user data to backend API
    axios.put(`http://localhost:8080/updatetrekkerdata/${username}`, userData)
      .then(response => {
        console.log("User data updated successfully:", response.data);
        setEditing(false); // Disable editing mode after successful update
      })
      .catch(error => {
        console.error("Error updating user data:", error);
      });
  };

  const handleChange = (e) => {
    // Update user data in state as it changes
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <>

    <div className=" d-flex justify-content-center align-items-center vh-100 bg-secondary ">
  
      <div className=" ">
      <h2 className="text-center ">Trekker Profile</h2>
   <div className="card mt-5" style={{margin:140}}>
   <div className="card-header ">
   <i className='fas fa-user  mr-3' 
            style={{ width: '100px' }}></i>
   {/* <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="rounded-circle mr-3"
            style={{ width: '50px' }}
            
          /> */}
      <div >
        <label>Name:</label>
        {editing ? (
          <input
            type="text"
            name="name"
            value={userData.name}
            className="form-control "
            onChange={handleChange}
            readOnly
          />
        ) : (
          <span>{userData.name}</span>
        )}
      </div>

      {/* <div>
        <label>OwnerName:</label>
        {editing ? (
          <input
            type="text"
            name="ownername"
            className="form-control "
            value={userData.ownername}
            onChange={handleChange}
          />
        ) : (
          <span>{userData.ownername}</span>
        )}
      </div> */}
      
      <div>
        <label>Email:</label>
        {editing ? (
          <input
            type="email"
            name="email"
            className="form-control "
            value={userData.emailid}
            onChange={handleChange}
          />
        ) : (
          <span>{userData.emailid}</span>
        )}
      </div>

      <div>
        <label>Contact:</label>
        {editing ? (
          <input
            type="tel"
            name="contact"
            className="form-control "
            value={userData.contact}
            onChange={handleChange}
          />
        ) : (
          <span>{userData.contact}</span>
        )}
      </div>

      <div>
        {editing ? (
          <>
            <button className="btn btn-info mr-2" onClick={handleSaveClick}>Save</button>
            <button  className="btn btn-info mb-" onClick={() => setEditing(false)}>Cancel</button>
          </>
        ) : (
          <button onClick={handleEditClick}>Edit</button>
        )}
      </div>
      </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default ViewEditTrekker;
