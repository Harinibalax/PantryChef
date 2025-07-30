export function filterIngredients(pantry, recipe) {
  return recipe.ingredients.filter(i => pantry.includes(i));
}
