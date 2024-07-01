import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Background from "/Images/image 8.png";
import Logo from "/Images/image 7.png";
import API_URL from '../config';

export default function Register() {
  const [formData, setFormData] = useState({
    confirm_password: "",
    password: "",
    email: "",
    number: "",
    first_name: "",
    last_name: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if any required fields are missing
    const requiredFields = [
      "first_name",
      "last_name",
      "email",
      "number",
      "password",
      "confirm_password",
    ];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      setError(`The following fields are required: ${missingFields.join(", ")}`);
      return;
    }

    if (formData.password !== formData.confirm_password) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/auth/register/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      // Optionally handle the response data here (e.g., storing a token)
      navigate("/login"); // Redirect to login page on success
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${Background})` }}>
      <div className="bg-white px-8 py-6 rounded-lg shadow-lg max-w-md w-full mx-4 md:mx-auto">
        <div className="text-center mb-6">
          <Link to="/">
            <img src={Logo} alt="Logo" className="mx-auto mb-4" />
          </Link>
          <h1 className="text-2xl font-semibold">რეგისტრაცია</h1>
          <p className="text-gray-600">მოგესალმებით, გთხოვთ, გაიაროთ რეგისტრაცია</p>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">სახელი</label>
              <input
                type="text"
                name="first_name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="შეიყვანეთ სახელი"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">გვარი</label>
              <input
                type="text"
                name="last_name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="შეიყვანეთ გვარი"
                value={formData.last_name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">ელ. ფოსტა</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="შეიყვანეთ ელ. ფოსტა"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">ტელეფონის ნომერი</label>
              <input
                type="text"
                name="number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="(+995) 123 456 789"
                value={formData.number}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">პაროლი</label>
              <input
                type="password"
                name="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="შეიყვანეთ პაროლი"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">გაიმეორეთ პაროლი</label>
              <input
                type="password"
                name="confirm_password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="გაიმეორეთ პაროლი"
                value={formData.confirm_password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
            რეგისტრაცია
          </button>
          <p className="text-center text-gray-600 mt-4">
            გაქვთ ანგარიში?{" "}
            <Link to="/login" className="text-green-500">
              ავტორიზაცია
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
