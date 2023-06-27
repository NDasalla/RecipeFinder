import { useState } from "react";

const initialRecipeFormState = {
  name: "",
  country: "",
  imageUrl: "",
  ingredients: {},
};

const AddRecipeForm = ({ onAddRecipe }) => {
  const [recipeFormState, setRecipeFormState] = useState(
    initialRecipeFormState
  );

  const generateField = () => {
    return (
      <fieldset className="flex flex-col">
        <label htmlFor="title">Job Title</label>
        <input
          onChange={handleInputChange}
          value={jobFormState.title}
          type="text"
          name="title"
          id="title"
          className="bg-white border-4 focus:outline-none p-2"
        />
      </fieldset>
    );
  };

  const handleInputChange = (e) => {
    setJobFormState((jobFormState) => {
      return {
        ...jobFormState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // modal should close
    // form should clear
    setRecipeFormState(initialRecipeFormState);
    // new job should be added to the DOM
    onAddRecipe({
      ...recipeFormState,
    });
  };

  return (
    <form onSubmit={handleFormSubmit} className="">
      <h1>Placeholder</h1>
    </form>
  );
};

export default AddRecipeForm;
