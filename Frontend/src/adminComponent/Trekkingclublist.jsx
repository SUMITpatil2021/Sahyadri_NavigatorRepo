import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import AdminService from '../services/AdminService';

export default function Trekkingclublist() {

const [plist,setplist]=useState([]);
   
      const fetchdata=()=>{
        AdminService.getAllClubs()
         .then((result)=>{
            console.log(result.data);
            setplist([...result.data]);
         })
         .catch((err)=>{
            console.log("error occured",err)
         });
      };
      useEffect(()=>{
         fetchdata()
    
      },[])
     const deleteClub=(clubid)=>{
        AdminService.deleteClub(clubid)
      .then((result)=>{
        console.log(result.data);
        fetchdata()
      })
      .catch(()=>{})
    
     }

     const [isApproved, setIsApproved] = useState(false);

     const approveClub=(clubid)=>{
        AdminService.approveClub(clubid)
      .then((result)=>{
        console.log(result.data);
        fetchdata()
        setIsApproved(!isApproved);
        window.location.reload();
      })
      .catch(()=>{})  
     } 

    return (
        <>
        <div className='container ' >
            <h3>Trekking Clubs </h3>
            <table className="table table-borderd " border={1}>
                <tr className='bg-secondary'>
                    <th>Sr.No</th>
                    <th>Club Name  </th>
                    <th>Club Owner</th>
                    <th>Licence Number </th>
                    <th>Established Date </th>
                    <th>Email ID </th>
                    <th>Contact No.</th>
                    <th>Action </th>
                </tr>

                {plist.map((ob)=> <tr key={ob.clubid}>
                    <td>{ob.clubid}</td>
                    <td>{ob.name}</td>
                    <td>{ob.ownername}</td>
                    <td>{ob.licenseno}</td>
                    <td>{ob.edate}</td>
                    <td>{ob.emailid}</td>
                    <td>{ob.contact}</td>
                    <td>
                    <td>
                
              </td>
              {isApproved ? (
                  <button variant="success" size="sm" disabled>
                    Approved
                  </button>
                ) : (
                  <button
                    variant="warning"
                    size="sm"
                    onClick={() => approveClub(ob.clubid)}
                  >
                    Approve
                  </button>
                )}
                        
                      {/* <button type="button" name="btn" id="approve" className="btn btn-info" onClick={() => approveClub(ob.clubid)} >
                                {isApproved ? 'Approved' : 'Approve'} Approve
                            </button> */}

                        <button type="button" name="btn" id="delete" className="btn btn-danger" onClick={() => deleteClub(ob.clubid)}>Delete</button>&nbsp;&nbsp;&nbsp;

                    </td>
                </tr>)}
            </table>
        </div>
        </>
    );
}