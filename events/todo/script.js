var list = document.querySelector(".todo-list");
var items = list.querySelectorAll(".todo-list-item");

var addCheckHandler = function(item) {
  // Добавляйте код сюда
};

for (var i = 0; i < items.length; i++) {
  console.log(items[i]);
}

//--------------------------------------------

var list = document.querySelector(".todo-list");
var items = list.querySelectorAll(".todo-list-item");

var addCheckHandler = function(item) {
  // Добавляйте код сюда
  var checkbox = item.querySelector(".todo-list-input");
  checkbox.addEventListener("change", function() {
    console.log("Цель достигнута!");
  });
};

for (var i = 0; i < items.length; i++) {
  console.log(items[i]);
}

//-------------------------------
