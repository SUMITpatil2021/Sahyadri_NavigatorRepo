import React, { useReducer, useState } from 'react';
import {  useNavigate } from 'react-router-dom'
import axios from 'axios';
import './style.css';


export default function AddTrekk() {
  const initialState = {
    successMsg: '',
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'SET_SUCCESS_MSG':
        return { ...state, successMsg: action.payload };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const [trekData, setTrekData] = useState({
    trekName: '',
    trekkingPoint: '',
    landmark: '',
    pincode: '',
    date: '',
    offer: '',
    charges: '',
    guideName: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the fields using regular expressions
    const nameRegex = /^[a-zA-Z ]{2,30}$/;
    const pincodeRegex = /^[0-9]{6}$/;
    const chargesRegex = /^[0-9]{1,6}(\.[0-9]{1,2})?$/;

    if (!nameRegex.test(trekData.trekName)) {
      alert('Invalid Trek Name');
      return;
    }

    if (!pincodeRegex.test(trekData.pincode)) {
      alert('Invalid Pincode');
      return;
    }

    if (!chargesRegex.test(trekData.charges)) {
      alert('Invalid Charges');
      return;
    }

    // Send the data to the server
    axios.post('', trekData)
      .then(response => {
        dispatch({ type: 'SET_SUCCESS_MSG', payload: response.data.message });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const navigate = useNavigate();

  const navigateToAddImage = () => {
    navigate('/AddImage');
  };
  return (
    <>
      <div className='  template d-flex justify-content-center align-items-center vh-100 bg-secondary '>
        <div className="form_container p-5 rounded bg-white">
          <h3>Add Trekk </h3>
          <form onSubmit={handleSubmit} className='row'>
            <div className="col-md-6 ">
              <label>
                Trek Name:
                <input type="text" value={trekData.trekName} className="form-control"
                  onChange={(e) => setTrekData({ ...trekData, trekName: e.target.value })} />
              </label>
            </div>
            <div className="col-md-6 ">
              <label>
                Trekking Point:
                <input type="text" className="form-control"
                  value={trekData.trekkingPoint} onChange={(e) => setTrekData({ ...trekData, trekkingPoint: e.target.value })} />
              </label>
            </div>
            <div className="col-md-6">
              <label>
                Landmark:
                <input type="text" className="form-control"
                  value={trekData.landmark} onChange={(e) => setTrekData({ ...trekData, landmark: e.target.value })} />
              </label>
            </div>
            <div className="col-md-6 ">
              <label>
                Pincode:
                <input type="text" className="form-control"
                  value={trekData.pincode} onChange={(e) => setTrekData({ ...trekData, pincode: e.target.value })} />
              </label>

            </div>

            <div className="col-md-6">
              <label>
                Date:
                <input type="date" className="form-control"
                  value={trekData.date} onChange={(e) => setTrekData({ ...trekData, date: e.target.value })} />
              </label>
            </div>
            <div className="col-md-6 ">
              <label>
                Offer:
                <input type="text" className="form-control"
                  value={trekData.offer} onChange={(e) => setTrekData({ ...trekData, offer: e.target.value })} />
              </label>
            </div>
            <div className="col-md-6">
              <label>
                Charges:
                <input type="text" className="form-control"
                  value={trekData.charges} onChange={(e) => setTrekData({ ...trekData, charges: e.target.value })} />
              </label>
            </div>
            <div className="col-md-6 ">
              <label>
                Guide Name:
                <input type="text" className="form-control"
                  value={trekData.guideName} onChange={(e) => setTrekData({ ...trekData, guideName: e.target.value })} />
              </label>
            </div>
            <br />
            <div className="col-md-6 ">
              <label >
                <button type="button" className="btn btn-primary" onClick={navigateToAddImage} >Add Image</button>
              </label>
            </div>

            <div className="col md-12 text-right">
              <label>
                <input type="submit"
                  value="Submit "
                  className="btn btn-success  mt-3 me-3" />
              </label>
              <label>
                <input type="button" value="clear" className="btn btn-danger mt-3 me-3 "
                  onClick={() => { dispatch({ type: 'reset' }) }} />
              </label>
            </div>

          </form>
        </div>
      </div>

    </>
  )
  

}
