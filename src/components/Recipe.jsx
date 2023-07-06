import { useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  const recipesResponse = await fetch(
    `http://localhost:3000/recipes/${params.recipeId}`
  );
  const recipe = await recipesResponse.json();
  const recipeIngredientsResponse = await fetch(
    `http://localhost:3000/recipeIngredients?recipeId=${params.recipeId}`
  );
  const recipeIngredient = await recipeIngredientsResponse.json();

  return { recipe, recipeIngredient };
};

const Recipe = () => {
  const { recipe, recipeIngredient } = useLoaderData();
  const { id, name, country, imageUrl } = recipe;

  return (
    <div className="mt-4">
      <p className="text-4xl">{name}</p>
      <p className="italic text-2xl mt-4">{country}</p>
      <img
        className="mt-10 mx-auto object-cover h-[324px] w-[576px] rounded-xl drop-shadow-[0_0_10px_rgba(0,0,0,0.80)]"
        src={imageUrl}
        alt={name}
      />
      <p className="mt-12 text-xl font-bold">Ingredients</p>
      {recipeIngredient.map((recipe) => {
        return (
          <div key={recipe.id} className="my-4">
            <ul>
              {Object.entries(recipe.ingredients).map(([key, value]) => {
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
      })}
    </div>
  );
};

export default Recipe;
