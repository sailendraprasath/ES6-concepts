//Ternary Operator

let showRecipeName = true;

function getRecipeOneName(recipeName) {
  return recipeName;
}
function getRecipetwoName(recipeName) {
  return recipeName;
}

if (showRecipeName) {
  console.log(getRecipeOneName("Dosaa"));
} else {
  console.log(getRecipetwoName("Itly"));
}

showRecipeName
  ? console.log(getRecipeOneName("Dosaa"))
  : console.log(getRecipetwoName("Itly"));
