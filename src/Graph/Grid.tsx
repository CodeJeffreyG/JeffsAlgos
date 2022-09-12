import { useState, useEffect } from "react";

import Node from "../Node/Node";

export default function Grid() {
  const [grid, setGrid] = useState([]);

  useEffect(() => makeGrid(), []);

  const makeGrid = () => {
    let g: any = [];
    let node = {
      row: 0,
      col: 0,
    };

    for (let row = 0; row < 15; row += 1) {
      let currentRow: any = [];
      for (let col = 0; col < 50; col += 1) {
        currentRow.push((node = { row: row, col: col }));
      }
      g.push(currentRow);
    }

    setGrid(g);
  };

  console.log(grid);

  return (
    <div className="grid">
      {
        grid.map((row: any, rowIndex) => {
          return (
            <div key={rowIndex}>
              {row.map((node: any, nodeIndex: any) => {
                const { row, col } = node;
                return <Node key={nodeIndex} row={row} col={col} />;
              })}
            </div>
          );
        })
      }
    </div>
  );
}
