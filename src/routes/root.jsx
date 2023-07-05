import { useEffect, useState } from "react";
import { Outlet, Link, useLoaderData } from "react-router-dom";
import { fetchRecipes } from "../utils/recipes";
import AddRecipeForm from "../components/AddRecipeForm";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import Modal from "../ui/Modal";

export async function loader() {
  return fetchRecipes();
}

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto text-center mb-12">
      <p className="text-7xl my-10">
        <Link to="/">Recipe? Recipe!</Link>
      </p>
      {/* <SearchBar search={search} setSearch={setSearch} /> */}
      {/* <div>
        <button
          className="bg-blue-500 px-4 py-2 my-6 text-white hover:bg-blue-600 transition"
          onClick={showModal}
        >
          + Add New Recipe
        </button>
      </div> */}
      {/* <div className="mt-12 mx-12 grid lg:grid-cols-3 gap-6">{recipeCards}</div> */}
      {/* <Modal isVisible={isModalVisible} hideModal={hideModal}>
        <AddRecipeForm onAddRecipe={onAddRecipe} />
      </Modal> */}
      <Outlet />
    </div>
  );
};

export default Root;
