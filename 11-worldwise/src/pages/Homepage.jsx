import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <>
      <PageNav />
      <div>WorldWise</div>
      <Link to="/app">go to the app</Link>
    </>
  );
}

export default Homepage;
