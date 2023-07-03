import React, { useState } from "react";
import MainContentLeftCard from "./MainContentLeftCard";
import "./MainContentLeft.css";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store/todo-slice";

function MainContentLeft({ onChange }) {
  const dispatch = useDispatch();
  const [headingVal, setHeadingVal] = useState();

  function clickHandler() {
    dispatch(todoActions.addList({ listId: headingVal }));
    setHeadingVal("");
  }
  const todos = useSelector((state) => state.tds.todos);
  return (
    <div className="MainContentLeftMain">
      {todos &&
        todos.map((val, i) => {
          return (
            <MainContentLeftCard
              key={i}
              headingData={val["id"]}
              onChange={onChange}
            />
          );
        })}

      <div className="AddTodoHeading">
        <input
          onChange={(event) => setHeadingVal(event.target.value)}
          type="text"
          placeholder="Add Todo-List (Heading)"
          value={headingVal}
        />
        <button
          onClick={() => {
            clickHandler();
          }}
          className="hRight"
          style={{
            backgroundColor: "#242731",
            borderRadius: "10px",
            position: "relative",
            right: "3.8rem",
            top: "0.5rem",
          }}
        >
          <FaPlus
            style={{
              height: "25px",
              width: "25px",
              color: "white",
              fontWeight: "bold",
              borderRadius: "50%",
              borderColor: "#353945",
              backgroundColor: "#353945",
              padding: "5px",
            }}
          />
        </button>
      </div>
    </div>
  );
}

export default MainContentLeft;
