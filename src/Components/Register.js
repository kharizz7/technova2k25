import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    college: "",
    email: "",
    mobile: "",
    events: [],
    payment: "",
    foodPreference: "",
    paymentProof: null,
    whatsappNumber: "",
  });
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const eventsList = [
    "Paper Presentation",
    "Code Debugging",
    "Web Design",
    "IPL Auction",
    "Component Identification",
    "Tech Sketch",
    "Quiz Competition",
  ];

  const paymentMethods = ["Cash", "UPI", "Bank Transfer"];
  const foodOptions = ["Vegetarian", "Non-Vegetarian"];

  // UPI, Bank Details, and WhatsApp Number
  const upiId = "your-upi-id@upi";
  const contactNumber = "+91XXXXXXXXXX"; // Replace with your WhatsApp number
  const bankDetails = {
    accountNumber: "123456789012",
    ifscCode: "ABCD0123456",
    branch: "Kozhikode Main Branch",
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      const updatedEvents = checked
        ? [...formData.events, value]
        : formData.events.filter((event) => event !== value);
      setFormData({ ...formData, events: updatedEvents });
    } else if (type === "file") {
      setFormData({ ...formData, paymentProof: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Form validation
  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[6-9]\d{9}$/;

    if (!formData.name || !formData.department || !formData.college) {
      alert("Please fill in all required fields.");
      return false;
    }

    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (!mobileRegex.test(formData.mobile)) {
      alert("Please enter a valid 10-digit Indian mobile number.");
      return false;
    }

    if (formData.events.length === 0) {
      alert("Please select at least one event.");
      return false;
    }

    if (!formData.foodPreference) {
      alert("Please select your food preference.");
      return false;
    }

    if ((formData.payment === "UPI" || formData.payment === "Bank Transfer") && !formData.paymentProof) {
      alert("Please upload payment proof.");
      return false;
    }

    if ((formData.payment === "UPI" || formData.payment === "Bank Transfer") && !formData.whatsappNumber) {
      alert("Please provide a WhatsApp number for payment proof.");
      return false;
    }

    return true;
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "eventRegistrations"), formData);

      Swal.fire({
        title: "🎉 Registration Successful!",
        html: `
          <p>Thank you, <strong>${formData.name}</strong>! Your registration has been received.</p>
          <p><strong>Selected Events:</strong> ${formData.events.join(", ")}</p>
          <p>🍴 <strong>Food Preference:</strong> ${formData.foodPreference}</p>
          <p>📧 Confirmation will be sent to: ${formData.email}</p>
          <p>💳 Payment Method: ${formData.payment}</p>
        `,
        icon: "success",
        confirmButtonText: "Awesome!",
        timer: 10000,
      });

      setFormData({
        name: "",
        department: "",
        college: "",
        email: "",
        mobile: "",
        events: [],
        payment: "",
        foodPreference: "",
        paymentProof: null,
        whatsappNumber: "",
      });
    } catch (error) {
      console.error("Error saving data: ", error);
      alert("Error occurred while registering. Try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="register" className="py-12 px-4 bg-gray-700 text-gray-800">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Event Registration</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Department"
            required
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="text"
            name="college"
            value={formData.college}
            onChange={handleChange}
            placeholder="College Name"
            required
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email ID"
            required
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile Number"
            required
            className="w-full p-3 border rounded-lg"
          />

          <fieldset className="text-blue-400 text-xl font-bold ">
            <legend className="text-white p-6">Select Events:</legend>
            {eventsList.map((event) => (
              <label key={event} className="block pl-6">
                <input
                  type="checkbox"
                  value={event}
                  checked={formData.events.includes(event)}
                  onChange={handleChange}
                />{" "}
                {event}
              </label>
            ))}
          </fieldset>

          <select
            name="payment"
            value={formData.payment}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Select Payment Method</option>
            {paymentMethods.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>

          {formData.payment === "UPI" && (
            <div className="text-white pl-6">
              <p>UPI ID: {upiId}</p>
              <p>UPI Number:{}</p>
              <p>WhatsApp: {contactNumber}</p>
            </div>
          )}

          {formData.payment === "Bank Transfer" && (
            <div className="text-white pl-6">
              <p>Account: {bankDetails.accountNumber}</p>
              <p>IFSC: {bankDetails.ifscCode}</p>
              <p>Branch: {bankDetails.branch}</p>
              <p>WhatsApp: {contactNumber}</p>
            </div>
          )}

          <select
            name="foodPreference"
            value={formData.foodPreference}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Select Food Preference</option>
            {foodOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
        {/* Home Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-4 w-full bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg"
        >
          Home
        </button>
      </div>
    </section>
  );
};

export default Register;
