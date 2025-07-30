// Simple mockup logic to generate a basic recipe from a list of ingredients
function generateRecipe(ingredients) {
  if (ingredients.length === 0) {
    return "Please enter some ingredients to get started.";
  }

  const base = ingredients[0];
  const others = ingredients.slice(1).join(", ");
  return `You can make a dish starting with ${base}, and enhance it with ${others}.`;
}

// Example usage
const ingredients = ["pasta", "tomato", "cheese"];
console.log(generateRecipe(ingredients));

