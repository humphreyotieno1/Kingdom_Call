import React, { useState } from 'react';

const PrayerRequestPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  // const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // Validate inputs locally
  const validateInputs = () => {
    const errors = {};
    if (!formData.name || formData.name.length < 3) {
      errors.name = 'Name must be at least 3 characters long.';
    }
    if (!formData.phone || !/^[0-9]{10,15}$/.test(formData.phone)) {
      errors.phone = 'Phone must be a valid number (10-15 digits).';
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email must be a valid email address.';
    }
    if (!formData.message || formData.message.length < 10) {
      errors.message = 'Message must be at least 10 characters long.';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus(null);

    if (!validateInputs()) return;

    setLoading(true);
    try {
      const response = await fetch(`https://kingdomcallbackend.onrender.com/v1/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('Email sent successfully!');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        setFormStatus(errorData.error || 'Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('An error occurred. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#ebebeb]">
      <div className="w-full bg-gradient-to-b from-[#e48515] to-[#ebebeb] py-10">
        <h1 className="text-3xl font-bold text-black mt-20 mb-2 text-center py-4">
          Prayer Request
        </h1>
      </div>
      <div className="w-full py-20 mb-8 px-4 md:px-16 lg:px-32 mx-4 md:mx-20 lg:mx-40">
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 h-full">
          <div className="bg-gray-300 w-full h-80 md:h-96 flex justify-center">
            <img
              src="/path.jpeg"
              alt="prayer request image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full p-6 rounded shadow-lg h-full md:h-96 flex flex-col justify-between">
            <form
              className="flex flex-col h-full justify-between"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="border border-[#E48515] p-2 rounded focus:ring-2 focus:ring-[#E48515] focus:border-transparent text-sm"
                  required
                />
                {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="border border-[#E48515] p-2 rounded focus:ring-2 focus:ring-[#E48515] focus:border-transparent text-sm"
                  required
                />
              </div>
              {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
              
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="border border-[#E48515] p-2 w-full rounded mb-4 focus:ring-2 focus:ring-[#E48515] focus:border-transparent text-sm"
                required
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message..."
                className="border border-[#E48515] p-2 w-full rounded focus:ring-2 focus:ring-[#E48515] focus:border-transparent text-sm h-20 md:h-32 lg:h-40"
                required
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
              
              <button
                type="submit"
                disabled={loading}
                className={`${loading ? 'bg-gray-500' : 'bg-gray-700 hover:bg-black'} transition text-white p-2 rounded w-full mt-4 mb-2`}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
            {formStatus && (
              <div
                className={`p-2 rounded text-center ${
                  formStatus.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}
              >
                {formStatus}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerRequestPage;
