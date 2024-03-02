import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom';

import TrekkerService from "../service_DOTNET/TrekkerService";

export default function MyTrekk() {
    const [plist, setplist] = useState([]);
    const userid=localStorage.getItem("userid")

    const fetchdata = (userid) => {
        TrekkerService.GetBookedtrekk(userid)
            .then((result) => {
                console.log(result.data);
                setplist([...result.data]);
            })
            .catch((err) => {
                console.log("error occured", err)
            });
    };
    useEffect(() => {
        fetchdata(userid)

    }, [])
    //    const deleteUser=(userid)=>{
    //       AdminService.deleteUser(userid)
    //     .then((result)=>{
    //       console.log(result.data);
    //       fetchdata()
    //     })
    //     .catch(()=>{})

    //    }
    const formatDate = (stringdate) => {
        const date = new Date(stringdate);
        return date.toLocaleDateString(); // You can customize the date format as needed
    };
    return (
        <>
            <div className="container ">
                <h3>Trekkers </h3>
                <table className="table table-borderd " border={1}>
                    <tr className="bg-secondary">
  
                        <th>Trekk Name</th>
                        <th> Trekk Point </th>
                        <th>PickUp Point</th>
                        <th>Date</th>
                        <th>No. of Person </th>
                        <th>Total Charges</th>
                        <th>Action</th>
                    </tr>

                    {plist.map((ob) => <tr key={ob.userid}>
                        <td>{ob.trekkname}</td>
                        <td>{ob.trekkingpoint}</td>
                        <td>{ob.pickuppoint}</td>
                        <td>{formatDate(ob.date)}</td>
                        <td>{ob.noofpersons}</td>
                        <td>{ob.totalcharges}</td>

                        <td>

                            <Link to={`/EditTrekker/${ob.userid}`} state={{ tdata: ob }}>
                                <button type="button" name="btn" id="EditTrekker" className="btn btn-primary">Download</button>

                            </Link>

                            {/* <Link to="payment">
                            <button type="button" name="btn" id="view" className="btn btn-info">Payment Status</button>
                        </Link>
                        <button type="button" name="btn" id="delete" className="btn btn-danger" onClick={() => deleteUser(ob.userid)} >delete</button>&nbsp;&nbsp;&nbsp; */}

                        </td>
                    </tr>)}
                </table>

            </div>
        </>
    )
}