import Header from "./Header";
import Main from "./Main";
import { useEffect, useReducer } from "react";

const initialState = {
  questions: [],
  // loading, error, ready, action, finished
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    default:
      throw new Error("action is unknow");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:8080/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) =>
        dispatch({
          type: "dataFailed",
        })
      );
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        <h1>Hello</h1>
      </Main>
    </div>
  );
}
