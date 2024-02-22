import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Footer from '../component2/Footer';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Header from '../component2/Header';

import '../component2/HomePage.css'
import { Row,Col, Container } from "react-bootstrap";


export default function HomePage() {
    const Navigate = useNavigate();
   
    const handleSignInClick = () => {
      Navigate('/UserLogin');
    };

    const handleRegisterInClick = () => {

        Navigate('/UserLogin');
      };
    return (
        <div>
            <div>
                <div className="row ">
                    <nav className="navbar  navbar-inverse" mt-0 style={{ marginBottom: -30 }} >
                        <div className="container-fluid">
                            <div className="col">
                                <ul className="nav navbar">
                                    {/* <img src='image.jpg' width={100} height={100} style={{ marginLeft: 10 }}></img> */}
                                    <div style={{ position: 'absolute', top: '250%', left: '15%', transform: 'inherit' }}>
                                        <h1 style={{ color: 'white' }}>Maharashtra's Largest & Safest Trekking Organisation</h1></div>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="row">
                <img src="trekk.jpg" width={1400} height={600} ></img>
            </div><br /><br />

            

            <div className='row'>
                <h1> Upcoming Trekks</h1>
            </div>
          <div className='row'>
          <section className="cards col">
            <div className="card">
              <img src="https://via.placeholder.com/350x200.png?text=Card+1" alt="Card 1" />
              <h3>BhairavGad</h3>
              <p className='btn ' onClick={handleSignInClick}>View Details</p>
            </div>
            <div className="card col">
              <img src="https://via.placeholder.com/350x200.png?text=Card+2" alt="Card 2" />
              <h3>Sandhan Vally</h3>
              <p className='btn 'onClick={handleSignInClick}>View Details</p>
            </div>
            <div className="card col">
              <img src="https://via.placeholder.com/350x200.png?text=Card+3" alt="Card 3" />
              <h3>Salher-Mulher</h3>
              <p className='btn 'onClick={handleSignInClick}>View Details</p>
            </div>
          </section>
          </div>

            <div className='row'>
                <h1>Trekking Reviews</h1>
            </div>
            <div className='row'>
                <div className='col' style={{ border: '1px solid #ccc', padding: '10px' }}>
                    <h5>Meghana bharambe</h5>
                    <p>This was our first trek with Sahyadri_Navigator...<br />We had enjoyed every movment,the way things <br />were organised ,
                        we were thoroughly satisfied...<br />Sahyadri_navigator is well coordinated ,caring,<br />with good camp sites,
                        provided tasty<br /> and healthy food.....overall satisfied..</p>
                </div>

                <div className='col' style={{ border: '1px solid #ccc', padding: '10px' }}>
                    <h5>Supriya Sutar</h5>
                    <p>it was a awesome and beautiful experience, the trek was well planned and executed. the food was good.
                        the trek leader was very energetic and was respecting time.
                    </p>

                </div><br />

                <div className='col' style={{ border: '1px solid #ccc', padding: '10px' }}>
                    <h5>Sumit Patil</h5>
                    <p>This was my first trek. While I loved many parts and aspects, some were very different from what I had expected.
                        I loved : - the quality of the planning and the level of organization across various stages of the trek - </p>

                </div>
            </div>
        </div>
    )
}
