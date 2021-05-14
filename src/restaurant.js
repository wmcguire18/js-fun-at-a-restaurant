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


//   if (type) {
//     for (var i = 0; i < createdRestaurant.menus[type].length; i++) {
//       if (item == createdRestaurant.menus[type][i].name) {
//         createdRestaurant.menus[type].splice(item, 1)
//       }
//     }
//     return `No one is eating our ${item} - it has been removed from the ${type} menu!`
//   } else if (!createdRestaurant.menus[type][i].includes(item)) {
//     return `Sorry, we don't sell ${item}, try adding a new recipe!`
//   }
// }

function removeMenuItem(createdRestaurant, item, type) {
console.log(createdRestaurant.menus[type])
  if (createdRestaurant.menus[type] !== undefined){
    for (var i = 0; i < createdRestaurant.menus[type].length; i++){
      createdRestaurant.menus[type].splice(i, 1)
      return `No one is eating our ${item} - it has been removed from the ${type} menu!`
    }
  }
  if (!createdRestaurant.menus[type].includes(item)){
      return `Sorry, we don't sell ${item}, try adding a new recipe!`
    }
  }

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
