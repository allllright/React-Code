import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <>
      <PageNav />
      <div>WorldWise</div>
      <Link to="/pricing">Pricing</Link>
    </>
  );
}

export default Homepage;
