import React from "react";

const FormPage = ({ closeForm }: any) => {
  return (
    <div className="flex w-10/12 mx-auto justify-center items-center">
      <div className="relative h-[500px]  w-full py-8 rounded-lg shadow-lg">
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
        <form className="space-y-4">
          {/* Name and Email */}
          <div className="flex space-x-4">
            <input
              className="w-full p-4 border border-primary rounded"
              placeholder="Name"
              type="text"
            />
            <input
              className="w-full p-4 border border-primary rounded"
              placeholder="Email"
              type="email"
            />
          </div>

          {/* Company and Subject */}
          <div className="flex space-x-4">
            <input
              className="w-full p-4  border border-primary rounded"
              placeholder="Company"
              type="text"
            />
            <input
              className="w-full p-4  border border-primary rounded"
              placeholder="Subject"
              type="text"
            />
          </div>

          {/* Message */}
          <textarea
            className="w-full px-4 py-2 border border-primary rounded h-32"
            placeholder="Message*"
          />

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              className="px-8 py-2 bg-white text-primary font-bold rounded border-b-4 border-primary"
              type="submit"
            >
              SEND
            </button>
          </div>
        </form>
        <div className="absolute inset-0 border-8 h-[19rem] border-primary translate-x-0 right-0 translate-y-[7.5rem] -z-10 w-10/12 mx-auto" />
      </div>
    </div>
  );
};

export default FormPage;
