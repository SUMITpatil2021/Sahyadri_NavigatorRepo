import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import '../component2/trekkdetailsstyle.css';
import M1 from '../lohgad.jpg';
import { useNavigate } from 'react-router-dom';

const TrekkDetailsList = () => {
    const navigate = useNavigate();
    const [trekkDetailsList, setTrekkDetailsList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/getAllTrekkDetails')
            .then(response => setTrekkDetailsList(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString(); // You can customize the date format as needed
    };

    const handleBookButtonClick = (trekkId) => {
        navigate(`/BookTrekk/${trekkId}`);
    };

    return (
        <div className="trekk-details-list mt-3">
            {trekkDetailsList.map(trekk => (
                <Card key={trekk.trekkid} style={{ width: "20rem" }}>
                <Card.Title>Club name: {trekk.clubid.name}</Card.Title>

                    <Card.Img variant="top" src={M1} alt={`Image for ${M1}`} />
                    <Card.Body className='mt-1'>
                        <Card.Title className="text-center">{trekk.trekkname}</Card.Title>
                        <Card.Text>Trekking Point: {trekk.location.trekkingpoint}</Card.Text>
                        <Card.Text>Date: {formatDate(trekk.date)}</Card.Text>
                        <Card.Text>Charges: {trekk.charges}</Card.Text>
                        <Button variant="primary" onClick={() => handleBookButtonClick(trekk.trekkid)}>BOOK</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default TrekkDetailsList;
