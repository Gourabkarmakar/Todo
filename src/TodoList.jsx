import { useDispatch } from "react-redux";
import { removeAllTodo } from "./fratures/todoSlice";

const TodoList = ({ td, data_id }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="ratio ratio-16x9 m-2 rounded bg-primary overflow-auto position-relative"
      style={{ width: "20rem" }}
    >
      <div className="p-2">
        <h4 className="fs-4 text">TodoList</h4>

        <p>{td}</p>

        <div
          className="rounded-5 ratio ratio-1x1 position-absolute bottom-0 end-0 m-2  shadow-lg"
          style={{ maxWidth: "2.5rem" }}
        >
          <button
            className="rounded-circle"
            onClick={() => dispatch(removeAllTodo(data_id))}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 12V17"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 12V17"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 7H20"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
