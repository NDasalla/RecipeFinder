export const fetchRecipes = async () => {
  const response = await fetch("http://localhost:3000/recipes"); // get response
  const recipeData = await response.json(); // parse response body text (make it an array instead of a string)
  // console.log(recipeData);
  return { recipeData };
};

// export const fetchRecipeIngredients = async (params) => {
//   const response = await fetch(
//     `http://localhost:3000/recipeIngredients/${params.id}`
//   ); // get response
//   const recipeIngredientsData = await response.json(); // parse response body text (make it an array instead of a string)
//   console.log(recipeIngredientsData);
//   return recipeIngredientsData;
// };
