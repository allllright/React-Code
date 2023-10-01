function StartScreen({ numQuestions, dispatch }) {
  console.log({ numQuestions });
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQuestions} questions to test you React mastery</h3>
      <button
        className="btn btu-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
