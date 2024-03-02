import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewProfile = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">View Profile</h1>
      <div className="card row">
        <div className="card-header col">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="rounded-circle mr-3"
            style={{ width: '50px' }}
          /><br/>
          <span className="float-right">Username</span><br/>
          <span className="float-right">Location</span>
        
        <div className="card-body">
          <p>Contact No: 123-456-7890</p>
          <p>Email: user@example.com</p>
          </div>
          <div className="col">
          <h5 className="card-title">Previous Treks</h5>
          <ul className="list-group">
            <li className="list-group-item">Trek 1</li>
            <li className="list-group-item">Trek 2</li>
            <li className="list-group-item">Trek 3</li>
          </ul>
          <h5 className="card-title mt-4">Comments</h5>
          <p className="card-text">Comment 1</p>
          <p className="card-text">Comment 2</p>
          <p className="card-text">Comment 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;