import { useState, useEffect } from "react";
import Node from "../Node/Node";
import "./Grid.css";

export default function Grid() {
  const [grid, setGrid] = useState([]);

  useEffect(() => makeGrid(), []);

  const makeGrid = () => {
    let g: any = [];
    let node = {
      row: 0,
      col: 0,
      isStart: false,
      isFinish: false,
    };

    for (let row = 0; row < 15; row += 1) {
      let currentRow: any = [];
      for (let col = 0; col < 50; col += 1) {
        currentRow.push(
          (node = {
            row: row,
            col: col,
            isStart: false,
            isFinish: false,
          })
        );
      }
      g.push(currentRow);
    }

    setGrid(g);
  };

  console.log(grid);

  return (
    <div className="grid">
      {grid.map((row: any, rowIndex) => {
        return (
          <div key={rowIndex}>
            {row.map((node: any, nodeIndex: any) => {
              let { row, col, isStart, isFinish } = node;
              return (
                <Node
                  n={node}
                  key={nodeIndex}
                  row={row}
                  col={col}
                  isStart={isStart}
                  isFinish={isFinish}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
