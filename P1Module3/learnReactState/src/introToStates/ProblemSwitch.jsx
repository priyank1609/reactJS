import Problems from "./Problems";
import { useState } from "react";

const ProblemSwitch = () => {
    const [index, setIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const problems = [
      {
        question: "What is React?",
        answer: "A JavaScript library for building UIs",
      },
      {
        question: "What is useState?",
        answer: "A React Hook for state management",
      },
      {
        question: "What is JSX?",
        answer: "JavaScript syntax extension for React",
      },
    ];

    const nextProblem = () => {
        setIndex(index + 1);
        setShowAnswer(false);
    };

    const prevProblem = () => {
        setIndex(index - 1);
        setShowAnswer(false);
    };

    return (
      <>
        <Problems
          question={problems[index].question}
          answer={problems[index].answer}
          showAnswer={showAnswer}
        />

        <button onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </button>

        <button onClick={prevProblem} disabled={index === 0}>
          Previous
        </button>

        <button onClick={nextProblem} disabled={index === problems.length - 1}>
          Next
        </button>
      </>
    );
}

export default ProblemSwitch
