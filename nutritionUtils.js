// Example utility to calculate total nutrition from an ingredient list
function calculateNutrition(ingredients) {
  let totalCalories = 0;
  let totalProtein = 0;

  ingredients.forEach(item => {
    if (item === "egg") {
      totalCalories += 70;
      totalProtein += 6;
    } else if (item === "spinach") {
      totalCalories += 20;
      totalProtein += 2;
    } else if (item === "rice") {
      totalCalories += 200;
      totalProtein += 4;
    }
    // Add more ingredients as needed
  });

  return {
    calories: totalCalories,
    protein: totalProtein
  };
}

// Example use
const sample = ["egg", "spinach", "rice"];
console.log(calculateNutrition(sample));

