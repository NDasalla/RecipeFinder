import { PropTypes } from "prop-types";
import { useState } from "react";
import { Form, redirect } from "react-router-dom";

const initialRecipeFormState = {
  name: "Hamburger",
  country: "Hamburg",
  imageUrl:
    "https://c4.wallpaperflare.com/wallpaper/143/223/715/food-burgers-hamburgers-fast-food-wallpaper-preview.jpg",
};

export async function action({ request, params }) {
  let formData = await request.formData();
  let recipeData = Object.fromEntries(formData);
  const response = await fetch("http://localhost:3000/recipes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipeData),
  });
  return redirect("/");
}

const AddRecipeForm = () => {
  return (
    <Form method="post" className="">
      {/* name, country, imageUrl */}
      {Object.keys(initialRecipeFormState).map((key, i) => {
        let type = "text";
        return (
          <fieldset
            key={i}
            className="mb-5 w-[390px] lg:w-[500px] mx-auto px-[46px]"
          >
            <label className="text-xl capitalize font-bold">{key}:</label>
            {/* what I had originally for value: value={key.value} */}
            <input
              name={key}
              type={type}
              // value={initialRecipeFormState[key]}
              className="text-black bg-white border-4 focus:outline-none p-2 mt-1 w-full"
            />
          </fieldset>
        );
      })}
      <input
        className="bg-blue-500 hover:bg-blue-600 text-white transition mt-4 py-2 px-2 cursor-pointer "
        type="submit"
      ></input>
    </Form>
  );
};

AddRecipeForm.propTypes = {
  onAddRecipe: PropTypes.func,
};

export default AddRecipeForm;
