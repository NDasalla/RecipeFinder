import { useState } from "react";
import "./App.css";
// import Recipes from "./components/Recipes";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeCard from "./components/RecipeCard";
import Modal from "./ui/Modal";
import recipeData from "./utils/recipeData";

const App = () => {
  const [recipes, setRecipes] = useState(recipeData);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const onAddRecipe = (newRecipe) => {
    // modal should close
    hideModal();
    // new recipe should be added to the DOM
    setRecipes((recipes) => {
      return [...recipes, newRecipe];
    });
  };

  const recipeCards = recipes.map((recipe, i) => (
    <RecipeCard recipe={recipe} key={i} />
  ));

  /*TODOS
    - navbar, margin/padding
  */
  return (
    <div className="max-w-7xl mx-auto text-center">
      <p className="text-7xl">Recipe? Recipe!</p>
      <div>
        <button
          className="bg-blue-500 px-4 py-2 hover:bg-blue-600 transition"
          onClick={showModal}
        >
          + Add New Recipe
        </button>
      </div>
      <div className="mt-12 mx-12 grid lg:grid-cols-3 gap-6">{recipeCards}</div>
      <Modal isVisible={isModalVisible} hideModal={hideModal}>
        <AddRecipeForm onAddRecipe={onAddRecipe} />
      </Modal>
    </div>
  );
};

export default App;
