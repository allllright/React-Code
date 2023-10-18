import Option from "./Options";

function Qusetion({ question, answer, dispatch }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Qusetion;
