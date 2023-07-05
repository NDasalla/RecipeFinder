import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Root, {
  // action as rootAction,
  loader as rootLoader,
} from "./routes/root";
import AddRecipeForm, {
  action as addRecipeFormAction,
} from "./components/AddRecipeForm";
import Recipe, { loader as recipeLoader } from "./components/Recipe";
import RecipeList, {
  loader as recipeListLoader,
} from "./components/RecipeList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" loader={rootLoader} element={<Root />}>
      <Route index loader={recipeListLoader} element={<RecipeList />} />
      <Route
        path="recipes/addRecipe"
        action={addRecipeFormAction}
        element={<AddRecipeForm />}
      />
      <Route
        path="recipes/:recipeId"
        loader={recipeLoader}
        element={<Recipe />}
      />
    </Route>
  )
);

const App = () => {
  /*TODOS
    - navbar, margin/padding
  */
  return <RouterProvider router={router} />;
};

export default App;
