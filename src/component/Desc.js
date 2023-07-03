import React from "react";
import "./Desc.css";
import { AiOutlineMenuFold } from "react-icons/ai";
import MenuBar from "./MenuBar";
import DescFoot from "./DescFoot";

function Desc({ onChange }) {
  return (
    <div className="descParent">
      <div className="info">
        <div className="name">
          <p className="nIcon">V</p>
          <p className="userName">&nbsp;Veer</p>
        </div>
        <button onClick={onChange} className="sym">
          <AiOutlineMenuFold className="symBtn" />
        </button>
      </div>
      <div className="list">
        <MenuBar name="Home" symName="AiFillAppstore" />
        <MenuBar name="Section 1" symName="IoStatsChart" />
        <MenuBar name="Section 2" symName="FcCandleSticks" />
        <MenuBar name="Section 8" symName="IoShareSocialSharp" />
        <MenuBar
          name="Section 8"
          symName="IoShareSocialSharp"
          status="active"
        />
      </div>
      <div className="foot">
        <DescFoot />
      </div>
    </div>
  );
}

export default Desc;
