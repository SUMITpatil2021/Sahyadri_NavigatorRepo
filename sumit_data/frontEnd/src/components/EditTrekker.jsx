import React, { useState,useEffect } from 'react';
import { useLocation,useNavigate,useParams  } from 'react-router-dom';
import AdminService from '../services/AdminService';

export default function EditTrekker() {
  const location=useLocation(); 
  const { userid } = useParams();
  const [formdetails,setformdetails] =useState({userid: "",name:"",emailid:"",contact:""})
  const navigate=useNavigate();
  useEffect(()=>{
    if (location.state && location.state.tdata) {
      setformdetails(location.state.tdata);
    } else {
      fetchTrekkerDetails();
    }
  },[])
  const fetchTrekkerDetails = () => {
    // Fetch trekker details from API based on userid
    AdminService.getAllUsers(userid)
      .then((result) => {
        setformdetails(result.data);
      })
      .catch((err) => {
        console.log("Error occurred", err);
      });
  };
  const updateTrekker=()=>{
    if(formdetails.userid==="" || formdetails.name==="" || formdetails.emailid===""||formdetails.contact===""){
       alert("pls fill all the fieds");
       return 
    }
    AdminService.updateTrekker(formdetails)
    .then((result)=>{
      console.log(result.data);
      //clear the form
      setformdetails({userid:"",name:"",emailid:"",contact:""});
      navigate("/Trekkerlist")
    })
    .catch((err)=>{
      console.log("error occured",err);
    })
  }
  return (
    <>
   
    <div className='container mt-5'>

        <form>
  <div className="form-group">
    <label htmlFor="userid">Trekker ID </label>
    <input type="text" className="form-control" id="userid" name="userid"
      value={formdetails.userid}
      onChange={(event)=>{setformdetails({...formdetails,userid:event.target.value})}}
      readOnly
    /> 
  </div>

  <div className="form-group">
    <label htmlFor="name">Name :</label>
    <input type="text" className="form-control" id="name" name="name"
      value={formdetails.name}
      onChange={(event)=>{setformdetails({...formdetails,name:event.target.value})}}
      readOnly
    /> 
  </div>


 
  
  <div className="form-group">
    <label htmlFor="email">Email ID :</label>
    <input type="text" className="form-control" id="email" name="email"
      value={formdetails.emailid}
      onChange={(event)=>{setformdetails({...formdetails,emailid:event.target.value})}}
    />
  </div>

  <div className="form-group">
    <label htmlFor="contact">Contact number :</label>
    <input type="text" className="form-control" id="contact" name="contact"
      value={formdetails.contact}
      onChange={(event)=>{setformdetails({...formdetails,contact:event.target.value})}}
    />  
  </div>
  

  <button type="button" className="btn btn-primary mt-2" onClick={updateTrekker}>Update</button>
</form>
    </div>
    </>
  )
}