import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { IoStatsChart,IoShareSocialSharp } from "react-icons/io5";
import { FcCandleSticks } from "react-icons/fc";
import "./MenuBar.css";

function MenuBar({ name, symName,status }) {
  return (
    <div className="menMain" style={status==='active'?{backgroundColor:'#353945',borderRadius:'20px'}:null}>
      <div className="menSym">
        {symName === "AiFillAppstore" ? (
          <AiFillAppstore
            style={{ height: "25px", width: "25px", color: "gray" }}
          />
        ) : null}
        {symName === "IoStatsChart" ? (
          <IoStatsChart
            style={{ height: "25px", width: "25px", color: "gray" }}
          />
        ) : null}
        {symName === "FcCandleSticks" ? (
          <FcCandleSticks
            style={{ height: "25px", width: "25px", color: "gray" }}
          />
        ) : null}
        {symName === "IoShareSocialSharp" && status!=='active' ? (
          <IoShareSocialSharp
            style={{ height: "25px", width: "25px", color: "gray" }}
          />
        ) : null}
        {symName === "IoShareSocialSharp" && status==='active' ? (
          <IoShareSocialSharp
            style={{ height: "25px", width: "25px", color: "white" }}
          />
        ) : null}
        
      </div>
      <div className="menDes">
        <p style={symName === "IoShareSocialSharp" && status==='active' ?{color:'white'}:null}>{name}</p>
      </div>
    </div>
  );
}

export default MenuBar;
