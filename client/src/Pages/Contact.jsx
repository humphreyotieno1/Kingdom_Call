import React, { useState } from 'react';

const ContactUsPage = () => {
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
    <div className="flex flex-col items-center justify-center py-12 bg-[#ebebeb]">
      <div className="w-full py-4 bg-[linear-gradient(180deg,#e48515,#ebebeb)]">
        <h1 className="text-3xl font-bold text-black mt-20 mb-2 text-center py-4">Get Help</h1>
      </div>
      <div className="shadow-lg rounded-lg p-8 max-w-4xl w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mb-8">
          <div className="sm:col-span-1">
            <div className="flex justify-center mb-2">
              <i className="fas fa-phone-alt text-4xl sm:text-3xl text-black"></i>
            </div>
            <h2 className="text-lg sm:text-sm font-medium">Telephone</h2>
            <p className="text-lg sm:text-sm text-gray-600"> +254 115 979 303(office) </p>
          </div>
          <div className="sm:col-span-1">
            <div className="flex justify-center mb-2">
              <i className="fas fa-envelope text-4xl sm:text-3xl text-black"></i>
            </div>
            <h2 className="text-lg sm:text-sm font-medium">Mail</h2>
            <p className="text-lg sm:text-sm text-gray-600"> wearekingdomcall@gmail.com</p>
          </div>
          <div className="sm:col-span-1">
            <div className="flex justify-center mb-2">
              <i className="fas fa-address-card text-4xl sm:text-3xl text-black"></i>
            </div>
            <h2 className="text-lg sm:text-sm font-medium">Address</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center rounded-lg">
            <img src="/contact.jpeg" alt="contact-us" className="w-full" />
          </div>
          <div className="bg-white p-8 shadow-lg rounded-lg w-full">
            <h2 className="text-2xl font-semibold mb-4">Send a message</h2>
            <p className="text-md sm:text-sm text-gray-600 mb-4">
              Reach out to us for any queries or feedback. We will get back to you as soon as possible.
            </p>

            {formStatus && (
              <div
                className={`mb-4 p-2 rounded text-center ${
                  formStatus.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}
              >
                {formStatus}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-[#E48515] p-2 rounded focus:ring-2 focus:ring-[#E48515] focus:border-transparent text-sm"
                />
                {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border border-[#E48515] p-2 rounded focus:ring-2 focus:ring-[#E48515] focus:border-transparent text-sm"
                />
                {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}

              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border border-[#E48515] p-2 w-full rounded mb-4 focus:ring-2 focus:ring-[#E48515] focus:border-transparent text-sm"
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

              <textarea
                name="message"
                placeholder="Your Message..."
                value={formData.message}
                onChange={handleChange}
                className="border border-[#E48515] p-2 w-full rounded mb-4 focus:ring-2 focus:ring-[#E48515] focus:border-transparent text-sm"
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
              <button
                type="submit"
                disabled={loading}
                onClick={handleSubmit}
                className="bg-gray-700 hover:bg-black hover:text-white transition text-white p-2 rounded w-full"
              >
                {loading ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
