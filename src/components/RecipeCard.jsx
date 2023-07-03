import { useLoaderData } from "react-router-dom";
import { fetchRecipes } from "../utils/recipes";

export async function loader() {
  return fetchRecipes();
}

const RecipeCard = () => {
  // const { name, country, imageUrl, ingredients } = recipe;

  // const { recipes } = useLoaderData();

  const recipeCards = useLoaderData().map((recipe) => {
    return <RecipeCard recipe={recipe} key={recipe.id} />;
  });

  return <>{recipeCards}</>;
};

// RecipeCard.propTypes = {
//   recipe: PropTypes.shape({
//     name: PropTypes.string,
//     country: PropTypes.string,
//     imageUrl: PropTypes.string,
//     ingredients: PropTypes.shape,
//   }),
// };

export default RecipeCard;
