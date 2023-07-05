const Recipe = () => {
  return (
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
  );
};

export default Recipe;
