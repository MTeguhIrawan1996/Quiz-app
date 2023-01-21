import Countdown from "react-countdown";
import CountDownRenderer from "./CountdownRenderer";

const Completionist = () => <span>You are good to go!</span>;

const Timer = (props) => {
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
      <span className="text-3xl font-bold text-secondary-color">
        Sisa Waktu Soal :
      </span>
      <Countdown date={props.end} renderer={countDown} />
    </div>
  );
};

export default Timer;
