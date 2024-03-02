// ComposeEmail.js
import React, { useState } from 'react';
import './Email.css';

const Enquiry = () => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSend = () => {
    // Implement logic to send the email
    console.log('Sending email:', { recipient, subject, body });
  };

  return (
    <>
      <div className='  template d-flex justify-content-center align-items-center vh-100 bg-secondary '>
        <div className="form_container p-5 rounded bg-white">
          <form className='row'>

            <h2>Compose Email</h2>

            <div className='row'>
              <div className='col-md-4'>
                <lable htmlFor="recipient" className="form-label" >Form :</lable>
              </div>
              <div className='col-md-8'>
                <input type="email" placeholder="Recipient" value={recipient} onChange={(e) => setRecipient(e.target.value)} className='form-control' />
              </div>
            </div>

            <div className='row mt-3'>
              <div className='col-md-4'>
                <lable htmlFor="recipient" className="form-label">To:</lable>
              </div>
              <div className='col-md-8'>
                <input type="email" placeholder="Recipient" value={recipient} onChange={(e) => setRecipient(e.target.value)} className='form-control' />
              </div>
            </div>


            <div className=' row mt-3'>
              <div className='col-md-4'>

                <lable htmlFor="recipient" className="form-label">Subject</lable>
              </div>

              <div className='col-md-8'>
                <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} className='form-control' />
              </div>
            </div>


            <div className=' row mt-3'>
              <div className='col-md-4'>


                <lable htmlFor="recipient" className="form-label">Message</lable>
              </div>
              <div className='col-md-8'>

                <textarea placeholder="Message" value={body} onChange={(e) => setBody(e.target.value)} className='form-control' />
              </div>
            </div>

            <div className='ml-5'>
              <tr>
                <td><button type="button" className="btn btn-primary" onClick={handleSend}> Send </button></td>
                <td className='mr-10'><button type="button" className="btn btn-primary" onClick={handleSend}> Clear </button></td>
              </tr>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Enquiry;
