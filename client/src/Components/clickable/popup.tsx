import React, { useState } from 'react';
import Image from 'next/image';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateField = (fieldName: string, value: string) => {
    const newErrors = { ...errors };
    if (fieldName === 'name') {
      if (!value.trim()) {
        newErrors.name = 'Full name is required.';
      } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        newErrors.name = 'Full name must contain only letters and spaces.';
      } else {
        delete newErrors.name;
      }
    }
    if (fieldName === 'email') {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!value.trim()) {
        newErrors.email = 'Email is required.';
      } else if (/<|>|script/i.test(value)) {
        newErrors.email = 'Email contains invalid content.';
      } else if (!emailPattern.test(value)) {
        newErrors.email = 'Please enter a valid email address.';
      } else {
        delete newErrors.email;
      }
    }
    if (fieldName === 'phone') {
      if (!value.trim()) {
        newErrors.phone = 'Phone number is required.';
      } else if (!/^\d{10}$/.test(value)) {
        newErrors.phone = 'Please enter a valid phone number';
      } else {
        delete newErrors.phone;
      }
    }
    setErrors(newErrors);
  };

  const validateForm = () => {
    validateField('name', name);
    validateField('email', email);
    validateField('phone', phone);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setName('');
      setEmail('');
      setPhone('');
      setProjectDetails('');
      setErrors({});
      alert('Form submitted successfully!');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl mx-4 md:mx-auto flex">
        <div className="bg-blue-500 text-white p-8 w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">Hey Hey! Before You Leave...</h2>
          <p className="mb-6">Our Experts Are Ready To Provide Free</p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Image src="/image/tick-circle.svg" alt="tick" width={24} height={24} className="mr-2" />
              Development Blueprint
            </li>
            <li className="flex items-center">
              <Image src="/image/tick-circle.svg" alt="tick" width={24} height={24} className="mr-2" />
              Tentative Budget
            </li>
            <li className="flex items-center">
              <Image src="image/tick-circle.svg" alt="tick" width={24} height={24} className="mr-2" />
              Estimated Time-To-Market
            </li>
          </ul>
          <div className="mt-8">
            <Image src="/image/Contact.png" alt="contact" width={200} height={400} />
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-semibold absolute top-2 right-5"
          >
            &times;
          </button>
          <form className="mt-8 p-8 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Full name*</label>
              <input
                type="text"
                className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-1"
                value={name}
                onChange={(e) => {
                  const value = e.target.value;
                  setName(value);
                  validateField('name', value);
                }}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-gray-700">Email ID*</label>
              <input
                type="email"
                className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-1"
                value={email}
                onChange={(e) => {
                  const value = e.target.value;
                  setEmail(value);
                  validateField('email', value);
                }}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-gray-700">Tell us more about your project (Optional)</label>
              <textarea
                className="w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                value={projectDetails}
                onChange={(e) => setProjectDetails(e.target.value)}
              />
            </div>
            <div className="flex space-x-2">
              <div className="flex-1">
                <label className="block text-gray-700">+91</label>
                <input
                  type="text"
                  className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-1"
                  placeholder="Contact Number"
                  value={phone}
                  onChange={(e) => {
                    const value = e.target.value;
                    setPhone(value.slice(0, 10));
                    validateField('phone', value);
                  }}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
            </div>
            <div className="text-center pt-6">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
              >
                Schedule Free Consultation
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
