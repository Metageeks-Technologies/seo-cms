import React, { useState, useEffect } from 'react';
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

  // Lock body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-800 bg-opacity-50 md:overflow-hidden md:flex md:items-center md:justify-center">
      <div className="min-h-screen md:min-h-0 w-full flex flex-col justify-center items-center px-0">
        {/* Main popup container */}
        <div className="relative w-full max-w-4xl mx-auto md:rounded-lg shadow-lg bg-white">

          {/* Close button */}
          <div className="absolute top-4 right-4 z-60 flex justify-end p-4">
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800 text-3xl w-8 h-8 flex items-center justify-center rounded-full bg-white"
              aria-label="Close popup"
            >
              &times;
            </button>
          </div>

          {/* Content container */}
          <div className="flex flex-col md:flex-row">
            {/* Left section */}
            <div className="bg-blue-500 text-white p-6 md:p-8 w-full md:w-1/2">
              <div className="max-w-md mx-auto">
                <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                  Hey Hey! Before You Leave...
                </h2>
                <p className="text-sm md:text-base mb-4 md:mb-6">
                  Our Experts Are Ready To Provide Free
                </p>
                <ul className="space-y-2 text-sm md:text-base">
                  <li className="flex items-center">
                    <Image 
                      src="/image/tick-circle.svg" 
                      alt="tick" 
                      width={20} 
                      height={20} 
                      className="mr-2 w-5 h-5 md:w-6 md:h-6" 
                    />
                    Development Blueprint
                  </li>
                  <li className="flex items-center">
                    <Image 
                      src="/image/tick-circle.svg" 
                      alt="tick" 
                      width={20} 
                      height={20} 
                      className="mr-2 w-5 h-5 md:w-6 md:h-6" 
                    />
                    Tentative Budget
                  </li>
                  <li className="flex items-center">
                    <Image 
                      src="image/tick-circle.svg" 
                      alt="tick" 
                      width={20} 
                      height={20} 
                      className="mr-2 w-5 h-5 md:w-6 md:h-6" 
                    />
                    Estimated Time-To-Market
                  </li>
                </ul>
                <div className="mt-6 md:mt-8 flex justify-center md:justify-start">
                  <Image 
                    src="/image/Contact.png" 
                    alt="contact" 
                    width={180} 
                    height={360} 
                    className="w-40 md:w-48 lg:w-52"
                  />
                </div>
              </div>
            </div>

            {/* Right section */}
            <div className="w-full md:w-1/2 bg-white p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm md:text-base">
                    Full name*
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-1 text-sm md:text-base"
                    value={name}
                    onChange={(e) => {
                      const value = e.target.value;
                      setName(value);
                      validateField('name', value);
                    }}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs md:text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 text-sm md:text-base">
                    Email ID*
                  </label>
                  <input
                    type="email"
                    className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-1 text-sm md:text-base"
                    value={email}
                    onChange={(e) => {
                      const value = e.target.value;
                      setEmail(value);
                      validateField('email', value);
                    }}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs md:text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 text-sm md:text-base">
                    Tell us more about your project (Optional)
                  </label>
                  <textarea
                    className="w-full border-b border-gray-300 focus:border-blue-500 outline-none min-h-[60px] text-sm md:text-base"
                    value={projectDetails}
                    onChange={(e) => setProjectDetails(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm md:text-base">
                    +91
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-1 text-sm md:text-base"
                    placeholder="Contact Number"
                    value={phone}
                    onChange={(e) => {
                      const value = e.target.value;
                      setPhone(value.slice(0, 10));
                      validateField('phone', value);
                    }}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs md:text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 md:px-6 py-2 rounded-md hover:bg-blue-600 
                             text-sm md:text-base w-full md:w-auto transition-colors duration-200"
                  >
                    Schedule Free Consultation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;