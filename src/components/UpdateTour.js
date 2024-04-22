import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const containerStyle = {
  maxWidth: '400px',
  margin: '0 auto',
  padding: '20px',
  backgroundColor: '#f4f4f4',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const headingStyle = {
  textAlign: 'center',
  fontSize: '24px',
  marginBottom: '20px',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '16px',
  marginBottom: '15px',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '10px 20px',
  fontSize: '16px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

function UpdateTour() {
  const { id } = useParams();
  const [tour, setTour] = useState({});
  const [formData, setFormData] = useState({
    tourName: "",
    price: "",
    discription: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/api/v1/tours/${id}`).then((response) => {
      setTour(response.data);
      setFormData({
        tourName: response.data.tourName,
        price: response.data.price,
        discription: response.data.discription,
      });
    });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/api/v1/tours/${id}`, formData);
      alert("Tour updated successfully");
    } catch (error) {
      console.error("Error updating tour:", error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Update Tour</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tour Name:</label>
          <input
            type="text"
            name="tourName"
            value={formData.tourName}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="discription"
            value={formData.discription}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
}

export default UpdateTour;
