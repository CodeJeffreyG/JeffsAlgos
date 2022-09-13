import { triggerAsyncId } from "async_hooks";
import { useState, useEffect } from "react";

import Node from "../Node/Node";
import "./Grid.css";

export default function Grid() {
  const [grid, setGrid] = useState([]);
  const [wallNode] = useState<any>([]);
  const [startNode, setSNode] = useState([]);
  const [endNode, setENode] = useState([]);
  const [nodeFunction, setNodeFunction] = useState("Start");
  const [s, setS] = useState(true);

  useEffect(() => makeGrid(), [startNode, endNode, wallNode, s]);

  const makeGrid = () => {
    let g: any = [];
    let node = {
      row: 0,
      col: 0,
      isStart: false,
      isFinish: false,
      isWall: false,
      gridCord: "",
    };

    for (let row = 0; row < 15; row += 1) {
      let currentRow: any = [];
      for (let col = 0; col < 50; col += 1) {
        const [startR, startC] = startNode;
        const [endR, endC] = endNode;

        currentRow.push(
          (node = {
            row: row,
            col: col,
            isStart: startR === row && startC === col ? true : false,
            isFinish: endR === row && endC === col ? true : false,
            gridCord: `${row},${col}`,
            isWall: wallNode.includes(`${row},${col}`) ? true : false,
          })
        );
      }
      g.push(currentRow);
    }

    setGrid(g);
  };

  const setStartNode = (e: any) => {
    const id = e.currentTarget.id;
    let gridId = id.split(",").map((x: any) => Number(x));
    let [r, c] = gridId;

    for (let row of grid) {
      for (let col of row) {
        if (col.col === c && col.row === r && col.isFinish === false) {
          setSNode(gridId);
        }
      }
    }
  };

  const setFinishNode = (e: any) => {
    const id = e.currentTarget.id;
    let gridId = id.split(",").map((x: any) => Number(x));
    let [r, c] = gridId;

    for (let row of grid) {
      for (let col of row) {
        if (col.col === c && col.row === r && col.isStart === false) {
          setENode(gridId);
        }
      }
    }
  };

  const setWallNode = (e: any) => {
    const id: any = e.currentTarget.id;
    let gridId: any = id.split(",").map((x: any) => Number(x));
    let [r, c] = gridId;

    for (let row of grid) {
      for (let col of row) {
        if (
          col.col === c &&
          col.row === r &&
          col.isFinish === false &&
          col.isStart === false
        ) {
          wallNode.push(id);
          Switch();
        }
      }
    }
  };

  const setNode = (e: any) => {
    if (e.target.value === "SetStartNode") setNodeFunction("Start");
    if (e.target.value === "SetEndNode") setNodeFunction("End");
    if (e.target.value === "SetWalls") setNodeFunction("Wall");
  };

  const Switch = () => {
    return setS((s) => !s);
  };

  return (
    <>
      <div className="grid">
        {grid.map((row: any, rowIndex) => {
          return (
            <div key={rowIndex}>
              {row.map((node: any, nodeIndex: any) => {
                let { row, col, isStart, isFinish, gridCord, isWall } = node;
                return (
                  <Node
                    n={node}
                    key={nodeIndex}
                    row={row}
                    col={col}
                    isStart={isStart}
                    isFinish={isFinish}
                    isWall={isWall}
                    gridCord={gridCord}
                    click={
                      nodeFunction === "Start"
                        ? setStartNode
                        : nodeFunction === "End"
                        ? setFinishNode
                        : nodeFunction === "Wall"
                        ? setWallNode
                        : setStartNode
                    }
                  />
                );
              })}
            </div>
          );
        })}
        <select name="nodes" id="setNodes" onChange={setNode}>
          <option value="SetStartNode">Set Start Node</option>
          <option value="SetEndNode">Set End Node</option>
          <option value="SetWalls">Set Walls</option>
          <option value="SetWeight">Set Weight</option>
        </select>
      </div>
    </>
  );
}
