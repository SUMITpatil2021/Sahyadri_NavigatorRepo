// import { useNavigate } from "react-router-dom";
import './style.css';
import { useReducer, useState } from "react";
import axios from "axios";


export default function AddGuide() {


    const init = {
        guidename: { value: "", valid: false, touched: false, error: "" },
        contactno: { value: "", valid: false, touched: false, error: "" },
        formValid: false,
    };
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



    const [user, setGuideData] = useState({
        guidename: '',
        contactno: '',
        certification: '',
        experience: '',

    });


    const validateData = (key, val) => {
        let valid = false;
        let error = "";
        switch (key) {
            case "guidename":
                var pattern = /^[\w]+$/;
                if (pattern.test(val)) {
                    valid = true;
                    error = "";
                } else {
                    valid = false;
                    error = "Enter valid Name";
                }
                break;

            case "contactno":
                var pattern5 = /^[0-9]{10}$/;
                if (pattern5.test(val)) {
                    valid = true;
                    error = "";
                } else {
                    valid = false;
                    error = "Please enter 10 digit number";
                }
                break;

            default:
                break;
        }
        return { valid, error };
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    // Send the data to the server
    axios.post('', user)
        .then(response => {
            dispatch({ type: 'SET_SUCCESS_MSG', payload: response.data.message });
        })
        .catch(error => {
            console.error('Error:', error);
        });

    // const navigate = useNavigate();

    // const navigateToAddTrekk = () => {
    //     navigate('/AddTrekk');

    //};
    return (
        <div>
            <div className='  template d-flex justify-content-center align-items-center vh-100 bg-secondary '>
                <div className="form_container p-5 rounded bg-white">
                <h1> Add Guide</h1>
                <form >
                    <div>
                        <label>Name </label>
                        <input type="text" value={user.guidename} className="form-control"
                            onChange={(e) => setGuideData({ ...user, guidename: e.target.value })} />
                        <div
                            style={{
                                display: user.guidename.touched && !user.guidename.valid ? "block" : "none",
                                fontWeight: 'bold',
                                color: 'red',
                            }}
                        >
                            {user.guidename.error}
                        </div>
                    </div>

                    <div className="row mb-3 form-group mt-3">
                        <label>Contact </label>
                        <input type="tel" value={user.contactno} className="form-control"
                            onChange={(e) => setGuideData({ ...user, contactno: e.target.value })} />

                        <div
                            style={{
                                display: user.contactno.touched && !user.contactno.valid ? "block" : "none",
                                fontWeight: 'bold',
                                color: 'red',
                            }}
                        >
                            {user.contactno.error}
                        </div>

                    </div>

                    <div className="row mb-3 form-group mt-3">
                        <label> Certification </label>
                        <input type="text" value={user.certification} className="form-control"
                            onChange={(e) => setGuideData({ ...user, certification: e.target.value })} />

                    </div>

                    <div className="row mb-3 form-group mt-3">
                        <label>Experience  </label>
                        <input type="number" value={user.experience} className="form-control"
                            onChange={(e) => setGuideData({ ...user, experience: e.target.value })} />

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
            </div>
        </div>


        </div >


    )
}