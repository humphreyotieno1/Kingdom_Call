import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [formStatus, setFormStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    setFormStatus(null);
  
    try {
      const response = await fetch('http://localhost:5000/v1/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        setFormStatus('Email submitted successfully!');
        reset();
      } else {
        const errorData = await response.json();
        setFormStatus(errorData.error || 'Failed to submit form, please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-10 sm:py-16 lg:py-24 font-lato" id="contact">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Contact Us
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-lg leading-relaxed text-gray-500">
            Reach out to us for any queries or feedback. We will get back to you as soon as possible.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
          <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
            {/* Contact Cards */}
            <ContactCard
              iconPath="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              text="+254 115 979 303 (office)"
            />
            <ContactCard
              iconPath="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              text="wearekingdomcall@gmail.com"
            />
            <ContactCard
              iconPath="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              text="Nairobi"
            />
          </div>

          <div className="mt-6 overflow-hidden bg-white rounded-xl">
            <div className="px-6 py-12 sm:p-12">
              <h3 className="text-3xl font-semibold text-center text-gray-900">
                Send us a message
              </h3>

              {formStatus && (
                <div
                  aria-live="assertive"
                  className={`mt-4 mb-6 p-2 rounded text-center ${formStatus.includes("successfully")
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                    }`}
                >
                  {formStatus}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="mt-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  <InputField
                    label="Your name"
                    name="name"
                    placeholder="Enter your full name"
                    register={register}
                    errors={errors}
                    validation={{ required: "Name is required", minLength: { value: 3, message: "Name must be at least 3 characters long." } }}
                  />
                  <InputField
                    label="Email address"
                    name="email"
                    placeholder="Enter your email"
                    register={register}
                    errors={errors}
                    validation={{ required: "Email is required", pattern: { value: /\S+@\S+\.\S+/, message: "Email must be a valid email address." } }}
                    type="email"
                  />
                  <InputField
                    label="Phone number"
                    name="phone"
                    placeholder="Enter your phone number"
                    register={register}
                    errors={errors}
                    validation={{ required: "Phone is required", pattern: { value: /^[0-9]{10,15}$/, message: "Phone must be a valid number (10-15 digits)." } }}
                    type="tel"
                  />
                  <div className="sm:col-span-2">
                    <label className="text-base font-medium text-gray-900">
                      Message
                    </label>
                    <div className="mt-2.5 relative">
                      <textarea
                        {...register('message', { required: "Message is required", minLength: { value: 10, message: "Message must be at least 10 characters long." } })}
                        placeholder="Enter your message"
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                        rows="4"
                      ></textarea>
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className={`inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 ${loading ? 'bg-gray-500' : 'bg-[#e49c49] hover:bg-orange-700'}`}
                    >
                      {loading ? "Sending..." : "Send"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ContactCard Component for rendering contact details
const ContactCard = ({ iconPath, text }) => (
  <div className="overflow-hidden bg-white rounded-xl">
    <div className="p-6">
      <svg
        className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          d={iconPath}
        />
      </svg>
      <p className="mt-6 text-lg font-medium text-gray-900">{text}</p>
    </div>
  </div>
);

// InputField Component for rendering input fields
const InputField = ({ label, name, placeholder, register, errors, validation, type = "text" }) => (
  <div>
    <label className="text-base font-medium text-gray-900">{label}</label>
    <div className="mt-2.5 relative">
      <input
        type={type}
        {...register(name, validation)}
        placeholder={placeholder}
        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
      />
      {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name].message}</p>}
    </div>
  </div>
);

export default Contact;