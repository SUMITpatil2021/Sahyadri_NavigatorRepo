import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';

const ViewBookings = () => {
  const [tlist,settlist]=useState([]);
  const { trekkid } = useParams();

  useEffect(() => {
    console.log(trekkid);
       axios.get(`http://localhost:8080/getbookingdata/${trekkid}`)
      .then((response) => {
        console.log(response.data)
        settlist([...response.data]);
    })
      .catch(error => {
        console.error("Error fetching user data:", error);
      });
  }, [trekkid]);


  return (
    <div className="container">
      <h2 className="mb-4">Total Bookings</h2>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Trekker Name</th>
            <th>No of People</th>
            <th>Total Charges</th>
          </tr>
        </thead>
        <tbody>
        {tlist.map((ob)=> <tr key={ob.trekkid}>
                    <td>{ob.uname}</td>
                    <td>{ob.noofpersons}</td>
                    <td>{ob.totalcharges}</td>
                    </tr>)}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBookings;