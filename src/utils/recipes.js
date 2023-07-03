export async function fetchRecipes() {
  const response = await fetch("http://localhost:3000/recipes"); // get response
  const recipeData = await response.json(); // parse response body text (make it an array instead of a string)
  // console.log(recipeData);
  return recipeData;
}
