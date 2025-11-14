import React, { useState } from "react";
import { quizData } from "../../../data/quizData";
import QuizSubjectCard from "../../quiz/QuizSubjectCard"
import QuizQuestionView from "./QuizQuestionView";
import QuizResultPage from "./QuizResultPage";


const QuizPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  // Filter subjects by search
  const filteredSubjects = quizData.filter((subject) =>
    subject.subjectName.toLowerCase().includes(searchTerm.toLowerCase())
);
 
  const startQuiz = (subject) => {
    setSelectedSubject(subject);
    setCurrentQ(0);
    setSelected(null);
    setScore(0);
    setAnswers([]);
    setShowResult(false);
  };

  const handleAnswer = (option) => {
    if (selected) return;

    setSelected(option);
    const q = selectedSubject.questions[currentQ];
    const correct = option === q.correctAnswer;

    if (correct) setScore((prev) => prev + 1);

    setAnswers((prev) => [
      ...prev,
      {
        question: q.question,
        selected: option,
        correct,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
      },
    ]);
  };

  const nextQuestion = () => {
    if (currentQ + 1 < selectedSubject.questions.length) {
      setCurrentQ((prev) => prev + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

 // 🟦 SUBJECT SELECTION VIEW
if (!selectedSubject) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-100 to-blue-50 py-12 mt-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
          🧠 Applute Quiz Arena
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Choose a subject and test your knowledge instantly!
        </p>

        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="🔍 Search subject..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-2xl p-4 w-full sm:w-1/2 shadow-md focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSubjects.map((subject) => (
            <QuizSubjectCard
              key={subject.subjectName}
              subject={subject}
              startQuiz={startQuiz}
            />
          ))}

          {filteredSubjects.length === 0 && (
            <p className="col-span-full text-gray-500">No subjects found.</p>
          )}
        </div>
      </div>
    </div>
  );
}


  const q = selectedSubject.questions[currentQ];

  // 🟩 RESULT PAGE
  if (showResult) {
    return (
   <QuizResultPage selectedSubject={selectedSubject} score={score} answers={answers} startQuiz={startQuiz} setSearchTerm={setSearchTerm} setSelectedSubject={setSelectedSubject} />
    );
  }

  // 🟨 QUIZ QUESTIONS VIEW
  return (
    <QuizQuestionView selectedSubject={selectedSubject} q={q} currentQ={currentQ} selected={selected} setSearchTerm={setSearchTerm} setSelectedSubject={setSelectedSubject} handleAnswer={handleAnswer} nextQuestion={nextQuestion}/>

  );
};

export default QuizPage;
