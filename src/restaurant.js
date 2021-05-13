function createRestaurant(handle){
var createdRestaurant = {};
createdRestaurant.name = handle;
createdRestaurant.menus = {};
createdRestaurant.menus.breakfast = [];
createdRestaurant.menus.lunch = [];
createdRestaurant.menus.dinner = [];
return createdRestaurant;
};

function addMenuItem(createdRestaurant, item){
  if (item.type === "lunch" && !createdRestaurant.menus.lunch.includes(item)){
  createdRestaurant.menus.lunch.push(item)
} else if (item.type === "dinner" && !createdRestaurant.menus.dinner.includes(item)){
  createdRestaurant.menus.dinner.push(item)
} else if (item.type === "breakfast" && !createdRestaurant.menus.breakfast.includes(item)){
  createdRestaurant.menus.breakfast.push(item);
}
}

function removeMenuItem(createdRestaurant, item, type){
    if (type === "lunch"){
    createdRestaurant.menus.lunch.pop(item)
  } else if (type === "dinner"){
    createdRestaurant.menus.dinner.pop(item)
  } else if (type === "breakfast"){
    createdRestaurant.menus.breakfast.pop(item)
  }
  return `No one is eating our ${item} - it has been removed from the ${type} menu!`
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
