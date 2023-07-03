import React from "react";
import { BiWallet } from "react-icons/bi";
import { CgMenuBoxed } from "react-icons/cg";
import "./Main.css";
import MainContent from "./MainContent";
function Main({ hideVal, lessHideVal, onChange }) {
  return (
    <div className="mainM">
      <div
        style={
          hideVal === "none" || lessHideVal === "none"
            ? { margin: "0px 40px" }
            : null
        }
        className="mainHeader"
      >
        <div className="headerLeft">
          <CgMenuBoxed
            onClick={onChange}
            className="menuButton"
            style={
              hideVal === "none" || lessHideVal === "none"
                ? { display: "flex" }
                : { display: "none" }
            }
          />
          <p>Section</p>
        </div>
        <div className="headerRight">
          <BiWallet
            style={{
              height: "18px",
              width: "18px",
              color: "#3772ff",
              fontWeight: "bold",
            }}
          />
          <p>&emsp;0.2 $XYZ</p>
          <p className="tier">Tier 1</p>
        </div>
      </div>
      <div className="mainContent">
        <MainContent />
      </div>
    </div>
  );
}

export default Main;
