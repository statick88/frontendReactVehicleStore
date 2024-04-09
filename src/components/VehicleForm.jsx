import React, { useState } from "react";
import { createVehicle } from "../api";

const VehicleForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    model: "",
    year: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createVehicle(formData);
      alert("Vehicle created successfully");
      setFormData({
        name: "",
        brand: "",
        model: "",
        year: "",
        price: "",
        image: "",
      });
    } catch (error) {
      alert("Error creating vehicle. Please try again later.");
    }
  };

  return (
    <div>
      <h2>Create Vehicle</h2>\
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Brand"
          value={formData.brand}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Model"
          value={formData.model}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          type="url"
          placeholder="Image Url"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default VehicleForm;