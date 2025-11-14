import React from 'react'

const QuizResultPage = ({selectedSubject,score,answers,startQuiz,setSearchTerm,setSelectedSubject}) => {
  return (
       <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50 py-12 mt-20">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            🎯 {selectedSubject.subjectName} Quiz Result
          </h2>
          <p className="text-lg text-center mb-6">
            You scored <span className="font-bold text-blue-600">{score}</span>{" "}
            out of {selectedSubject.questions.length}
          </p>

          <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
            <div
              className="bg-blue-500 h-3 rounded-full transition-all duration-500"
              style={{
                width: `${(score / selectedSubject.questions.length) * 100}%`,
              }}
            ></div>
          </div>

          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {answers.map((a, i) => (
              <div
                key={i}
                className="border rounded-lg p-4 bg-gray-50 shadow-sm"
              >
                <p className="font-semibold mb-1 text-gray-800">
                  {i + 1}. {a.question}
                </p>
                <p
                  className={
                    a.correct
                      ? "text-green-600 font-medium"
                      : "text-red-600 font-medium"
                  }
                >
                  Your answer: {a.selected}
                </p>
                {!a.correct && (
                  <p className="text-gray-700 text-sm">
                    ✅ Correct answer: {a.correctAnswer}
                  </p>
                )}
                <p className="text-gray-600 text-sm mt-1 italic">
                  💡 {a.explanation}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => startQuiz(selectedSubject)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              🔁 Retry Quiz
            </button>
            <button
              onClick={() => {
                setSelectedSubject(null);
                setSearchTerm("");
              }}
              className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
            >
              ⬅ Back to Subjects
            </button>
          </div>
        </div>
      </div>
  )
}

export default QuizResultPage