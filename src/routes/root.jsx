import { Outlet, Link } from "react-router-dom";
import { fetchRecipes } from "../utils/recipes";

export async function loader() {
  return fetchRecipes();
}

const Root = () => {
  return (
    <div className="max-w-auto mx-auto text-center py-12 bg-[#D7A1F9]">
      <div
        className="max-w-6xl mx-auto py-12 rounded-xl bg-[#EFDCF9] 
        drop-shadow-[0_0_5px_rgba(0,0,0,0.50)]"
      >
        <p className="text-7xl font-serif">
          <Link to="/">Recipe? Recipe!</Link>
        </p>
        <div className="flex-grow border-t border-gray-400 mt-4"></div>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
