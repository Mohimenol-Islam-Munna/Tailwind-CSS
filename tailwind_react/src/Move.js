import React, { useState, useEffect } from "react";

const Move = () => {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [decrease, setDecrease] = useState(false);

  useEffect(() => {
    let moveBox = document.getElementById("moveBox");
    let flag = false;

    const interval = setInterval(() => {
      let bounds = moveBox.getBoundingClientRect();

      if (bounds.top > window.innerHeight - moveBox.clientHeight - 5) {
        console.log("bounds after > 100::", bounds.top);
        flag = true;
      } else if (bounds.top <= 0) {
        flag = false;
      }

      if (flag) {
        setPositionX((prevStateX) => prevStateX - 10);
        setPositionY((prevStateY) => prevStateY - 10);
      } else {
        setPositionX((prevStateX) => prevStateX + 10);
        setPositionY((prevStateY) => prevStateY + 10);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="moveBox"
      style={
        positionX <= 0
          ? {
              width: "100px",
              height: "100px",
              backgroundColor: "green",
              position: "absolute",
              top: positionY + "px",
              left: positionX + "px",
            }
          : {
              width: "100px",
              height: "100px",
              position: "absolute",
              backgroundColor: "red",
              top: positionY + "px",
              left: positionX + "px",
            }
      }
    >
      Move
    </div>
  );
};

export default Move;
