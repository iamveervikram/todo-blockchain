import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import "./MainContentRight.css";
import { useDispatch } from "react-redux";
import { todoActions } from "../store/todo-slice";

function MainContentRight({ onChange, listName }) {
  const [title, setTitle] = useState(listName.title);
  const [description, setDescription] = useState(listName.description);
  useEffect(() => {
    setDescription(listName.description);
    setTitle(listName.title);
  }, [listName]);

  const dispatch = useDispatch();
  function saveHandler() {
    dispatch(
      todoActions.addTodo({ listId: listName.listName, title, description })
    );
  }
  function updateTodoHandler() {
    dispatch(
      todoActions.updateTodo({
        todoId: listName.todoId,
        listId: listName.listName,
        title: title,
        description: description,
      })
    );
    console.log(listName);
  }
  return (
    <div className="mainConRightMain">
      <div className="editBack">
        <button onClick={onChange}>
          <MdOutlineKeyboardBackspace
            style={{
              height: "18px",
              width: "18px",
              fontWeight: "bold",
            }}
          />
          <p>Edit Todo</p>
        </button>
      </div>
      <div className="editHead">
        <input
          placeholder="Add Todo"
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          value={title}
        />
      </div>
      <div className="editContent">
        <textarea
          placeholder="Add Todo Description"
          onChange={(event) => setDescription(event.target.value)}
          rows="4"
          value={description}
        />
      </div>
      <div className="editSave">
        {listName.todoId ? (
          <button
            onClick={() => {
              updateTodoHandler();
              onChange();
            }}
          >
            <p>Save</p>
          </button>
        ) : (
          <button
            onClick={() => {
              saveHandler();
              onChange();
            }}
          >
            <p>Save</p>
          </button>
        )}
      </div>
    </div>
  );
}

export default MainContentRight;
