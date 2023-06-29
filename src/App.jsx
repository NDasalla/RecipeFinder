import { useEffect, useState } from "react";
import "./App.css";
// import Recipes from "./components/Recipes";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeCard from "./components/RecipeCard";
import SearchBar from "./components/SearchBar";
import Modal from "./ui/Modal";
// import recipeData from "./utils/recipeData";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [search, setSearch] = useState("");

  //useEffect to get recipes from database on mount
  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch("http://localhost:3000/recipes"); // get response
      const recipeData = await response.json(); // parse response body text (make it an array instead of a string)
      setRecipes(recipeData);
    }

    fetchRecipes();
  }, []);

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

  //useEffect for eventListeners
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        hideModal();
      }
    };
    console.log("adding event listener");
    window.addEventListener("keydown", handleEscape);
    return () => {
      console.log("removing event listener");
      window.removeEventListener("keydown", handleEscape);
    };
  });

  const recipeCards = recipes.map((recipe, i) => (
    <RecipeCard recipe={recipe} key={i} />
  ));

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
  /*TODOS
    - navbar, margin/padding
  */
  return (
    <div className="max-w-7xl mx-auto text-center mb-12">
      <p className="text-7xl pb-8">Recipe? Recipe!</p>
      <SearchBar search={search} setSearch={setSearch} />
      <div>
        <button
          className="bg-blue-500 px-4 py-2 my-6 text-white hover:bg-blue-600 transition"
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
