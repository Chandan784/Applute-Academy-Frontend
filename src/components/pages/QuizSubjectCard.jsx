
import React from "react";

const QuizSubjectCard = ({ subject, startQuiz }) => {
  return (
    <div
      
      className="flex items-center bg-white shadow-lg rounded-2xl p-5 hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer border border-gray-100"
    >
      <img
        src={subject.icon}
        alt={subject.subjectName}
        className="w-14 h-14 rounded-xl object-contain mr-5"
      />

      <div className="text-left">
        <h2 className="text-xl font-bold text-gray-800 capitalize">
          {subject.subjectName}
        </h2>

        <p className="text-gray-500 text-sm mb-2">
          {subject.questions.length} Questions
        </p>

        <button onClick={() => startQuiz(subject)}
         className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-blue-700">
          Start Quiz ➜
        </button>
      </div>
    </div>
  );
};

export default QuizSubjectCard;
