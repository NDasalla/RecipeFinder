import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Root, {
  // action as rootAction,
  loader as rootLoader,
} from "./routes/root";
// import Recipes from "./components/Recipes";
// import recipeData from "./utils/recipeData";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      loader: rootLoader,
      // action: rootAction,
    },
  ]);
  /*TODOS
    - navbar, margin/padding
  */
  return <RouterProvider router={router} />;
};

export default App;
