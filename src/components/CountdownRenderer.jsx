import { zeroPad } from "react-countdown";

const CountDownItem = ({ label, value }) => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">{zeroPad(value, 2)}</h1>
        <p className="text-base font-normal text-white">{label}</p>
      </div>
      {label !== "Detik" && (
        <span className="px-3 text-lg font-semibold text-center pb-6 text-white">
          :
        </span>
      )}
    </>
  );
};

const CountDownRenderer = (props) => {
  return (
    <div className="flex justify-center items-center">
      {props.hours > 0 && <CountDownItem label="Jam" value={props.hours} />}
      {props.minutes > 0 && (
        <CountDownItem label="Menit" value={props.minutes} />
      )}
      <CountDownItem label="Detik" value={props.seconds} />
    </div>
  );
};

export default CountDownRenderer;
