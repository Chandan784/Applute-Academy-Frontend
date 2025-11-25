import React from "react";

const QuizSubjectCard = ({ subject, startQuiz }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-2xl p-5 flex flex-col items-center 
                 hover:shadow-2xl transition-all hover:-translate-y-1 cursor-pointer 
                 border border-gray-100 w-full max-w-xs mx-auto"
    >
      {/* Image on Top */}
      <div className=" w-14 h-14 mb-4">
        <img
          src={subject.icon}
          alt={subject.subjectName}
          className="w-full h-full object-contain rounded-xl"
        />
      </div>

      {/* Title */}
      <h2 className="text-sm font-bold text-gray-800 capitalize text-center">
        {subject.subjectName}
      </h2>

      {/* Question Count */}
      <p className="text-gray-500  text-sm mt-1 mb-3 text-center">
        {subject.questions.length} Questions
      </p>

      {/* Button */}
      <button
        onClick={() => startQuiz(subject)}
        className="bg-blue-600 w-full text-white px-4 py-2 rounded-lg 
                   text-sm font-semibold hover:bg-blue-700 transition"
      >
        Start Quiz ➜
      </button>
    </div>
  );
};

export default QuizSubjectCard;
