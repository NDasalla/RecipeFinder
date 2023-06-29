import { PropTypes } from "prop-types";
import { useState } from "react";

const initialRecipeFormState = {
  name: "Hamburger",
  country: "Hamburg",
  imageUrl:
    "https://c4.wallpaperflare.com/wallpaper/143/223/715/food-burgers-hamburgers-fast-food-wallpaper-preview.jpg",
  ingredients: { ingredients: "I will be updating this soon!" },
};

const AddRecipeForm = ({ onAddRecipe }) => {
  const [recipeFormState, setRecipeFormState] = useState(
    initialRecipeFormState
  );

  const handleInputChange = (e) => {
    setRecipeFormState((recipeFormState) => {
      return {
        ...recipeFormState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // modal should close
    // form should clear
    setRecipeFormState(initialRecipeFormState);
    // new job should be added to the DOM
    const preparedRecipe = { ...recipeFormState };
    // send request to save job to db and get response
    const response = await fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preparedRecipe),
    });
    console.log("response", response);
    const savedRecipe = await response.json();
    console.log("savedRecipe", savedRecipe);
    onAddRecipe(savedRecipe);
  };

  return (
    <form onSubmit={handleFormSubmit} className="">
      {/* name, country, imageUrl */}
      {Object.keys(initialRecipeFormState).map((key, i) => {
        let type = "text";
        if (key === "name") {
          type = "name";
        }

        //returning nothing if key === ingredients
        //because we want to add ingredients after
        if (key === "ingredients") return;
        return (
          <fieldset
            key={i}
            className="mb-5 w-[390px] lg:w-[500px] mx-auto px-[46px]"
          >
            <label className="text-xl capitalize font-bold text-white">
              {key}:
            </label>
            {/* what I had originally for value: value={key.value} */}
            <input
              name={key}
              onChange={handleInputChange}
              value={recipeFormState[key]}
              type={type}
              className="text-black bg-white border-4 focus:outline-none p-2 mt-1 w-full"
            />
          </fieldset>
        );
      })}
      <input
        className="bg-blue-500 hover:bg-blue-600 text-white transition mt-4 py-2 px-2 cursor-pointer "
        type="submit"
      ></input>
    </form>
  );
};

AddRecipeForm.propTypes = {
  onAddRecipe: PropTypes.func,
};

export default AddRecipeForm;
