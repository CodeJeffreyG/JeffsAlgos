import "./Node.css";

export default function Node(props: any) {
  let { row, col, isStart, isFinish, n } = props;
  if (row === 0 && col === 0) isStart = true;
  if (row === 14 && col === 49) isFinish = true;
  let startFinishNodes = isStart === true ? "Start" : isFinish ? "Finish" : "";

  if (row === 1 && col === 0) isStart = true;
  return <div className={`node${startFinishNodes}`}></div>;
}
