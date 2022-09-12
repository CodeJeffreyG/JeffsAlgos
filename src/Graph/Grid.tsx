import { useState } from "react";

export default function Grid() {
  const [grid, setGrid] = useState([]);

  const makeGrid = () => {
    let g: any = []

    for(let row = 0; row < 15; row += 1) {
      let currentRow: any = [];
      for(let col = 0; col < 50; col += 1){
        currentRow.push([])
      }
      g.push(currentRow);
    }

    setGrid(g);
  };

  console.log(grid);

  return <div>hello world</div>;
}
