import { useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  const recipesResponse = await fetch(
    `http://localhost:3000/recipes/${params.recipeId}`
  );
  const recipe = await recipesResponse.json();
  const recipeIngredientsResponse = await fetch(
    `http://localhost:3000/recipeIngredients?recipeId=${params.recipeId}`
  );
  const recipeIngredients = await recipeIngredientsResponse.json();
  return { recipe, recipeIngredients };
};

const Recipe = () => {
  const { recipes, recipeIngredients } = useLoaderData();
  const { id, recipeId, ingredients } = recipeIngredients;
  console.log(recipes, recipeIngredients);
  // console.log(ingredients);
  // const { ingredients } = loaderData;
  return (
    <div className="my-4">
      <h1></h1>
      <ul>
        {Object.entries(ingredients).map(([key, value]) => {
          const temp =
            //replacing first char in string to uppercase
            key.charAt(0).toUpperCase() +
            //adding space between a lowercase char and uppercase char
            key.substring(1).replace(/([a-z])([A-Z])/, "$1 $2");
          return (
            <li key={key}>
              {temp}: {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Recipe;
