import React from "react";

const Certificate = () => {
  return (
    <div className="w-full bg-gray-50 py-10 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-[#0033A0] mb-6 text-center">
        Course Certificate
      </h2>

      <p className="text-gray-700 text-center max-w-2xl mb-6">
        After successfully completing this course, you will receive a verified
        certificate. Here is a demo preview of how your certificate will look.
      </p>

      {/* Certificate Image */}
      <div className="w-full max-w-3xl shadow-xl rounded-xl overflow-hidden border border-gray-200 bg-white">
        <img
          src="\cn_cirtificate.jpeg"
          alt="Certificate Demo"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Certificate;

