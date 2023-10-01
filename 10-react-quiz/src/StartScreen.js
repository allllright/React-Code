function StartScreen({ numQuestions }) {
  console.log({ numQuestions });
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQuestions} questions to test you React mastery</h3>
      <button className="btn btu-ui">Let's start</button>
    </div>
  );
}

export default StartScreen;
