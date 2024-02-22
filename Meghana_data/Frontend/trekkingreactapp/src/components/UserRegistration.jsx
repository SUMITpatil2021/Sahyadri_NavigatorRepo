import React, { useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validator from 'validator'
import Swal from 'sweetalert2'

export default function UserRegistration() {
  const Navigate = useNavigate();

  const init = {
    Name: { value: "", valid: false, touched: false, error: "" },
    Email: { value: "", valid: false, touched: false, error: "" },
    PhoneNo: { value: "", valid: false, touched: false, error: "" },
    Username: { value: "",  valid: false, touched: false, error: "" },
    Password: { value: "", valid: false, touched: false, error: "" },
    formValid: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        const { name, value, touched, valid, error, formvalid } = action.data;
        return { ...state, [name]: { value, touched, valid, error }, formValid: formvalid };

      case "reset":
        return init;
      default:
        return state;
    }
  };

  const [user, dispatch] = useReducer(reducer, init);
  const [respo, setRespo] = useState("");

  const [errorMessage, setErrorMessage] = useState('') 
  const [errorMsg, setMessage] = useState('') 

  const validateData = (key, val) => {
    let valid = false;
    let error = "";
    switch (key) {
      case "Name":
        var pattern3 = /^[\w]+$/;
        if (pattern3.test(val)) {
          valid = true;
          error = "";
        } else {
          valid = false;
          error = "Enter valid Name";
        }
        break;

      case "Email":
        var pattern4 = /^[\w]{2,20}@[\w-]{5,15}\.[a-z]{2,3}$/;
        if (pattern4.test(val)) {
          valid = true;
          error = "";
        } else {
          valid = false;
          error = "Enter valid emailId ";
        }
        break;

        case "PhoneNo":
          var pattern5 = /^[0-9]{10}$/;
          if (pattern5.test(val)) {
            valid = true;
            error = "";
          } else {
            valid = false;
            error = "Please enter 10 digit number";
          }
          break;
  

        case "Password":
          if(validator.isStrongPassword(val, { 
            minLength: 8, minLowercase: 1, 
            minUppercase: 1, minNumbers: 1, minSymbols: 1 
        })) { 
          valid = true;
            setErrorMessage('') 
        } else { 
            setErrorMessage('Is Not Strong Password') 
        } 
        break;

        case "Username":
          if(!val.trim()) //trim remove white spaces..
          {
            setMessage('Please enter username');
          }else if (!/^[A-Za-z]+/.test(val.trim()))
              {
                setMessage('Please enter valid username');
              }
            else {
              setMessage('');
              valid = true;
              error = "";
            }
        break;

      default:
        break;
    }
    return { valid, error };
  };

  const handleChange = (name, value) => {
    const { valid, error } = validateData(name, value);
    let formvalid = true;



    for (const key in user) {
      if (user[key].valid === false) {
        formvalid = false;
        break;
      }
    }

    dispatch({ type: "update", data: { name, value, touched: true, valid, error, formvalid } });
    console.log(name,value,valid, error, formvalid );

  };

  const submitData = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(user));

    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: user.Name.value,
        emailid: user.Email.value,
        contact: user.PhoneNo.value,
        username: user.Username.value,
        password: user.Password.value,
        roleid: 2,
        status : 1
      }),
    };

    console.log(reqOptions);

    fetch("http://localhost:8080/register", reqOptions)
      .then((resp) => resp.text())
      .then((data) => {
        setRespo(data);
        if (data === "User Registered") {
          Swal.fire({
            title: 'Trek',
            text: "Registration done Successfully",
            icon: 'success',
          });
          window.location.reload();
        }
        else if(data === "Already used"){
          setMessage("Username already used")
        }
      }).catch((error) =>{
        Navigate("/serverError");
      });
  };
  
  return (
    <>
   
    <div className=" signup  template d-flex justify-content-center align-items-center vh-100 bg-info ">
      <div className="form_container p-5 rounded bg-white">
      <h3 className="text-center">Sign up </h3>
<form className="border ">

  <div className="row mb-3 form-group mt-3">
    <div className="col mb-3 ">
      <label htmlFor="Name">Enter Name:</label>
      <input
        type="text"
        name="Name"
        id="Name"
        placeholder="eg. Supriya sutar"
        className="form-control "
        value={user.Name.value}
        onChange={(e) => {
          handleChange("Name", e.target.value);
        }}
        onBlur={(e) => {
          handleChange("Name", e.target.value);
        }}
      />
      <div
        style={{
          display: user.Name.touched && !user.Name.valid ? "block" : "none",
          fontWeight: 'bold', 
          color: 'red',
        }}
      >
        {user.Name.error}
      </div>
    </div>
  </div>

  <div className="row mb-3 form-group mt-3">
    <div className="col mb-3">
      <label htmlFor="Email">Enter Email:</label>
      <input
        type="email"
        name="Email"
        id="Email"
        placeholder="eg. abc@gmail.com"
        className="form-control"
        value={user.Email.value}
        onChange={(e) => {
          handleChange("Email", e.target.value);
        }}
        onBlur={(e) => {
          handleChange("Email", e.target.value);
        }}
      />
      <div
        style={{
          display: user.Email.touched && !user.Email.valid ? "block" : "none",
          fontWeight: 'bold', 
          color: 'red',
        }}
      >
        {user.Email.error}
      </div>
    </div>
  </div>

  <div className="row mb-3 form-group mt-3">
    <div className="col mb-3 ">
      <label htmlFor="PhoneNo">Enter Phone No.:</label>
      <input
        type="tel"
        name="PhoneNo"
        id="PhoneNo"
        placeholder="eg.7447882097"
        className="form-control "
        value={user.PhoneNo.value}
        onChange={(e) => {
          handleChange("PhoneNo", e.target.value);
        }}
        onBlur={(e) => {
          handleChange("PhoneNo", e.target.value);
        }}
      />
      <div
        style={{
          display: user.PhoneNo.touched && !user.PhoneNo.valid ? "block" : "none",
          fontWeight: 'bold', 
          color: 'red',
        }}
      >
        {user.PhoneNo.error}
      </div>
    </div>
    <div className="col mb-3">
      <label htmlFor="Username">Enter Username:</label>
      <pre> 
      <input
        type="text"
        name="Username"
        id="Username"
        placeholder="eg. Supriya"
        className="form-control"
        value={user.Username.value}
        onChange={(e) => {
          handleChange("Username", e.target.value);
        }}
        onBlur={(e) => {
          handleChange("Username", e.target.value);
        }}
      />
      <br /> 
                {errorMsg === '' ? null : 
                    <span style={{ 
                        fontWeight: 'bold', 
                        color: 'red', 
                    }}>{errorMsg}</span>} 
            </pre>
    </div>
    <div className="col mb-3 ">
      <label htmlFor="Password">Enter Password:</label>
      <pre> 
                <input
        type="text"
        name="Password"
        id="Password"
        placeholder="eg. Supriya@123"
        className="form-control "
        value={user.Password.value}
        onChange={(e) => {
          handleChange("Password", e.target.value);
        }}
        onBlur={(e) => {
          handleChange("Password", e.target.value);
        }}
        
      /> <br /> 
                {errorMessage === '' ? null : 
                    <span style={{ 
                        fontWeight: 'bold', 
                        color: 'red', 
                    }}>{errorMessage}</span>} 
            </pre> 
    </div>
    </div>
        <div className="row mb-3 form-group mt-1">
          <div className="col mb-3">
            <input type="button" value="Submit" className={user.Name.valid && user.PhoneNo.valid && user.Email.valid &&  
           user.Username.valid && user.Password.valid != false ?"btn btn-success":"btn btn-success disabled mt-3 me-3 "}
              onClick={(e) => { submitData(e) }} />
          </div>

          <div className="col md-12 text-right">
            <input type="button" value="clear" className="btn btn-danger mt-3 me-3 "
              onClick={() => { dispatch({ type: 'reset' }) }} />
          </div>
          <p className=" mt-2"> 
            Already Registred  User <Link to="/UserLogin"> Sign in  </Link> ?  
          </p>
        </div>
      </form>
      </div>
      </div>
      </>
    )
}