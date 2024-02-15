import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'

export default function Trekkingclublist() {
    
    
//     const [plist,setplist]=useState([]);
//   const fetchdata=()=>{
//     // AdminService.getAllproducts()
//      .then((result)=>{
//         console.log(result.data);
//         setplist([...result.data])
//      })
//      .catch((err)=>{
//         console.log("error occured",err)
//      })
//   }
//   useEffect(()=>{
//      fetchdata()

//   },[])
//  const deleteProduct=(am_id)=>{
//     AdminService.deleteProduct(am_id)
//   .then((result)=>{
//     console.log(result.data);
//     fetchdata()
//   })
//   .catch(()=>{})

//  }
    return (
        <>
      
        <div className='container ' >
            <h3>Trekking Clubs </h3>
            <table className="table table-borderd " border={1}>
                <tr>
                    <th>Sr.No</th>
                    <th>Club Name  </th>
                    <th>Registration Number </th>
                    <th>Email ID </th>
                    <th>Contact No.</th>
                    <th>Action </th>
                </tr>

                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>

                        <button type="button" name="btn" id="delete" className="btn btn-danger" >delete</button>&nbsp;&nbsp;&nbsp;
                      <Link to="edit">
                      <button type="button" name="btn" id="edit" className="btn btn-primary">edit</button>&nbsp;&nbsp;&nbsp;

                      </Link>
                        
                        <Link to="view">
                            <button type="button" name="btn" id="view" className="btn btn-info">view</button>
                        </Link>
                    </td>
                </tr>
            </table>
        </div>
        </>
    )
}