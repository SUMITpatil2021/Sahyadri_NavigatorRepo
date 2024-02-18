import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AdminService from '../../services/AdminService';


export default function Trekkingclublist() {




    const [plist, setplist] = useState([]);
    const [isApproved, setIsApproved] = useState(false);


    const fetchdata = () => {
        AdminService.getAllClubs()
            .then((result) => {
                console.log(result.data);
                setplist([...result.data]);
            })
            .catch((err) => {
                console.log("error occured", err)
            });
    };
    useEffect(() => {
        fetchdata()

    }, [])
    const deleteClub = (clubid) => {
        AdminService.deleteUser(clubid)
            .then((result) => {
                console.log(result.data);
                fetchdata()
            })
            .catch(() => { })

    }

    const handleClick = () => {
        setIsApproved(!isApproved);
      };

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

                    {plist.map((ob) => <tr key={ob.clubid}>
                        <td>{ob.clubid}</td>
                        <td>{ob.name}</td>
                        <td>{ob.ownername}</td>
                        <td>{ob.licenseno}</td>
                        <td>{ob.edate}</td>
                        <td>{ob.emailid}</td>
                        <td>{ob.contact}</td>
                        <td>

                            <Link to="edit">
                                <button type="button" name="btn" id="edit" className="btn btn-primary">edit</button>&nbsp;&nbsp;&nbsp;

                            </Link>

                            <Link to="view">
                                <button type="button" name="btn" id="view" className="btn btn-info">view</button>
                            </Link>

                            <button type="button" name="btn" id="delete" className="btn btn-danger" onClick={() => deleteClub(ob.clubid)}>delete</button>&nbsp;&nbsp;&nbsp;
                            <button type="button" name="btn" id="approve" className="btn btn-info" onClick={handleClick} >
                                {isApproved ? 'Approved' : 'Approve'}
                            </button>

                        </td>
                    </tr>)}
                </table>
            </div>
        </>
    );
}