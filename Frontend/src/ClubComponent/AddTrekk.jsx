import React, { useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import Swal from 'sweetalert2'
import TrekkingClub from './TrekkingClub';


export default function AddTrekk() {
    const initialState = {
        trekData: {
            trekkname: { value: "", valid: false, touched: false, error: "Enter valid Trekkname" },
            city: { value: "", valid: false, touched: false, error: "Select a city" },
            trekkingPoint: { value: "", valid: false, touched: false, error: "Enter valid trekking point" },
            landmark: { value: "", valid: false, touched: false, error: "Enter valid landmark" },
            date: { value: "", valid: false, touched: false, error: "Enter valid date" },
            charges: { value: "", valid: false, touched: false, error: "Enter valid charges" },
            guideName: { value: "", valid: false, touched: false, error: "Enter valid guide name" },
            trekkingPole: false,
            trainingProgram: false,
            firstAid: false,
            transportation: false,
            food: false,
        },
        selectedCity: { id: 0, name: 'Select City' },
    };

    function reducer(state, action) {
        switch (action.type) {
            case 'SET_TREK_DATA':
                return { ...state, trekData: { ...state.trekData, ...action.payload } };
            case 'SET_SELECTED_CITY':
                return { ...state, selectedCity: action.payload };
            default:
                return state;
        }
    }

    const city = [
        { id: 0, name: "Select City" },
        { id: 1, name: "Pune" },
        { id: 2, name: "Nashik" },
        { id: 3, name: "Kolhapur" },
    ];

    const [state, dispatch] = useReducer(reducer, initialState);
    const Navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        dispatch({
            type: 'SET_TREK_DATA',
            payload: { [name]: type === 'checkbox' ? checked : value },
        });

        if(e.value === 'charges'){
        let valid = false;
        let error = "";
        if (!/^[0-9]+$/.test(e)) {
            // const numberValue = parseFloat(value);
            // valid = !isNaN(numberValue) && numberValue > 0;
            error = valid ? "" : "Charges must be a positive number";
        } else {
            valid = true;
            error = valid ? "" : `Enter valid ${name}`;
        }
    }
    };

    const handleCityChange = (e) => {
        const selectedCity = city.find((city) => city.id === parseInt(e.target.value));
        dispatch({ type: 'SET_SELECTED_CITY', payload: selectedCity });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append("image", image); // Assuming image is defined somewhere

    //     // Perform form validation here if needed

    //     // Proceed with form submission
    //     // ...
    // };

    const clubid = localStorage.getItem("clubid");

    const [respo, setRespo] = useState("")


    const handleSubmit = (e) => {

        // const requiredFields = ['trekkname', 'city', 'trekkingPoint', 'landmark', 'date', 'charges', 'guideName'];
        // const isAnyFieldEmpty = requiredFields.some(field => !state.trekData[field]);
    
        // if (isAnyFieldEmpty) {
        //     alert('Please fill out all required fields.');
        //     return;
        // }

        const currentDate = new Date().toISOString().split('T')[0]; // Get current date in yyyy-mm-dd format
        if (state.trekData.date < currentDate) {
            alert('Please select a date that is not in the past.');
            return;
        }
    
        e.preventDefault();

        const formData = new FormData();
        //formData.append("image", image);

        const reqOptions = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                trekkname: state.trekData.trekkname,
                city: state.selectedCity.name,
                trekkingpoint: state.trekData.trekkingPoint,
                landmark: state.trekData.landmark,
                date: state.trekData.date,
                charges: state.trekData.charges,
                guidename: state.trekData.guideName,
                trekkingpole: state.trekData.trekkingPole,
                trainingprogram: state.trekData.trainingProgram,
                firstaid: state.trekData.firstAid,
                transportation: state.trekData.transportation,
                food: state.trekData.food,
                clubid: clubid
                // trekkimg: formData
            }),
        };

        fetch('http://localhost:8080/addTrekk', reqOptions)
            .then((resp) => resp.text())
            .then((data) => {
                setRespo(data);
                console.log(data)
                if(data == "Added")
                {
                    Swal.fire({
                        title: 'Trek',
                        text: "Your Trekk added Successfully",
                        icon: 'success',
                        
                      });
                    Navigate("/TrekkingClub")
                }
                
                else
                  alert("Please enter data")
            })
            .catch((error) =>{
                Navigate("/serverError");
              })
    };


    return (
        <>

            <div className=' template d-flex justify-content-center align-items-center vh-500 bg-secondary '>
                <div className="form_container mt-5 p-5 rounded bg-white">
                    <h2 >Add Trek</h2>
                    <form className="row ">
                        <div className="col md-6">
                            <label htmlFor="trekkname" className="form-label">
                                Trek Name:  <span className="required">*</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="trekkname"
                                    name="trekkname"
                                    required='true'
                                    value={state.trekData.trekkname.value}
                                    onChange={handleInputChange}
                                />

                                <div
                                    style={{
                                        display: state.trekData.trekkname.touched && !state.trekData.trekkname.valid ? "block" : "none",
                                        fontWeight: 'bold',
                                        color: 'red',
                                    }}
                                >
                                    {state.trekData.trekkname.error}
                                </div>
                            </label>
                        </div>

                        <div className="col md-6">
                            <label htmlFor="city" className="form-label">
                                Select City:
                            </label>
                            <select
                                className="form-control"
                                id="city"
                                value={state.selectedCity.id}
                                required
                                onChange={(e) => handleCityChange(e)}
                            >
                                {city.map((city) => (
                                    <option key={city.id} value={city.id}>
                                        {city.name}
                                    </option>
                                ))}

                                onChange={handleInputChange}

                                <div
                                    style={{
                                        display: state.trekData.city.touched && !state.trekData.city.valid ? "block" : "none",
                                        fontWeight: 'bold',
                                        color: 'red',
                                    }}
                                >
                                    {state.trekData.city.error}
                                </div>

                            </select>
                        </div>

                        <div className="row md-6  mt-3">
                            <div className="col">
                                <label>
                                    Trekking Point:
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="trekkingPoint"
                                        name="trekkingPoint"
                                        value={state.trekData.trekkingPoint.value}
                                        required
                                        // onChange={(e) => dispatch({ type: 'SET_TREK_DATA', payload: { trekkingPoint: e.target.value } })}

                                        onChange={handleInputChange}
                                    />

                                    <div
                                        style={{
                                            display: state.trekData.trekkingPoint.touched && !state.trekData.trekkingPoint.valid ? "block" : "none",
                                            fontWeight: 'bold',
                                            color: 'red',
                                        }}
                                    >
                                        {state.trekData.trekkingPoint.error}
                                    </div>

                                </label>
                            </div>
                            <div className="col-md-6">
                                <label>
                                    Landmark:
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="landmark"
                                        name="landmark"
                                        value={state.trekData.landmark.value}
                                        required
                                        onChange={handleInputChange}
                                    />

                                    <div
                                        style={{
                                            display: state.trekData.landmark.touched && !state.trekData.landmark.valid ? "block" : "none",
                                            fontWeight: 'bold',
                                            color: 'red',
                                        }}
                                    >
                                        {state.trekData.landmark.error}
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="row mb-3 form-group mt-3">
                            <div className="col">
                                <label>
                                    Date:
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="date"
                                        name="date"
                                        value={state.trekData.date.value}
                                        required
                                        onChange={handleInputChange}
                                    />

                                    <div
                                        style={{
                                            display: state.trekData.date.touched && !state.trekData.date.valid ? "block" : "none",
                                            fontWeight: 'bold',
                                            color: 'red',
                                        }}
                                    >
                                        {state.trekData.date.error}
                                    </div>
                                </label>
                            </div>

                            <div className="col-md-6">
                                <label>
                                    Charges:
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="charges"
                                        name="charges"
                                    
                                        value={state.trekData.charges.value}
                                        required
                                        onChange={handleInputChange}
                                    />

                                    <div
                                        style={{
                                            display: state.trekData.charges.touched && !state.trekData.charges.valid ? "block" : "none",
                                            fontWeight: 'bold',
                                            color: 'red',
                                        }}
                                    >
                                        {state.trekData.charges.error}
                                    </div>
                                </label>
                            </div>
                        </div>

                        <p className="checkbox-label">Facilities</p>

                        <div className='col-md-3'>
                            <label className="checkbox-label" htmlFor="trekkingPole">

                                <input

                                    type="checkbox"
                                    id="trekkingPole"
                                    name="trekkingPole"
                                    checked={state.trekData.trekkingPole}
                                    onChange={handleInputChange}
                                />
                                Trekking Pole
                            </label>

                            <label className="checkbox-label" htmlFor="trainingProgram">

                                <input

                                    type="checkbox"
                                    id="trainingProgram"
                                    name="trainingProgram"
                                    checked={state.trekData.trainingProgram}
                                    onChange={handleInputChange}
                                />
                                Training Program
                            </label>

                            <label className="checkbox-label" htmlFor="firstAid">
                                <input

                                    type="checkbox"
                                    id="firstAid"
                                    name="firstAid"
                                    checked={state.trekData.firstAid}
                                    onChange={handleInputChange}
                                />

                                First Aid
                            </label>
                        </div>

                        <div className="col-md-3">
                            <label className="checkbox-label" htmlFor="transportation">
                                <input

                                    type="checkbox"
                                    id="transportation"
                                    name="transportation"
                                    checked={state.trekData.transportation}
                                    onChange={handleInputChange}
                                />

                                Transportation
                            </label>

                            <label className="checkbox-label" htmlFor="food">
                                <input

                                    type="checkbox"
                                    id="food"
                                    name="food"
                                    checked={state.trekData.food}
                                    onChange={handleInputChange}
                                />

                                Food
                            </label>
                        </div>

                        <div className="col-md-6">
                            <label>
                                Guide Name:
                                <input
                                    type="text"
                                    className="form-control"
                                    id="guideName"
                                    name="guideName"
                                    value={state.trekData.guideName.value}
                                    required
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>


                        {/* <div className="mb-3">
                                <label htmlFor="image" className="form-label">
                                    Choose Image:
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="image"
                                    name="imageData"
                                    onChange={handleImageChange}
                                />
                            </div> */}

                        <button type="button" className="btn btn-primary" onClick={(e) => { handleSubmit(e) }}>Submit</button>
                    </form>
                </div>
            </div>
            {/* <Footer/> */}
        </>
    );
}