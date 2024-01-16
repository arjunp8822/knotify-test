import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

interface Props {
  question: string;
  answer: string;
}

const QuestionAnswer = ({ question, answer }: Props) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <li className="border-b-2 border-b-gray-100 border-dashed py-4 flex flex-col gap-6 mb-6">
      <div className="flex gap-4 items-center">
        <button
          className="bg-red-500 p-2 rounded-full transition-all duration-150"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? (
            <FaAngleDown className="text-sm text-white rotate-180" />
          ) : (
            <FaAngleDown className="text-sm text-white" />
          )}
        </button>
        <p className="font-medium">{question}</p>
      </div>

      <p
        className={`ml-4 sm:ml-12 text-font-secondary border-l-2 border-bg-secondary pl-6 overflow-hidden duration-150 transition-all flex justify-center items-center ${
          showAnswer ? "h-72 sm:h-36 mb-6" : "h-0"
        }`}
      >
        {answer}
      </p>
    </li>
  );
};

export default QuestionAnswer;
