import React, { useState, useReducer } from "react";

import "./App.css";

const actionTypes = {
  addTodo: "ADD_TODO",
  toggleTodo: "TOGGLE_TODO"
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.addTodo:
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
        todoCount: state.todoCount + 1
      };
    case actionTypes.toggleTodo:
      return {
        ...state,
        todos: state.todos.map((t, idx) =>
          action.idx === idx ? { ...t, completed: !t.completed } : t
        )
      };
    default:
      return state;
  }
}

const App = () => {
  const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0
  });
  const [text, setText] = useState("");
  return (
    <div>
      <span>number of todos: {todoCount}</span>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: actionTypes.addTodo, text });
          setText("");
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </form>
      <ul>
        {todos.map((t, idx) => (
          <li
            key={idx}
            onClick={() => dispatch({ type: actionTypes.toggleTodo, idx })}
            style={{
              textDecoration: t.completed ? "line-through" : ""
            }}
          >
            {t.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
