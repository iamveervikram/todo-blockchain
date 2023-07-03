import React, { useState } from "react";
import "./MainContentLeftCard.css";
import { GiSwapBag } from "react-icons/gi";
import { AiOutlineDelete } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store/todo-slice";

function MainContentLeftCard({ headingData, onChange }) {
  const [listName, setListName] = useState(headingData);
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.tds.todos);

  const filterTodos = todos.filter((x) => x["id"] === headingData);
  function deleteHandler(todoId) {
    dispatch(todoActions.deleteTodo({ listId: headingData, todoId }));
  }
  function removeListHandler() {
    dispatch(todoActions.removeList({ listId: headingData }));
  }

  return (
    <div className="cardMain">
      <div className="cardHeading">
        <input
          disabled
          onChange={(event) => setListName(event.target.value)}
          type="text"
          value={listName}
          placeholder="Enter List Heading"
        />
        <button
          onClick={() => {
            removeListHandler();
          }}
          className="hRight"
          style={{
            backgroundColor: "#242731",
            borderRadius: "10px",
            position: "relative",
            right: "3.8rem",
          }}
        >
          <AiOutlineDelete
            style={{
              height: "25px",
              width: "25px",
              color: "red",
              fontWeight: "bold",
              borderRadius: "50%",
              borderColor: "#353945",
              backgroundColor: "#353945",
              padding: "5px",
            }}
          />
        </button>
      </div>
      <div className="addCard">
        <div className="addCardHeading">
          <div className="hLeft">
            <GiSwapBag
              style={{
                height: "25px",
                width: "25px",
                color: "white",
                fontWeight: "bold",
                borderRadius: "50%",
                borderColor: "#b1aae1",
                backgroundColor: "#b1aae1",
                padding: "5px",
              }}
            />
            <p>Add Todo</p>
          </div>
          <button
            onClick={() => {
              onChange({ listName: listName, title: "", description: "" });
            }}
            className="hRight"
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
        <div className="addCardContent">
          <p>Add Todo Description</p>
        </div>
      </div>
      {/* *************************************************** */}
      {filterTodos[0]["todos"] &&
        filterTodos[0]["todos"].map((items, i) => {
          return (
            <div key={i} className="addCard">
              <div className="addCardHeading">
                <div className="hLeft">
                  <GiSwapBag
                    style={{
                      height: "25px",
                      width: "25px",
                      color: "white",
                      fontWeight: "bold",
                      borderRadius: "50%",
                      borderColor: "#b1aae1",
                      backgroundColor: "#b1aae1",
                      padding: "5px",
                    }}
                  />
                  <p>{items["title"]}</p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      deleteHandler(items["id"]);
                    }}
                    className="hRight"
                  >
                    <AiOutlineDelete
                      style={{
                        height: "25px",
                        width: "25px",
                        color: "red",
                        fontWeight: "bold",
                        borderRadius: "50%",
                        borderColor: "#353945",
                        backgroundColor: "#353945",
                        padding: "5px",
                      }}
                    />
                  </button>
                  <button
                    onClick={() => {
                      onChange({
                        todoId: items["id"],
                        listName: headingData,
                        title: items["title"],
                        description: items["description"],
                      });
                    }}
                    className="hRight"
                  >
                    <BsFillPencilFill
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
              <div className="addCardContent">
                <p>{items["description"]}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default MainContentLeftCard;
