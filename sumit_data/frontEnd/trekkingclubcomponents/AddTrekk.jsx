import React, { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom'
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
  const [selectedCity, setSelectedCity] = useState({ id: 0, name: "Select User" });


  const [trekData, setTrekData] = useState({
    trekkName: '',
    trekkingPoint: '',
    landmark: '',
    date: '',
    charges: '',
    guideName: '',
  });
 
  const city = [
    { id: 0, name: "Select City" },
    { id: 1, name: "Pune" },
    { id: 2, name: "Nashik" },
    { id: 3, name: "Kolhapur" },
  ];

  const handleCityChange = (e) => {
    const city = city.find((type) => type.id === parseInt(e.target.value));
    setSelectedCity(city);
  };
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
                Trekk Name:
                <input type="text" value={trekData.trekkName} className="form-control"
                  onChange={(e) => setTrekData({ ...trekData, trekkName: e.target.value })} />
              </label>
            </div> 

            <div className="col mb-3 ">
              Select city:
              <select value={setSelectedCity.id} onChange={(e) => handleCityChange(e)}>
                {city.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
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
           

            <div className="col-md-6">
              <label>
                Date:
                <input type="date" className="form-control"
                  value={trekData.date} onChange={(e) => setTrekData({ ...trekData, date: e.target.value })} />
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
            <div className="col-md-6 mt-3 ">
              <label >
                <button type="button" className="btn btn-primary margin-7" onClick={navigateToAddImage} >Add Image</button>
              </label>
            </div>

          <p className="checkbox-label "> Facilities</p>
              <div className='col-md-3 '>
                <label for="trekkingPole" className="checkbox-label">
                  <input type="checkbox" id="trekkingPole" name="equipment" /> Trekking Pole
                </label>
                <label for="trainingProgram" className="checkbox-label">
                  <input type="checkbox" id="trainingProgram" name="equipment" /> Training Program
                </label>
                <label for="firstAid" className="checkbox-label">
                  <input type="checkbox" id="firstAid" name="equipment" /> First Aid
                </label>
              </div>
              <div className='col-md-3 '>
              <label for="transportation" className="checkbox-label" >
                <input type="checkbox" id="transportation" name="equipment" /> Transportation
              </label>
              <label for="food" className="checkbox-label">
                <input type="checkbox" id="food" name="equipment" /> Food
              </label>
             
            </div>
         
       


        <div className="col md-12 mt-3 text-right">
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
    </div >
      </div >

    </>
  )



}
