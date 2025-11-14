import React from 'react'

const QuizQuestionView = ({selectedSubject,q,currentQ,selected,handleAnswer,setSelectedSubject,setSearchTerm,nextQuestion}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 py-12 mt-20">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <img
            src={selectedSubject.icon}
            alt="icon"
            className="w-12 h-12 rounded-lg"
          />
          <h2 className="text-2xl font-bold text-gray-800">
            {selectedSubject.subjectName} Quiz
          </h2>
        </div>

        <p className="text-gray-600 mb-3 text-sm">
          Question {currentQ + 1} of {selectedSubject.questions.length}
        </p>
        <h3 className="text-lg font-semibold mb-6 text-gray-800">
          {q.question}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {q.options.map((option, i) => {
            let style =
              "border rounded-xl p-3 text-left transition-all duration-300 text-gray-800 shadow-sm";
            if (selected) {
              if (option === q.correctAnswer)
                style += " bg-green-500 text-white font-semibold";
              else if (option === selected && option !== q.correctAnswer)
                style += " bg-red-500 text-white";
              else style += " bg-gray-100";
            } else {
              style += " hover:bg-blue-100";
            }

            return (
              <button
                key={i}
                onClick={() => handleAnswer(option)}
                className={style}
                disabled={!!selected}
              >
                {option}
              </button>
            );
          })}
        </div>

        {selected && (
          <>
            <p className="mt-4 text-sm italic text-gray-700">
              💡 {q.explanation}
            </p>
            <button
              onClick={nextQuestion}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full transition"
            >
              {currentQ + 1 < selectedSubject.questions.length
                ? "Next ➜"
                : "Show Result 🏁"}
            </button>
          </>
        )}

        <div className="text-center mt-6">
          <button
            onClick={() => {
              setSelectedSubject(null);
              setSearchTerm("");
            }}
            className="text-blue-600 hover:underline text-sm"
          >
            ⬅ Back to All Subjects
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuizQuestionView