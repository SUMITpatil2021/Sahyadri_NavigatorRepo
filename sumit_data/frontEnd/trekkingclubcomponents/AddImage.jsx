import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

export default function AddImage() {
    const navigate = useNavigate();

    const navigateToAddImage = () => {
        navigate('/AddTrekk');
    };

  const [respo, setRespo] = useState("");
  const [image, setImage] = useState(""); // Using useState directly for simplicity

  const submitData = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    const reqOptions = {
      method: "POST",
      body: formData,
    };

    fetch("http://localhost:8080/addImage", reqOptions)
      .then((resp) => resp.text())
      .then((data) => setRespo(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      
      <div className="template d-flex justify-content-center align-items-center vh-100 bg-secondary ">
        <div className="form_container p-5 rounded bg-white ">
          <h2 className="text-center mb-3">Add Image</h2>
          <form onSubmit={(e) => submitData(e)}>
            <div className="input-group">
              <input
                type="file"
                className="form-control"
                id="image"
                name="image"
                aria-describedby="inputGroupFileAddon04"
                aria-label="Upload"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
              <button
                className="btn btn-outline-secondary"
                type="submit" 
                onSubmit={(e) => submitData(e)}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
