"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const PrayerRequest = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [formStatus, setFormStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    setFormStatus(null);

    try {
      const response = await fetch('/api/prayer-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus('Prayer request submitted successfully!');
        reset();
      } else {
        setFormStatus(result.error || 'Failed to submit prayer request. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#ebebeb] font-lato">
      <div className="w-full bg-gradient-to-b from-[#e48515] to-[#ebebeb] py-10">
        <h1 className="text-3xl font-bold text-black mt-20 mb-2 text-center py-4">
          Prayer Request
        </h1>
      </div>
      <div className="w-full py-20 mb-8 px-4 md:px-16 lg:px-32">
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="bg-gray-300 w-full h-80 md:h-96 flex justify-center">
            <img
              src="/sermon.jpg"
              alt="Prayer request image"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy" // Lazy loading the image
            />
          </div>
          <div className="w-full p-6 rounded shadow-lg h-full md:h-96 flex flex-col justify-between">
            <form
              className="flex flex-col h-full justify-between"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    {...register('name', {
                      required: 'Name is required',
                      minLength: { value: 3, message: 'Name must be at least 3 characters long.' }
                    })}
                    placeholder="Full Name"
                    className="border border-[#E48515] p-2 rounded focus:ring-2 focus:ring-[#E48515] focus:border-transparent text-sm"
                  />
                  {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    {...register('phone', {
                      required: 'Phone is required',
                      pattern: { value: /^[0-9]{10,15}$/, message: 'Phone must be a valid number (10-15 digits).' }
                    })}
                    placeholder="Phone number"
                    className="border border-[#E48515] p-2 rounded focus:ring-2 focus:ring-[#E48515] focus:border-transparent text-sm"
                  />
                  {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /\S+@\S+\.\S+/, message: 'Email must be a valid email address.' }
                  })}
                  placeholder="Email"
                  className="border border-[#E48515] p-2 w-full rounded mb-4 focus:ring-2 focus:ring-[#E48515] focus:border-transparent text-sm"
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
              </div>

              <div>
                <textarea
                  {...register('message', {
                    required: 'Message is required',
                    minLength: { value: 10, message: 'Message must be at least 10 characters long.' }
                  })}
                  placeholder="Your Message..."
                  className="border border-[#E48515] p-2 w-full rounded focus:ring-2 focus:ring-[#E48515] focus:border-transparent text-sm h-20 md:h-32 lg:h-40"
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
              </div>

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
                className={`p-2 rounded text-center ${formStatus.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
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

export default PrayerRequest;