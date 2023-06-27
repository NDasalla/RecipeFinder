import { PropTypes } from "prop-types";

const RecipeCard = ({ recipe }) => {
  const { name, country, imageUrl, ingredients } = recipe;

  /*TODOS
    - Don't Repeat Yourself (modify to have less repetitive code)
    name
    country
    imageUrl
    ingredients
  */
  return (
    <div className="shadow-[0_0px_5px_5px_rgba(0,0,0,0.1)] max-w-xl mx-auto">
      <p className="text-3xl font-bold mt-4">{name}</p>
      <p className="text-xl italic">{country}</p>
      <img
        className="mt-4 object-cover h-48 w-96"
        src={imageUrl}
        alt="chicken parmesan"
      />
      <div className="my-4">
        <ul>
          {Object.entries(ingredients).map(([key, value]) => {
            const temp =
              //replacing first char in string to uppercase
              key.charAt(0).toUpperCase() +
              //adding space between a lowercase char and uppercase char
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
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string,
    country: PropTypes.string,
    imageUrl: PropTypes.string,
    ingredients: PropTypes.shape,
  }),
};

export default RecipeCard;
