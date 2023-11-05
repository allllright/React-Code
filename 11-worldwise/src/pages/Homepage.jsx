import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

function Homepage() {
  return (
    <>
      <PageNav />
      <AppNav />
      <div>WorldWise</div>
      <Link to="/app">go to the app</Link>
    </>
  );
}

export default Homepage;
