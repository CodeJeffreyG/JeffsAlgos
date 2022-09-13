import { useState, useEffect } from "react";
import Node from "../Node/Node";
import "./Grid.css";

export default function Grid() {
  const [grid, setGrid] = useState([]);
  const [startOrFinish, setStartOrFinish] = useState(true);
  const [startNode, setSNode] = useState([]);

  useEffect(() => makeGrid(), [startNode]);

  const makeGrid = () => {
    let g: any = [];
    let node = {
      row: 0,
      col: 0,
      isStart: false,
      isFinish: false,
      gridCord: "",
    };

    for (let row = 0; row < 15; row += 1) {
      let currentRow: any = [];
      for (let col = 0; col < 50; col += 1) {
        const [startR, startC] = startNode;
        currentRow.push(
          (node = {
            row: row,
            col: col,
            isStart: startR === row && startC === col ? true : false,
            isFinish: false,
            gridCord: `${row},${col}`,
          })
        );
      }
      g.push(currentRow);
    }

    setGrid(g);
  };

  const setStartNode = (e: any) => {
    const id = e.currentTarget.id;
    let current = null;
    let gridId = id.split(",").map((x: any) => Number(x));
    let [r, c] = gridId;

    for (let row of grid) {
      for (let col of row) {
        console.log(col);
        if (col.col === c && col.row === r) {
          col = { ...col, isStart: true };
          setSNode(gridId);
        }
      }
    }
  };

  const SorF = () => {
    setStartOrFinish((currentStartOrFinish) => !currentStartOrFinish);
  };

  return (
    <>
      <div className="grid">
        {grid.map((row: any, rowIndex) => {
          return (
            <div key={rowIndex}>
              {row.map((node: any, nodeIndex: any) => {
                let { row, col, isStart, isFinish, gridCord } = node;
                return (
                  <Node
                    n={node}
                    key={nodeIndex}
                    row={row}
                    col={col}
                    isStart={isStart}
                    isFinish={isFinish}
                    gridCord={gridCord}
                    click={setStartNode}
                  />
                );
              })}
            </div>
          );
        })}
        <button onClick={SorF}>
          {startOrFinish ? "StartNode" : "EndNode"}
        </button>
      </div>
    </>
  );
}
