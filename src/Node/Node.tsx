import "./Node.css";

export default function Node(props: any) {
  let { row, col, isStart, isFinish, isWall, n, gridCord, click } = props;
  let startFinishNodes = isStart
    ? "Start"
    : isFinish
    ? "Finish"
    : isWall
    ? "Wall"
    : "";

  return (
    <div
      onClick={click}
      className={`node${startFinishNodes}`}
      id={`${gridCord}`}
    ></div>
  );
}
