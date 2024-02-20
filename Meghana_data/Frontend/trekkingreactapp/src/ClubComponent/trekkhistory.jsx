import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import AdminService from '../services/TrekkingClubService';
import TrekkingClubService from '../services/TrekkingClubService';


export default function Trekkhistory() {

const [tlist,settlist]=useState([]);
   
      const fetchdata=()=>{
        AdminService.getAllTrekks()
         .then((result)=>{
            console.log(result.data);
            settlist([...result.data]);
         })
         .catch((err)=>{
            console.log("error occured",err)
         });
      };
      useEffect(()=>{
         fetchdata()
    
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
                    <th>Trek Point</th>
                    <th>Date </th>
                    <th>Charges</th>
                    <th>Action </th>
                </tr>

                {tlist.map((ob)=> <tr key={ob.trekkid}>
                    <td>{ob.trekkid}</td>
                    <td>{ob.trekkname}</td>
                    <td>{ob.trekkpoint}</td>
                    <td>{formatDate(ob.date)}</td>
                    <td>{ob.charges}</td>
                   
                    <td>

                      <Link to="viewlist">
                      <button type="button" name="btn" id="edit" className="btn btn-primary" >View registrations</button>

                      </Link>
                        
                        
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