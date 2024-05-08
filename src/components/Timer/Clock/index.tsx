import style from "./Clock.module.scss";

interface ClockProps {
  time?: number | undefined;
}

const Clock = ({ time = 0 }: ClockProps) => {
  const hours = Math.floor(time / 60);
  const seconds = time % 60;

  const hoursToString = String(hours).padStart(2, "0");
  const secondsToString = String(seconds).padStart(2, "0");

  const [hoursClockFirstLetter, hoursClockSecondsLetter] = hoursToString;
  const [secondsClockFirstLetter, secondsClockSecondsLetter] = secondsToString;
  return (
    <>
      <span className={style.relogioNumero}>{hoursClockFirstLetter}</span>
      <span className={style.relogioNumero}>{hoursClockSecondsLetter}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secondsClockFirstLetter}</span>
      <span className={style.relogioNumero}>{secondsClockSecondsLetter}</span>
    </>
  );
};

export default Clock;
