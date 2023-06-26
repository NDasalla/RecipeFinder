import "./App.css";
import Recipes from "./components/Recipes";

const App = () => {
  /*TODOS
    - navbar, margin/padding
  */
  return (
    <div className="max-w-7xl mx-auto text-center">
      <p className="text-7xl">Recipe? Recipe!</p>
      <Recipes />
    </div>
  );
};

export default App;
