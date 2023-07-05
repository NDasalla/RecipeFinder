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
import AddRecipeForm from "./components/AddRecipeForm";
import Recipe from "./components/Recipe";
import RecipeList, {
  loader as recipeListLoader,
} from "./components/RecipeList";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     loader: rootLoader,
//     children: [
//       {
//         path: "",
//         element: <RecipeCard />,

//       },
//       {
//         path: "recipes/addRecipe",
//         element: <AddRecipeForm />,

//       },
//       {
//         path: "recipes/:recipeId",
//         element: <Recipe />,
//       }
//     ]
//     // action: rootAction,
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" loader={rootLoader} element={<Root />}>
      <Route index loader={recipeListLoader} element={<RecipeList />} />
      <Route path="recipes/addRecipe" element={<AddRecipeForm />} />
      <Route path="recipes/:recipeId" element={<Recipe />} />
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
