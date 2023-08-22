import { useMemo, useState } from "react";

import TriviaItem from "./TriviaItem";
import { HiQuestionMarkCircle } from "react-icons/hi";

import trivia from "../../data/trivia.json";
trivia.sort(() => Math.random() - 0.5);
trivia.forEach((el) => el.answers.sort(() => Math.random() - 0.5));

interface Answers {
  text: string;
  isCorrect: boolean;
}

const Trivia: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const currentQuestion = useMemo(() => trivia[index], [index]);
  const gameOver = useMemo(() => index >= trivia.length, [index]);

  const handleAnswerClick = (e: Answers) => {
    if (e.isCorrect) setScore(score + 1);
    setIndex((index) => index + 1);
  };

  const restartGame = () => {
    setIndex(0);
    setScore(0);
    trivia.sort(() => Math.random() - 0.5);
    trivia.forEach((el) => el.answers.sort(() => Math.random() - 0.5));
  };

  return (
    <div className=" min-h-screen sm:mx-10 px-5 grid place-items-center">
      <article className="flex flex-col gap-6 text-center bg-neutral-200 dark:bg-neutral-700 shadow-lg shadow-neutral-600 p-4 rounded-lg max-w-4xl w-full">
        {gameOver ? (
          <div className="p-3 ">
            <h2 className="text-6xl p-4">All Done!!!</h2>
            <h1 className="text-xl p-4">You Scored {score} points!!</h1>
            <button
              onClick={restartGame}
              className="btn bg-fuchsia-300 p-4 w-full"
            >
              Play again
            </button>
          </div>
        ) : (
          <div>
            <div className=" flex content-center justify-center items-center ">
              <h1 className=" flex gap-3 text-5xl">
                Trivia <HiQuestionMarkCircle />
              </h1>
            </div>
            <ul className="flex flex-col gap-6">
              <TriviaItem
                question={currentQuestion.text}
                answers={currentQuestion.answers}
                handleClick={handleAnswerClick}
              />
            </ul>
          </div>
        )}
      </article>
    </div>
  );
};

export default Trivia;
