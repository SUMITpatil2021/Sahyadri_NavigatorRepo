import React, { useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import Footer from '../component2/Footer';
import AdminDashboard from '../adminComponent/AdminDashboard';

const initialState = {
    trekData: {
        trekName: '',
        city: 'Pune',
        trekkingPoint: '',
        landmark: '',
        date: '',
        charges: '',
        guideName: '',
        trekkingPole: false,
        trainingProgram: false,
        firstAid: false,
        transportation: false,
        food: false,
        imageData: null,
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

export default function AddTrekkWithImage() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [respo, setRespo] = useState("")
    const [image, setImage] = useState(null);
    const Navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        dispatch({
            type: 'SET_TREK_DATA',
            payload: { [name]: type === 'checkbox' ? checked : value },
        });
    };

    const handleCityChange = (e) => {
        const selectedCity = city.find((type) => type.id === parseInt(e.target.value));
        dispatch({ type: 'SET_SELECTED_CITY', payload: selectedCity });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        dispatch({
            type: 'SET_TREK_DATA',
            payload: { imageData: file },
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", image);

        const reqOptions = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                trekName: state.trekData.trekName,
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
                trekkimg: formData
            }),
        };

        fetch('http://localhost:8080/addTrekk', reqOptions)
            .then((resp) => resp.text())
            .then((data) => {
                setRespo(data);
                console.log(data)
                if(data == "Added")
                  Navigate('/TrekkingClub')
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
                                <label htmlFor="trekName" className="form-label">
                                    Trek Name:  <span className="required">*</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="trekName"
                                    name="trekName"
                                    required
                                    value={state.trekData.trekName}
                                    onChange={(e) => dispatch({ type: 'SET_TREK_DATA', payload: { trekName: e.target.value } })}
                                />
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
                                        value={state.trekData.trekkingPoint}
                                        required
                                        onChange={(e) => dispatch({ type: 'SET_TREK_DATA', payload: { trekkingPoint: e.target.value } })}
                                    />
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
                                        value={state.trekData.landmark}
                                        required
                                        onChange={(e) => dispatch({ type: 'SET_TREK_DATA', payload: { landmark: e.target.value } })}
                                    />
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
                                        value={state.trekData.date}
                                        required
                                        onChange={(e) => dispatch({ type: 'SET_TREK_DATA', payload: { date: e.target.value } })}
                                    />
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
                                        value={state.trekData.charges}
                                        required
                                        onChange={(e) => dispatch({ type: 'SET_TREK_DATA', payload: { charges: e.target.value } })}
                                    />
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
                                        value={state.trekData.guideName}
                                        required
                                        onChange={(e) => dispatch({ type: 'SET_TREK_DATA', payload: { guideName: e.target.value } })}
                                    />
                                </label>
                            </div>
                            
                 
                            <div className="mb-3">
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
                            </div>

                            <button type="button" className="btn btn-primary" onClick={(e)=>{handleSubmit(e)}}>Submit</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    );
}
