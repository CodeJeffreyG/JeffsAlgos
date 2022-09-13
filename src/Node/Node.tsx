import "./Node.css";

export default function Node(props: any) {
  let { row, col, isStart, isFinish, n, gridCord, click } = props;
  let startFinishNodes = isStart === true ? "Start" : isFinish ? "Finish" : "";

  return (
    <div
      onClick={click}
      className={`node${startFinishNodes}`}
      id={`${gridCord}`}
    ></div>
  );
}
