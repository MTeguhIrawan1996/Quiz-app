import Countdown from "react-countdown";
import CountDownRenderer from "./CountdownRenderer";
import { useSelector } from "react-redux";

const Completionist = () => (
  <span className="text-4xl font-bold text-green-400">Waktu Habis!</span>
);

const Timer = (props) => {
  const { currentState, score, quiz } = useSelector((state) => state.quizPlay);

  const countDown = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <CountDownRenderer hours={hours} minutes={minutes} seconds={seconds} />
      );
    }
  };

  return (
    <div className="flex flex-col w-full justify-center items-center gap-3">
      {currentState === "STARTED_QUIZ" && (
        <>
          <span className="text-3xl font-bold text-secondary-color">
            Sisa Waktu Soal :
          </span>
          <Countdown date={props.end} renderer={countDown} />
        </>
      )}

      {currentState === "END_QUIZ" && (
        <>
          <h1 className="text-3xl font-bold text-secondary-color">
            Selamat Quiz Selesai
          </h1>
          <span className="text-2xl font-bold text-secondary-color">
            Score Akhir: {score}
          </span>
          <p className="text-2xl font-semibold text-white">
            Jumlah Soal: {quiz.results.length}
          </p>
          <p className="text-2xl font-semibold text-white">
            Benar: {score / 10}
          </p>
          <p className="text-2xl font-semibold text-white">
            Salah: {quiz.results.length - score / 10}
          </p>
          <p className="text-2xl font-semibold text-white">Jumlah Jawab: 10</p>
        </>
      )}
    </div>
  );
};

export default Timer;
