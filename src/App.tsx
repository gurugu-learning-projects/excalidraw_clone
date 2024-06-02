import { useState } from "react";
import { Layer, Rect, Stage } from "react-konva";
import "./App.css";

function App() {
  return (
    <main className="w-full relative">
      <Stage
        className="bg-white"
        width={window.innerWidth}
        height={window.innerHeight}
      >
        <Layer>
          <Rect
            x={20}
            y={20}
            width={100}
            height={100}
            fill="tomato"
            draggable
          />
        </Layer>
      </Stage>
    </main>
  );
}

export default App;
