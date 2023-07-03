import React, { useState } from "react";
import "./MainContent.css";
import MainContentRight from "./MainContentRight";
import MainContentLeft from "./MainContentLeft";

function MainContent() {
  const [hideValue, setHideValue] = useState("none");
  const [listName, setListName] = useState({});
  function clickHandlerHide() {
    hideValue === "none" ? setHideValue("flex") : setHideValue("none");
  }
  function clickHandlerShow() {
    setHideValue("flex");
  }
  return (
    <div className="mainConMain">
      <div
        className="mainConLeft"
        style={
          hideValue === "none" ? { maxWidth: "100%" } : null
        }
      >
        <MainContentLeft
          onChange={(receivedListName) => {
            clickHandlerShow();
            setListName(receivedListName);
          }}
        />
      </div>

      <div style={{ display: hideValue }} className="mainConRight">
        <MainContentRight listName={listName} onChange={clickHandlerHide} />
      </div>
    </div>
  );
}

export default MainContent;
