import React, { useState, useEffect } from "react";
import "./App.css";
import Desc from "./component/Desc";
import Main from "./component/Main";
import {
  sendData,
  sendList,
  fetchData,
  deleteData,
  removeList,
  updateData,
} from "./store/ActionCreator";
import { useDispatch, useSelector } from "react-redux";
import { useWindowSize } from "@uidotdev/usehooks";
let isInitial = true;
function App() {
  const data = useSelector((state) => state.tds.newData);
  const todos = useSelector((state) => state.tds.todos);
  const newListId = useSelector((state) => state.tds.newListId);
  const myRemoveList = useSelector((state) => state.tds.removeList);
  const myDeleteData = useSelector((state) => state.tds.deleteData);
  const myUpdateData = useSelector((state) => state.tds.updateData);

  const dataIsChanged = useSelector((state) => state.tds.changed);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [data, myDeleteData, myRemoveList, newListId, dispatch, todos]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (dataIsChanged) {
      dispatch(updateData(myUpdateData));
    }
  }, [myUpdateData, dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (dataIsChanged) {
      dispatch(deleteData(myDeleteData));
    }
  }, [myDeleteData, dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (dataIsChanged) {
      dispatch(removeList(myRemoveList));
    }
  }, [myRemoveList, dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (dataIsChanged) {
      dispatch(sendList(newListId));
    }
  }, [newListId, dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (dataIsChanged) {
      dispatch(sendData(data));
    }
  }, [data, dispatch]);
  const screenWidth = useWindowSize().width;

  const [hideVal, setHideVal] = useState("block");
  const [lessHideVal, setlessHideVal] = useState("none");

  return (
    <div className="App">
      <div
        style={
          screenWidth > 600 ? { display: hideVal } : { display: lessHideVal }
        }
        className="desc"
      >
        <Desc
          onChange={() => {
            setHideVal("none");
            setlessHideVal("none");
          }}
        />
      </div>
      <div
        style={
          hideVal === "none" || (lessHideVal === "none" && screenWidth < 600)
            ? { maxWidth: "100%" }
            : null
        }
        className="main"
      >
        <Main
          hideVal={hideVal}
          lessHideVal={lessHideVal}
          onChange={() => {
            setHideVal("block");
            setlessHideVal("block");
          }}
        />
      </div>
    </div>
  );
}

export default App;
