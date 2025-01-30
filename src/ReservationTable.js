import React, { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Label from "./components/Label";
import Card from "./components/card/Card";
import CardContent from "./components/card/CardContent";
import CardHeader from "./components/card/CardHeader";
import CardTitle from "./components/card/CardTitle";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Valid email is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (!formData.guests || formData.guests <= 0) newErrors.guests = "Enter a valid number of guests";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Reservation Successful!");
      setFormData({ name: "", email: "", date: "", time: "", guests: "" }); 
      setErrors({}); 
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6">
        <CardHeader>
          <CardTitle>Restaurant Reservation</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} aria-labelledby="reservation-form">
            <div className="mb-4">
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <Label htmlFor="date">Date</Label>
              <Input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
              {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
            </div>
            <div className="mb-4">
              <Label htmlFor="time">Time</Label>
              <Input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />
              {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
            </div>
            <div className="mb-4">
              <Label htmlFor="guests">Number of Guests</Label>
              <Input type="number" id="guests" name="guests" value={formData.guests} onChange={handleChange} required />
              {errors.guests && <p className="text-red-500 text-sm">{errors.guests}</p>}
            </div>
            <Button type="submit" className="w-full">Book Table</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReservationForm;