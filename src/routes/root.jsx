import { Outlet, Link } from "react-router-dom";
import { fetchRecipes } from "../utils/recipes";

export async function loader() {
  return fetchRecipes();
}

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto text-center mb-12">
      <p className="text-7xl my-10">
        <Link to="/">Recipe? Recipe!</Link>
      </p>
      <Outlet />
    </div>
  );
};

export default Root;
