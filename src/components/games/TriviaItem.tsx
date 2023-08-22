import { useState } from "react";

interface Answers {
  text: string;
  isCorrect: boolean;
}

interface Props {
  question: string;
  answers: Answers[];
  handleClick: (answer: Answers) => void;
}

const TriviaItem: React.FC<Props> = ({ question, answers, handleClick }) => {
  return (
    <div className="">
      <h2 className="md:text-xl text-lg w-full text-bold p-12 ">{question}</h2>
      <ul className="flex flex-col gap-2">
        {answers.map((el: Answers) => (
          <li key={el.text}>
            <button
              className="btn bg-fuchsia-600 p-4 w-full"
              onClick={() => handleClick(el)}
            >
              {el.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TriviaItem;
