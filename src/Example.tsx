import React from "react";
import { useDrag, useDrop, XYCoord } from "react-dnd";
import record from "./record.png";
import { useState } from "react";
import Amnesiac from "../public/Amnesiac.jpg"
const Area_Side_Length = 500
const ContainerStyle: React.CSSProperties = {
  width: Area_Side_Length,
  height: Area_Side_Length,
  backgroundColor: "silver"
};
const Box_Size = 200
const BoxStyle: React.CSSProperties = {
  position: "absolute",
  border: "1px dashed gray",
  backgroundColor: "white",
  cursor: "move",
  opacity: 1,
  width: Box_Size,
  height:Box_Size,
  boxSizing: "border-box",
  
 
};

type Box = {
  top: number;
  left: number;
};

export const Example: React.FC = () => {
  const [box, setBox] = React.useState<Box>({ top: 0, left: 0 });
  const [{ isDragging }, drag, dragPreview] = useDrag(
    () => ({
      type: "box",
      item: { top: box.top, left: box.left },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging()
      })
    }),
    [box]
  );

  const [collectedProps, drop] = useDrop(
    () => ({
      accept: "box",
      drop(item: Box, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
        if (delta === null) return;
  
        let left = Math.round(item.left + delta.x);
        let top = Math.round(item.top + delta.y);
  
        // ボックスがコンテナからはみ出る場合は、位置を調整してコンテナ内に保持する
        if (left < 0) {left = 0};
        if (left > Area_Side_Length - Box_Size) left = Area_Side_Length - Box_Size;
        if (top < 0) top = 0;
        if (top > Area_Side_Length - Box_Size) top = Area_Side_Length - Box_Size;
  
        setBox({ top, left });
        return undefined;
      }
    }),
    []
  );

  const opacity = isDragging ? 0 : 1;

  return (
   <div> 
    <div ref={drop} style={{ ...ContainerStyle, }}>
        <div
            ref={(node) => {
                drag(node);
                dragPreview(node);
        }}
        style={{ ...BoxStyle, top: box.top, left: box.left, opacity }}
        >
            <div style={{width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <img src="/record.png" alt="favicon" style={{width:"100%",height:"100%",  }} />
                
            </div>
   
        </div>
   
    </div>
    
   </div>
  );
};

<div>

</div>