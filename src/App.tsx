import { useState } from "react";
import { Stage } from "react-konva";
import "./App.css";

function App() {
  return (
    <main className="w-full relative">
      <Stage
        className="bg-white"
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </main>
  );
}

export default App;
