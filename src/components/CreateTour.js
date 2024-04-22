import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormField = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
`;

function CreateTour() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tourData = {
      tourName: formData.name,
      discription: formData.description,
      price: formData.price,
    };

    try {
      const response = await axios.post('http://localhost:3000/api/v1/tours/', tourData);

      console.log(response);
      window.location.href = "/tours";

      // Handle the response as needed
      console.log('Tour created:', response.data);

      // Clear the form
      setFormData({
        name: '',
        dscription: '',
        price: '',
      });
    } catch (error) {
      // Handle error
      console.error('Error creating tour:', error);
      alert(`Error: ${error.message}`); // Show the specific error message
    }
  };

  return (
    <FormContainer>
      <Heading>Create a New Tour</Heading>
      <form onSubmit={handleSubmit}>
        <FormField>
          <label>Tour Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </FormField>
        <FormField>
          <label>Description:</label>
          <input type="text" name="description" value={formData.description} onChange={handleInputChange} />
        </FormField>
        <FormField>
          <label>Price:</label>
          <input type="text" name="price" value={formData.price} onChange={handleInputChange} />
        </FormField>
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </FormContainer>
  );
}

export default CreateTour;
