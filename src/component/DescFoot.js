import React, { useEffect, useState } from "react";
import "./DescFoot.css";
import {
  BsGlobe,
  BsFillMoonStarsFill,
  BsFillCircleFill,
  BsFillSunFill,
} from "react-icons/bs";
function DescFoot() {
  const [theme, setTheme] = useState("dark-theme");
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  function clickHandler() {
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
  }
  return (
    <div className="descFootMain">
      <div className="trans">
        <button className="tb1">
          <p className="nIconSmall">V</p>
          <p>&ensp;$0.90</p>
        </button>
        <button className="tb2">
          <p>Buy</p>
          <p>&ensp;$XYZ</p>
        </button>
      </div>
      <div className="preference">
        <button>
          <BsGlobe style={{ height: "20px", width: "20px", color: "gray" }} />
        </button>

        {theme === "dark-theme" ? (
          <button className="toggleButton" onClick={clickHandler}>
            <div>
              <BsFillMoonStarsFill
                style={{
                  height: "18px",
                  width: "18px",
                  color: "rgb(46, 45, 45)",
                }}
              />
            </div>
            <div>
              <BsFillCircleFill
                style={{ height: "18px", width: "18px", color: "#3772ff" }}
              />
            </div>
          </button>
        ) : (
          <button className="toggleButton" onClick={clickHandler}>
            <div>
              <BsFillCircleFill
                style={{ height: "18px", width: "18px", color: "white" }}
              />
            </div>
            <div>
              <BsFillSunFill
                style={{ height: "18px", width: "18px", color: "orange" }}
              />
            </div>
          </button>
        )}
      </div>
    </div>
  );
}

export default DescFoot;
