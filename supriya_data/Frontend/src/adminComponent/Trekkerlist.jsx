import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AdminService from "../services/AdminService";
import AdminDashboard from "./AdminDashboard";



export default function Trekkerlist() {
    const [plist,setplist]=useState([]);
   
      const fetchdata=()=>{
        AdminService.getAllUsers()
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
     const deleteUser=(userid)=>{
        AdminService.deleteUser(userid)
      .then((result)=>{
        console.log(result.data);
        fetchdata()
      })
      .catch(()=>{})
    
     }
    return (
        <>
        <AdminDashboard/>
        <div className="container ">
            <h3>Trekkers </h3>
            <table className="table table-borderd " border={1}>
                <tr className="bg-secondary">
                   
                    <th>Trekker ID</th>
                    <th> Name </th>
                    <th>Email ID </th>
                    <th>Contact No.</th>
                    <th>Action </th>
                </tr>

                {plist.map((ob)=><tr key={ob.userid}>
                    <td>{ob.userid}</td>
                    <td>{ob.name}</td>
                    <td>{ob.emailid}</td>
                    <td>{ob.contact}</td>
                    <td>

                        <Link to="edit">
                            <button type="button" name="btn" id="edit" className="btn btn-primary">edit</button>&nbsp;&nbsp;&nbsp;

                        </Link>

                        <Link to="payment">
                            <button type="button" name="btn" id="view" className="btn btn-info">Payment Status</button>
                        </Link>
                        <Link>
                        <button type="button" name="btn" id="delete" className="btn btn-danger" onClick={() => deleteUser(ob.userid)} >delete</button>&nbsp;&nbsp;&nbsp;
                        </Link>
                    </td>
                </tr>)}
            </table>
         
        </div>
      
        </>
    )
}