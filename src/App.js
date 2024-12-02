import React, { useState } from 'react';

const QuizApp = () => {
  const questions = [
    {
      question: "What is an adjective?",
      options: ["A. A type of noun", "B. A type of verb", "C. A word that describes a noun", "D. A word that describes a verb"],
      correctAnswer: 2, // C is the correct answer (index 2)
    },
    {
      question: "Which is the correct definition of a comparative adjective?",
      options: ["A. Describes something in a positive way", "B. Compares two things", "C. Describes a noun", "D. Describes an action"],
      correctAnswer: 1, // B is the correct answer (index 1)
    },
    {
      question: "Which of the following is an example of a superlative adjective?",
      options: ["A. Tall", "B. Taller", "C. Tallest", "D. More tall"],
      correctAnswer: 2, // C is the correct answer (index 2)
    },
    {
      question: "Which of the following is an example of an adjective of quantity?",
      options: ["A. Few", "B. Better", "C. Loud", "D. Fast"],
      correctAnswer: 0, // A is the correct answer (index 0)
    },
    {
      question: "Which of these sentences contains an adjective?",
      options: ["A. He runs fast.", "B. She is a smart student.", "C. They play basketball.", "D. We eat daily."],
      correctAnswer: 1, // B is the correct answer (index 1)
    },
    {
      question: "Which sentence uses a comparative adjective?",
      options: ["A. This book is good.", "B. She is taller than me.", "C. The sky is blue.", "D. I feel happy."],
      correctAnswer: 1, // B is the correct answer (index 1)
    },
    {
      question: "Which word is an adjective in this sentence? 'The red apple is delicious.'",
      options: ["A. Red", "B. Apple", "C. Is", "D. Delicious"],
      correctAnswer: 0, // A is the correct answer (index 0)
    },
    {
      // Updated 8th question (Interrogative Adjective)
      question: "Which of these sentences contains an interrogative adjective?",
      options: ["A. Which book do you like?", "B. She is a great singer.", "C. The red car is fast.", "D. This is a beautiful house."],
      correctAnswer: 0, // A is the correct answer (index 0)
    },
    {
      // Updated 9th question (Compound Adjective)
      question: "Which of the following is a compound adjective?",
      options: ["A. Well-known", "B. Beautiful", "C. Tall", "D. Quick"],
      correctAnswer: 0, // A is the correct answer (index 0)
    },
    {
      question: "Which of the following sentences uses an adjective of opinion?",
      options: ["A. She wore a beautiful dress.", "B. The flowers are in the garden.", "C. They ran quickly.", "D. The dog is brown."],
      correctAnswer: 0, // A is the correct answer (index 0)
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleAnswer = (index) => {
    setShowAnswer(true);
    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setShowAnswer(false);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsQuizOver(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowAnswer(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.quizContent}>
        <h1 style={styles.header}>Adjectives Quiz</h1>
        {isQuizOver ? (
          <div>
            <h2 style={styles.result}>Your Score: {score}/{questions.length}</h2>
            <h3 style={styles.thankYouText}>Thank you </h3>
          </div>
        ) : (
          <>
            <h2 style={styles.question}>{questions[currentQuestion].question}</h2>
            <div>
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showAnswer}
                  style={{
                    ...styles.optionButton,
                    backgroundColor: showAnswer && index === questions[currentQuestion].correctAnswer
                      ? '#4CAF50' // Green color for correct answer
                      : showAnswer && index !== questions[currentQuestion].correctAnswer
                      ? '#f44336' // Red color for wrong answer
                      : '#008CBA', // Default color for options
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
            {showAnswer && (
              <div>
                <p style={styles.correctAnswerText}>
                  Correct Answer:{" "}
                  {questions[currentQuestion].options[
                    questions[currentQuestion].correctAnswer
                  ]}
                </p>
                <button
                  onClick={nextQuestion}
                  style={styles.nextButton}
                >
                  Next Question
                </button>
              </div>
            )}
            <button
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
              style={styles.prevButton}
            >
              Previous Question
            </button>
          </>
        )}
      </div>
    </div>
  );
};

// Styles for the quiz app
const styles = {
  container: {
    textAlign: 'center',
    margin: '0 auto',
    padding: '20px',
    maxWidth: '800px',
    backgroundColor: '#f4f4f9',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundImage: 'url(https://img.freepik.com/free-vector/cerulean-blue-curve-frame-template_53876-99029.jpg)', // Background image applied to the entire page
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  },
  quizContent: {
    padding: '20px',
    //backgroundColor: 'rgba(255, 255, 255, 0.6)', // Slightly transparent to show background image
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: '700px',
    margin: '0 auto',
  },
  header: {
    fontSize: '36px',
    color: '#333',
    marginBottom: '20px',
  },
  question: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
  },
  optionButton: {
    display: 'block',
    margin: '10px auto',
    padding: '15px 30px',
    cursor: 'pointer',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    width: '200px',
    transition: 'background-color 0.3s ease',
  },
  result: {
    fontSize: '28px',
    color: '#333',
    fontWeight: 'bold',
  },
  thankYouText: {
    fontSize: '20px',
    color: '#333',
    marginTop: '20px',
    fontWeight: 'bold',
  },
  correctAnswerText: {
    fontSize: '18px',
    color: '#333',
    marginTop: '10px',
  },
  nextButton: {
    padding: '10px 20px',
    marginTop: '10px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
  },
  prevButton: {
    padding: '10px 20px',
    marginTop: '10px',
    cursor: 'pointer',
    backgroundColor: '#ff9800',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
  },
};

export default QuizApp;
