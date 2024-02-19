import React, { useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/style.css';
import Swal from 'sweetalert2'
import Footer from '../component2/Footer';
import TrekkerDashboard from './TrekkerDashboard';

const initialState = {
    trekData: {
        trekkname: '',
        quantity: '',
        charges: '',
        pickup_point: '',
        city: 'Pune',
        date: '',
        Total_charges: '',


    },
    selectedCity: { id: 0, name: 'Select City' },
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_BOOKTREK_DATA':
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

export default function BookTrekk() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [respo, setRespo] = useState("")
    const [image, setImage] = useState(null);
    const Navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        dispatch({
            type: 'SET_BOOKTREK_DATA',
            payload: { [name]: type === 'checkbox' ? checked : value },
        });
    };

    const handleCityChange = (e) => {
        const selectedCity = city.find((type) => type.id === parseInt(e.target.value));
        dispatch({ type: 'SET_SELECTED_CITY', payload: selectedCity });
    };

    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     setImage(file);
    //     dispatch({
    //         type: 'SET_TREK_DATA',
    //         payload: { imageData: file },
    //     });
    // };


    const handleSubmit = (e) => {
        e.preventDefault();



        const reqOptions = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                trekkname: state.trekData.trekkname,
                quantity: state.trekData.quantity,
                charges: state.trekData.charges,
                pickup_point: state.trekData.pickup_point,
                city: state.selectedCity.name,
                date: state.trekData.date,
                total_charges: state.trekData.total_charges,

                // trekkimg: formData
            }),
        };

        fetch('http://localhost:8080/bookTrekk', reqOptions)
            .then((resp) => resp.text())
            .then((data) => {
                setRespo(data);
                console.log(data)
                if (data == "Added") {
                    Swal.fire({
                        title: 'Trek',
                        text: "Your Trekk book Successfully",
                        icon: 'success',

                    });
                    return <TrekkerDashboard />
                }

                else
                    alert("Please enter data")
            })
            .catch((error) => {
                Navigate("/serverError");
            })
    };

    return (
        <>

            <div className=' template d-flex justify-content-center align-items-center vh-500 bg-secondary '>
                <div className="form_container mt-5 p-5 rounded bg-white">
                    <h2 >Book Trek</h2>
                    <form className="row ">
                        <div className=" col-md-6">
                            <label htmlFor="trekkname" className="form-label">
                                Trek Name:  <span className="required">*</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="trekkname"
                                    name="trekkname"
                                    required
                                    value={state.trekData.trekkname}
                                    onChange={(e) => dispatch({ type: 'SET_TREK_DATA', payload: { trekkname: e.target.value } })}
                                />
                            </label>
                        </div>

                        <div className="col-md-6  ">
                            <div className="col">
                                <label>
                                    Trekk Point:
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="trekkpoint"
                                        name="trekkpoint"
                                        value={state.trekData.trekkpoint}
                                        required
                                        onChange={(e) => dispatch({ type: 'SET_BOOKTREK_DATA', payload: { trekkpoint: e.target.value } })}
                                    />
                                </label>
                            </div>
                        </div>


                        <div className="col-md-6  ">
                            <div className="col">
                                <label>
                                    City:
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="city"
                                        name="city"
                                        value={state.trekData.city}
                                        required
                                        onChange={(e) => dispatch({ type: 'SET_BOOKTREK_DATA', payload: { city: e.target.value } })}
                                    />
                                </label>
                            </div>
                        </div>


                        <div className="col-md-6  ">
                            <div className="col">
                                <label>
                                    pickup point :
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="PickupPoint"
                                        name="PickupPoint"
                                        value={state.trekData.pickup_point}
                                        required
                                        onChange={(e) => dispatch({ type: 'SET_BOOKTREK_DATA', payload: { pickup_point: e.target.value } })}
                                    />
                                </label>
                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="col">
                                <label>
                                    Date:
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="date"
                                        name="date"
                                        value={state.trekData.date}
                                        required
                                        onChange={(e) => dispatch({ type: 'SET_BOOKTREK_DATA', payload: { date: e.target.value } })}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label>
                                Charges:
                                <input
                                    type="text"
                                    className="form-control"
                                    id="charges"
                                    name="charges"
                                    value={state.trekData.charges}
                                    required
                                    onChange={(e) => dispatch({ type: 'SET_BOOKTREK_DATA', payload: { charges: e.target.value } })}
                                />
                            </label>
                        </div>

                        <div className="col-md-6">
                            <label>
                                No of Peoples
                                <input
                                    type="number"
                                    className="form-control"
                                    id="quantity"
                                    name="quantity"
                                    value={state.trekData.quantity}
                                    required
                                    onChange={(e) => dispatch({ type: 'SET_BOOKTREK_DATA', payload: { quantity: e.target.value } })}
                                />
                            </label>
                        </div>


                        <div className="col-md-6">
                            <label>
                                Total Charges:
                                <input
                                    type="text"
                                    className="form-control"
                                    id="totalcharges"
                                    name="totalcharges"
                                    value={state.trekData.total_charges}
                                    required
                                    onChange={(e) => dispatch({ type: 'SET_BOOKTREK_DATA', payload: { total_charges: e.target.value } })}
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

                        <div className='col-md-4 mt-3' >
                            <button type="button" className="btn btn-primary" onClick={Navigate("/")}>BACK</button>

                        </div>
                        <div className='col-md-4 mt-3'>

                            <button type="button" className="btn btn-primary" onClick={(e) => { handleSubmit(e) }}>Submit</button>
                        </div>
                        <div className='col-md-4 mt-3'>
                            <button type='button' className='btn btn-danger' onClick={() => { handleSubmit() }} >Clear </button>

                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
