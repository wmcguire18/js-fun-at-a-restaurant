function nameMenuItem(name) {
return menuItemName = `Delicious ${name}`;
};

function createMenuItem(menuItemName, price, type) {
return menuItem = {
  name: menuItemName,
  price: price,
  type: type,
}
};

function addIngredients(item, ingredients) {
  if (!ingredients.includes(item))
    ingredients.push(item);
  return ingredients;
};

function formatPrice(price) {
return `$${price}`;
};

function decreasePrice(price) {
var discount = price/10
return price - discount;
};

function createRecipe(title, ingredients, type) {
return recipe = {
  title: title,
  ingredients: ingredients,
  type: type,
}
};


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
