import { recipes } from "../utils/recipes";

const Recipes = () => {
  /*TODOS
    - Don't Repeat Yourself (modify to have less repetitive code)
  */
  return (
    <div className="mt-12 mx-12 grid lg:grid-cols-3 gap-6">
      <div className="shadow-[0_0px_5px_5px_rgba(0,0,0,0.1)] max-w-xl mx-auto">
        <p className="text-3xl font-bold mt-4">
          {recipes.spaghettiBolognese.name}
        </p>
        <p className="text-xl italic">{recipes.spaghettiBolognese.country}</p>
        <img
          className="mt-4 object-cover h-48 w-96"
          src={recipes.spaghettiBolognese.imageUrl}
          alt="chicken parmesan"
        />
        <div className="my-4">
          <ul>
            {Object.entries(recipes.spaghettiBolognese.ingredients).map(
              ([key, value]) => {
                const temp =
                  key.charAt(0).toUpperCase() +
                  key.substring(1).replace(/([a-z])([A-Z])/, "$1 $2");
                return (
                  <li key={key}>
                    {temp}: {value}
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>
      <div className="shadow-[0_0px_5px_5px_rgba(0,0,0,0.1)] max-w-xl mx-auto">
        <p className="text-3xl font-bold mt-4">
          {recipes.chickenTikkaMasala.name}
        </p>
        <p className="text-xl italic">{recipes.chickenTikkaMasala.country}</p>
        <img
          className="mt-4 object-cover h-48 w-96"
          src={recipes.chickenTikkaMasala.imageUrl}
          alt="chicken parmesan"
        />
        <div className="my-4">
          <ul>
            {Object.entries(recipes.chickenTikkaMasala.ingredients).map(
              ([key, value]) => {
                const temp =
                  key.charAt(0).toUpperCase() +
                  key.substring(1).replace(/([a-z])([A-Z])/, "$1 $2");
                return (
                  <li key={key}>
                    {temp}: {value}
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>
      <div className="shadow-[0_0px_5px_5px_rgba(0,0,0,0.1)] max-w-xl mx-auto">
        <p className="text-3xl font-bold mt-4">{recipes.sushiRolls.name}</p>
        <p className="text-xl italic">{recipes.sushiRolls.country}</p>
        <img
          className="mt-4 object-cover h-48 w-96"
          src={recipes.sushiRolls.imageUrl}
          alt="chicken parmesan"
        />
        <div className="my-4">
          <ul>
            {Object.entries(recipes.sushiRolls.ingredients).map(
              ([key, value]) => {
                const temp =
                  key.charAt(0).toUpperCase() +
                  key.substring(1).replace(/([a-z])([A-Z])/, "$1 $2");
                return (
                  <li key={key}>
                    {temp}: {value}
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>
      <div className="shadow-[0_0px_5px_5px_rgba(0,0,0,0.1)] max-w-xl mx-auto">
        <p className="text-3xl font-bold mt-4">
          {recipes.chickenParmesan.name}
        </p>
        <p className="text-xl italic">{recipes.chickenParmesan.country}</p>
        <img
          className="mt-4 object-cover h-48 w-96"
          src={recipes.chickenParmesan.imageUrl}
          alt="chicken parmesan"
        />
        <div className="my-4">
          <ul>
            {Object.entries(recipes.chickenParmesan.ingredients).map(
              ([key, value]) => {
                const temp =
                  key.charAt(0).toUpperCase() +
                  key.substring(1).replace(/([a-z])([A-Z])/, "$1 $2");
                return (
                  <li key={key}>
                    {temp}: {value}
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>
      <div className="shadow-[0_0px_5px_5px_rgba(0,0,0,0.1)] max-w-xl mx-auto">
        <p className="text-3xl font-bold mt-4">{recipes.padThai.name}</p>
        <p className="text-xl italic">{recipes.padThai.country}</p>
        <img
          className="mt-4 object-cover h-48 w-96"
          src={recipes.padThai.imageUrl}
          alt="chicken parmesan"
        />
        <div className="my-4">
          <ul>
            {Object.entries(recipes.padThai.ingredients).map(([key, value]) => {
              const temp =
                key.charAt(0).toUpperCase() +
                key.substring(1).replace(/([a-z])([A-Z])/, "$1 $2");
              return (
                <li key={key}>
                  {temp}: {value}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
