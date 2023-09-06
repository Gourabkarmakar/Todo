import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./fratures/todoSlice";

function App() {
  const [Todo, setTodo] = useState();
  const dispatch = useDispatch();

  // Handle To add in store
  const handelOnSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(Todo));
    setTodo("");
  };

  const data = useSelector((state) => state.todos);
  console.log(data);

  return (
    <>
      <div className="position-relative">
        <div
          className="container position-sticky top-0 start-0 z-3 py-3"
          style={{ backdropFilter: "blur(10px)" }}
        >
          <h1>Todo App</h1>
          <div className="container my-3">
            <form onSubmit={handelOnSubmit} className="rounded d-flex my-3">
              <input
                type="text"
                placeholder="Enter Todo"
                onChange={(e) => setTodo(e.target.value)}
                value={Todo}
                className="form-control mx-2"
              />
              <button type="submit" className="btn btn-success">
                <svg
                  width="15px"
                  fill="#ffffff"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 20 20"
                  enableBackground="new 0 0 20 20"
                  xmlSpace="preserve"
                >
                  <path d="M18,20H2c-0.6,0-1-0.4-1-1s0.4-1,1-1h16c0.6,0,1,0.4,1,1S18.6,20,18,20z" />
                  <path
                    d="M7,16H3c-0.6,0-1-0.4-1-1v-4c0-0.3,0.1-0.5,0.3-0.7l10-10c0.4-0.4,1-0.4,1.4,0l4,4c0.4,0.4,0.4,1,0,1.4l-10,10
	C7.5,15.9,7.3,16,7,16z M4,14h2.6l9-9L13,2.4l-9,9V14z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="d-flex flex-wrap flex-row justify-content-center">
          {data.length > 0 ? (
            data.map((i) => <TodoList td={i.todo} key={i.id} data_id={i.id} />)
          ) : (
            <h2>There Are No Todos... </h2>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

//
