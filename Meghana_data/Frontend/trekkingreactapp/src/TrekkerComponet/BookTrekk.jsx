import React, { useState, useEffect, useReducer } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../component2/style.css';
import Swal from 'sweetalert2';
import Footer from '../component2/Footer';

import axios from 'axios';

const initialState = {
    trekData: {
        trekkname: '',
        trekkingpoint: '',
        city: '',
        quantity: '',
        charges: '',
        pickuppoint: '',
        date: '',
        totalcharges: '',
    },
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_BOOKTREK_DATA':
            return { ...state, trekData: { ...state.trekData, ...action.payload } };
        default:
            return state;
    }
};

const uid = localStorage.getItem('userid');
console.log("uid"+uid);

export default function BookTrekk() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [respo, setRespo] = useState('');
    const { trekkid } = useParams();
    const Navigate = useNavigate();
    const [userData, setUserData] = useState({});


    useEffect(() => {
        console.log(trekkid);
        axios.get(`http://localhost:8080/getTrekkDetailsById/${trekkid}`)
            .then((response) => {
                setUserData(response.data);
                console.log(response.data)
            })
            .catch(error => {
              console.error("Error fetching user data:", error);
            });
        }, [trekkid]);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        if(name == "quantity"){
            setUserData(prevData => ({
                ...prevData,
                [name]: value
              }));
        }
        // if(name == "totalcharges"){
        //     setUserData(prevData => ({
        //         ...prevData,
        //         [name]: userData.quantity*userData.charges
        //       }));
        // }

        dispatch({
            type: 'SET_BOOKTREK_DATA',
            payload: {
                ...state.trekData,
                [name]: type === 'checkbox' ? checked : value,
            },
        });
    };

    const formatDate = () => {
        const date = new Date(userData.date);
        return date.toLocaleDateString(); // You can customize the date format as needed
    };

    // const handleClear = () => {
    //     // Implement logic to clear the form fields
    //     dispatch({
    //         type: 'SET_BOOKTREK_DATA',
    //         payload: initialState.trekData,
    //     });
    // };

    const handleClear = () => {
            // Implement logic to clear the form fields
           
                Swal.fire({
                    title: 'Trek',
                    text: 'Payment done successfully',
                    icon: 'success',
                });
           
        };

    const handleSubmit = (e) => {
        e.preventDefault();

        const totalCharges = userData.quantity * userData.charges;

        const reqOptions = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                trekkname: userData.trekkname,
                trekkingpoint: userData?.location?.trekkingpoint,
                noofpersons: userData.quantity,
                charges: userData.charges,
                pickuppoint: userData?.location?.landmark,
                city: userData?.location?.city,
                date: userData.date,
                totalcharges: totalCharges,
                userid: uid
            }),
        };

        fetch('http://localhost:8080/bookTrekk', reqOptions)
            .then((resp) => resp.text())
            .then((data) => {
                setRespo(data);
                if (data === 'Added') {
                    Swal.fire({
                        title: 'Trek',
                        text: 'Your Trek booked successfully',
                        icon: 'success',
                    });
                    Navigate('/Trekker');
                } else {
                    alert('Please enter valid data');
                }
            })
            .catch((error) => {
                Navigate('/serverError');
            });
    };

    return (
        <>
            <div className='template d-flex justify-content-center align-items-center vh-500 bg-secondary '>
                <div className="form_container mt-5 p-5 rounded bg-white">
                    <h2>Book Trek</h2>
                    <form className="row">
                        <div className="col-md-6">
                            <label htmlFor="trekkname" className="form-label">
                                Trek Name: <span className="required text-danger">*</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="trekkname"
                                    name="trekkname"
                                    required
                                    value={userData.trekkname}
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="trekkingpoint" className="form-label">
                                Trekk Point:
                                <input
                                    type="text"
                                    className="form-control"
                                    id="trekkingpoint"
                                    name="trekkingpoint"
                                    value={userData?.location?.trekkingpoint}
                                    required
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="city" className="form-label">
                                City:
                                <input
                                    type="text"
                                    className="form-control"
                                    id="city"
                                    name="city"
                                    value={userData?.location?.city}
                                    required
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="PickupPoint" className="form-label">
                                Pickup Point:
                                <input
                                    type="text"
                                    className="form-control"
                                    id="PickupPoint"
                                    name="PickupPoint"
                                    value={userData?.location?.landmark}
                                    required
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="date" className="form-label">
                                Date:
                                <input
                                    type="text"
                                    className="form-control"
                                    id="date"
                                    name="date"
                                    value={formatDate(userData.date)}
                                    required
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="charges" className="form-label">
                                Charges:
                                <input
                                    type="text"
                                    className="form-control"
                                    id="charges"
                                    name="charges"
                                    value={userData.charges}
                                    required
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="quantity" className="form-label">
                                No of Peoples:
                                <input
                                    type="number"
                                    className="form-control"
                                    id="quantity"
                                    name="quantity"
                                    value={state.trekData.quantity}
                                    required
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="totalcharges" className="form-label">
                                Total Charges:
                                <input
                                    type="text"
                                    className="form-control"
                                    id="totalcharges"
                                    name="totalcharges"
                                    value={state.trekData.quantity*userData.charges}
                                    required
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>

                        <div className="col-md-4 mt-3">
                            <button type="button" className="btn btn-primary" onClick={() => Navigate("/Trekker")}>
                                BACK
                            </button>
                        </div>
                        <div className="col-md-4 mt-3">
                            <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>

                        <div className="col-md-4 mt-3">
                            <button type="button" className="btn btn-primary" onClick={handleClear}>
                                Make Payment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}