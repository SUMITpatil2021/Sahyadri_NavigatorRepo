import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 

export default function EditTrekkingClub(){
    return(
        <div >
           
            <div style={{
                display: 'block',
                width: 700,
                padding: 30
            }}>
                <h4>Edit Deatils of Trekking club </h4>
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter  trekking club name " />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>email address:</Form.Label>
                        <Form.Control type="email"
                            placeholder="Enter your your email address" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> age:</Form.Label>
                        <Form.Control type="number" placeholder="Enter your age" />
                    </Form.Group> <br />
                    <Button variant="primary" type="submit">
                        Click here to submit form
                    </Button>
                </Form>
            </div>
        </div>
    )
}