import React, { useState } from "react";
import "../assets/Styles/RegistrationForm.css";

const RegistrationForm = ({ setUsers, users }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isEmailAlreadyRegistered = (email) => {
    return users.some((user) => user.email === email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, bio } = formData;
    const errors = {};

    if (!name) {
      errors.name = "Full Name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      errors.name = "Name should only contain alphabets and spaces.";
    }

    if (!email || !/^\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address.";
    } else if (isEmailAlreadyRegistered(email)) {
      errors.email = "Email is already registered.";
    }

    if (!phone || !/^\d{10}$/.test(phone)) {
      errors.phone = "Phone number must be 10 digits long and contain only numbers.";
    }

    if (!bio) {
      errors.bio = "Short Bio is required.";
    } else if (bio.split(/\s+/).length > 20) {
      errors.bio = "Short Bio should not exceed 50 words.";
    }

    if (Object.keys(errors).length === 0) {
      const timestamp = new Date().toLocaleString();
      const newUser = { ...formData, timestamp };
      setUsers([...users, newUser]);
      setFormData({ name: "", email: "", phone: "", bio: "" });
      setFormErrors({
        name: "",
        email: "",
        phone: "",
        bio: "",
      });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="registration-form">
      <h1>Event Registration</h1>
      <form className="myform" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
        />
        {formErrors.name && <p className="error-message">{formErrors.name}</p>}

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {formErrors.email && <p className="error-message">{formErrors.email}</p>}

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Contact Number"
        />
        {formErrors.phone && <p className="error-message">{formErrors.phone}</p>}

        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          placeholder="Short Bio"
        />
        {formErrors.bio && <p className="error-message">{formErrors.bio}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
