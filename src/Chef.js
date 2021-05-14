class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant
  }

  greetCustomer(name, isMorning) {
  if (isMorning === true) {
    return `Good morning, ${name}!`
  } else {
      return `Hello, ${name}!`
  }
}

  checkForFood(foodItem){
    console.log(foodItem.name);
if (this.restaurant.menus.breakfast.includes(foodItem)){
  return `Yes, we're serving ${foodItem.name} today!`
} else {
  return `Sorry, we aren't serving ${foodItem.name} today.`
}
}
};

module.exports = Chef;
