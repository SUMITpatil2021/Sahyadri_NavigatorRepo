import { Navigate, useNavigate } from "react-router-dom";

export default function Logout  () {
    let Navigate = useNavigate();
    return (
        <div className="text-center mt-3">
            <h3>Are you sure, you want to logout?</h3>
            <button onClick={()=> {Navigate('/')}} className="btn btn-success me-3"> Logout</button>
            <button onClick={()=> {Navigate('/Dashboard')}} className="btn btn-danger "> No</button>
        </div>
    );

}