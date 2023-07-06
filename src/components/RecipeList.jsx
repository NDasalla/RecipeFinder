import { useLoaderData } from "react-router";
import RecipeCard from "./RecipeCard";
import { fetchRecipes } from "../utils/recipes";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const loader = async () => {
  return fetchRecipes();
};

const RecipeList = () => {
  const { recipeData } = useLoaderData();
  const [recipes, setRecipes] = useState(recipeData);
  const [search, setSearch] = useState("");

  //useEffect whenever search changes
  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch("http://localhost:3000/recipes"); // get response
      const recipeData = await response.json(); // parse response body text (make it an array instead of a string)
      setRecipes(
        recipeData.filter((recipe) => {
          return recipe.name.toUpperCase().includes(search.toUpperCase());
        })
      );
    }
    fetchRecipes();
  }, [search]);
  return (
    <div className="mt-6">
      <SearchBar search={search} setSearch={setSearch} />
      <div className="mt-6">
        <Link
          to="/recipes/addRecipe"
          className=" bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition"
        >
          Add Recipe
        </Link>
      </div>
      <div className="mt-6 mx-12 grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {recipes.map((recipe) => {
          return (
            <div
              key={recipe.id}
              className="flex justify-center rounded-lg bg-white 
              drop-shadow-[0_0_1px_rgba(0,0,0,0.30)]"
            >
              <Link to={`/recipes/${recipe.id}`}>
                <RecipeCard recipe={recipe} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecipeList;
