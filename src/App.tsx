import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Example } from "./Example";
import A from "./a"
import Download from "./Download";
import Canvas from "./Canvas";
import Callback from "./Callback"
import Time from "./Time"
import Img from "./Img";
import Callback2 from "./Callback2";
import Map from "./Map";
export default function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Example />
        {/* <Download />
        <Canvas /> */}

        {/* <Callback /> */}
        {/* <Time /> */}
      </DndProvider>
      {/* <Img />
      <Callback2 /> */}
      <Map />
      


      {/* <A /> */}
    </div>
  );
}
