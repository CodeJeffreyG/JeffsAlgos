import "./Node.css";

export default function Node(props: any) {
  const { row, col, isStart, isFinish } = props;
  let otherClassName =
    isStart === true
      ? "startingNode"
      : isFinish === true
      ? "finishingNode"
      : "node";
  return <div className={`${otherClassName}`}></div>;
}
