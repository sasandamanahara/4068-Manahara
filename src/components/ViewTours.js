import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const containerStyle = {
  borderLeft: '1px solid #ccc',
  borderRight: '1px solid #ccc',
  padding: '60px'
};

const listItemStyle = {
  marginBottom: '20px',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  backgroundColor: '#f4f4f4',
};

const headingStyle = {
  fontSize: '20px',
  marginBottom: '10px',
};

const descriptionStyle = {
  fontSize: '16px',
  marginBottom: '10px',
};

const priceStyle = {
  fontSize: '16px',
  marginBottom: '10px',
  fontWeight: 'bold',
};

function ViewTours() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/tours/all')
      .then(response => {
        setTours(response.data);
      })
      .catch(error => {
        console.error('Error fetching tours:', error);
      });
  }, []);

  const handleDelete = async (tourId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/v1/tours/${tourId}`);
      if (response.status === 200) {
        setTours(prevTours => prevTours.filter(tour => tour._id !== tourId));
      }
    } catch (error) {
      console.error('Error deleting tour:', error);
    }
  };

  return (
    <div style={containerStyle}>
      <h1>Available Tours</h1>
      <Grid container spacing={3}>
        {tours.map(tour => (
          <Grid item xs={12} sm={6} md={4} key={tour._id}>
            <div style={listItemStyle}>
              <h3 style={headingStyle}>Tour Name: {tour.tourName}</h3>
              <p style={descriptionStyle}>Description: {tour.discription}</p>
              <p style={priceStyle}>Price: Rs.{tour.price}</p>
              <Button variant="contained" onClick={() => window.location.href = `/updatetour/${tour._id}`}>Edit</Button>
              <Button variant="contained" onClick={() => handleDelete(tour._id)}>Delete</Button>
            </div>
          </Grid>
        ))}
      </Grid>

      <Button variant="contained" onClick={() => window.location.href = "/createtour"}>Create Tour</Button>
    </div>
  );
}

export default ViewTours;
