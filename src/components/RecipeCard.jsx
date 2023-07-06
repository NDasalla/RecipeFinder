const RecipeCard = ({ recipe }) => {
  // console.log(recipe);
  const { name, country, imageUrl } = recipe;
  return (
    <>
      <p className="text-3xl font-bold mt-4">{name}</p>
      <p className="text-xl italic">{country}</p>
      <img
        className="mt-4 object-cover h-48 w-96 rounded-lg my-auto mx-auto"
        src={imageUrl}
        alt={name}
      />
    </>
  );
};

// RecipeCard.propTypes = {
//   recipe: PropTypes.shape({
//     name: PropTypes.string,
//     country: PropTypes.string,
//     imageUrl: PropTypes.string,
//     ingredients: PropTypes.shape,
//   }),
// };

export default RecipeCard;
