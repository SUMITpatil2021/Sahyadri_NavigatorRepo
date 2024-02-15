import { Link } from "react-router-dom";
import Footer from "../Footer";

export default function Trekkerlist() {
    return (
        <>
      
        <div className="container ">
            <h3>Trekkers </h3>
            <table className="table table-borderd " border={1}>
                <tr className="bg-secondary">
                    <th>Sr.No</th>
                    <th>Trekker ID</th>
                    <th> Name </th>
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

                        <Link to="edit">
                            <button type="button" name="btn" id="edit" className="btn btn-primary">edit</button>&nbsp;&nbsp;&nbsp;

                        </Link>

                        <Link to="payment">
                            <button type="button" name="btn" id="view" className="btn btn-info">Payment Status</button>
                        </Link>
                        <button type="button" name="btn" id="delete" className="btn btn-danger" >delete</button>&nbsp;&nbsp;&nbsp;

                    </td>
                </tr>
            </table>
        </div>
       
        </>
    )
}