function takeOrder(order, orderType){
  if (orderType.length < 3){
    orderType.push(order);
  }
};

function refundOrder(orderNumber, orderType) {
  for (i = 0; i < orderType.length; i++) {
      if (orderType[i].orderNumber === orderNumber) {
        orderType.splice(i, 1,);
      }
  }
};

function listItems(orderType) {
  var orderList = []
  for (i = 0; i < orderType.length; i++) {
    orderList.push(orderType[i].item);
  }
  var finalOrderList = orderList.join(", ");
  return finalOrderList;
};

function searchOrder(orderType, item) {
  var orderList = [];
for (i = 0; i < orderType.length; i++){
  orderList.push(orderType[i].item);
}
if (orderList.includes(item)) {
  return true;
} else {
  return false;
}
}



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
