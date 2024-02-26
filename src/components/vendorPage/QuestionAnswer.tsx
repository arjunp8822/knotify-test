import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

interface Props {
  question: string;
  answer: string;
}

const QuestionAnswer = ({ question, answer }: Props) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <li className="border-b py-4 flex flex-col gap-6 text-sm sm:text-base">
      <div className="flex gap-4 items-center">
        <button
          className="border border-black p-2 -full transition-all duration-150"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? (
            <FiMinus className="text-sm" />
          ) : (
            <FiPlus className="text-sm" />
          )}
        </button>
        <p className="font-medium" onClick={() => setShowAnswer(!showAnswer)}>
          {question}
        </p>
      </div>

      <p
        className={`ml-12 text-font-secondary overflow-hidden duration-150 transition-all flex items-center text-gray-700 ${
          showAnswer ? "h-fit mb-6" : "h-0"
        }`}
        onClick={() => setShowAnswer(!showAnswer)}
      >
        {answer}
      </p>
    </li>
  );
};

export default QuestionAnswer;
