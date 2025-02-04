import React, { useState } from "react";
import Swal from 'sweetalert2';

const FormPage = ({ closeForm }: any) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://miracle-portfolio-be.vercel.app/api/feedback/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      await response.json();
      
      // Success Alert
      await Swal.fire({
        title: 'Success!',
        text: 'Message sent successfully!',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      // Error Alert
      await Swal.fire({
        title: 'Error!',
        text: 'Failed to send message. Please try again.',
        icon: 'error',
        confirmButtonColor: '#d33',
        confirmButtonText: 'OK'
      });
    }
    setLoading(false);
  };

  return (
    <div className="flex w-10/12 mx-auto justify-center items-center">
      <div className="relative h-[500px] w-full py-8 rounded-lg shadow-lg">
        {/* Close Button */}
        <button
          className="absolute -top-28 right-0 bg-primary text-white font-bold text-xl px-6 py-4"
          onClick={closeForm}
        >
          X
        </button>

        {/* Header */}
        <h2 className="text-4xl font-extrabold text-center text-white mb-6">
          SEND A MESSAGE
        </h2>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name and Email */}
          <div className="flex space-x-4">
            <input
              className="w-full p-4 border border-primary rounded"
              placeholder="Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="w-full p-4 border border-primary rounded"
              placeholder="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Company and Subject */}
          <div className="flex space-x-4">
            <input
              className="w-full p-4 border border-primary rounded"
              placeholder="Company"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />
            <input
              className="w-full p-4 border border-primary rounded"
              placeholder="Subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message */}
          <textarea
            className="w-full px-4 py-2 border border-primary rounded h-32"
            placeholder="Message*"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              className="px-8 py-2 bg-white text-primary font-bold rounded border-b-4 border-primary disabled:opacity-50"
              type="submit"
              disabled={loading}
            >
              {loading ? "SENDING..." : "SEND"}
            </button>
          </div>
        </form>
        <div className="absolute inset-0 border-8 h-[19rem] border-primary translate-x-0 right-0 translate-y-[7.5rem] -z-10 w-10/12 mx-auto" />
      </div>
    </div>
  );
};

export default FormPage;