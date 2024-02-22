import React, { useState,useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import AdminService from '../services/TrekkingClubService';
import TrekkingClubService from '../services/TrekkingClubService';
import TrekkingClub from './TrekkingClub';

export default function Trekkhistory() {

    const navigate = useNavigate();
const cid = localStorage.getItem('clubid');

const [tlist,settlist]=useState([]);
   
      const fetchdata=(cid)=>{
        AdminService.getAllTrekks(cid)
         .then((result)=>{
            console.log(result.data);
            settlist([...result.data]);
         })
         .catch((err)=>{
            console.log("error occured",err)
         });
      };

      useEffect(()=>{
         fetchdata(cid)
      },[])

     const deleteTrekk=(trekkid)=>{
        TrekkingClubService.deleteTrekk(trekkid)
      .then((result)=>{
        console.log(result.data);
        fetchdata()
      })
      .catch(()=>{})
    
     }

     const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString(); // You can customize the date format as needed
    };

    const handleViewDetailsClick = (trekkId) => {
        navigate(`/ViewBookings/${trekkId}`);
    };

    //  const [isApproved, setIsApproved] = useState(false);

    //  const approveClub=(clubid)=>{
    //     alert(clubid);
    //     AdminService.approveClub(clubid)
    //   .then((result)=>{
    //     console.log(result.data);
    //     fetchdata()
    //     setIsApproved(!isApproved);
    //   })
    //   .catch(()=>{})  
    //  } 

    return (
        <>
        <div className='container ' >
            <h3>Trekk History </h3>
            <table className="table table-borderd " border={1}>
                <tr className='bg-secondary'>
                    <th>#</th>
                    <th>Trekk Name  </th>
                    <th>Date </th>
                    <th>Charges</th>
                    <th>Action </th>
                </tr>

                {tlist.map((ob)=> <tr key={ob.trekkid}>
                    <td>{ob.trekkid}</td>
                    <td>{ob.trekkname}</td>
                    <td>{formatDate(ob.date)}</td>
                    <td>{ob.charges}</td>
                   
                    <td>
                      <button type="button" name="btn" id="edit" className="btn btn-primary" onClick={()=>handleViewDetailsClick(ob.trekkid)}>View Bookings</button>
                        
                      {/* <button type="button" name="btn" id="approve" className="btn btn-info" onClick={() => approveClub(ob.clubid)} >
                                {isApproved ? 'Approved' : 'Approve'}
                            </button> */}

                        <button type="button" name="btn" id="delete" className="btn btn-danger" onClick={() => deleteTrekk(ob.trekkid)}>Delete Trekk</button>&nbsp;&nbsp;&nbsp;

                    </td>
                </tr>)}
            </table>
        </div>
        </>
    );
}