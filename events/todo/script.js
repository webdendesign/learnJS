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

var list = document.querySelector(".todo-list");
var items = list.querySelectorAll(".todo-list-item");

var addCheckHandler = function(item) {
  var checkbox = item.querySelector(".todo-list-input");
  checkbox.addEventListener("change", function() {
    console.log("Цель достигнута!");
  });
};

for (var i = 0; i < items.length; i++) {
  addCheckHandler(items[i]);
}

//---------------------------------------

var list = document.querySelector(".todo-list");
var items = list.querySelectorAll(".todo-list-item");

var toggleEmptyListMessage = function() {
  // Добавьте проверку сюда
};

var addCheckHandler = function(item) {
  var checkbox = item.querySelector(".todo-list-input");
  checkbox.addEventListener("change", function() {
    item.remove();
  });
};

for (var i = 0; i < items.length; i++) {
  addCheckHandler(items[i]);
}

//--------------------------------------

var list = document.querySelector(".todo-list");
var items = list.children;

var toggleEmptyListMessage = function() {
  console.log(items);
  if (items.length === 0) {
    console.log("Все цели выполнены!");
  }
};

var addCheckHandler = function(item) {
  var checkbox = item.querySelector(".todo-list-input");
  checkbox.addEventListener("change", function() {
    item.remove();
    toggleEmptyListMessage();
  });
};

for (var i = 0; i < items.length; i++) {
  addCheckHandler(items[i]);
}

//--------------------------------------

var list = document.querySelector(".todo-list");
var items = list.children;
var emptyListMessage = document.querySelector(".empty-tasks");

var toggleEmptyListMessage = function() {
  if (items.length === 0) {
    emptyListMessage.classList.remove("hidden");
  }
};

var addCheckHandler = function(item) {
  var checkbox = item.querySelector(".todo-list-input");
  checkbox.addEventListener("change", function() {
    item.remove();
    toggleEmptyListMessage();
  });
};

for (var i = 0; i < items.length; i++) {
  addCheckHandler(items[i]);
}

//--------------------------------------------

var list = document.querySelector(".todo-list");
var items = list.children;
var emptyListMessage = document.querySelector(".empty-tasks");
var newItemForm = document.querySelector(".add-form");

var toggleEmptyListMessage = function() {
  if (items.length === 0) {
    emptyListMessage.classList.remove("hidden");
  }
};

var addCheckHandler = function(item) {
  var checkbox = item.querySelector(".todo-list-input");
  checkbox.addEventListener("change", function() {
    item.remove();
    toggleEmptyListMessage();
  });
};

for (var i = 0; i < items.length; i++) {
  addCheckHandler(items[i]);
}

newItemForm.addEventListener("submit", function() {
  console.log("Форма отправилась");
});

//----------------------------------------------

var list = document.querySelector(".todo-list");
var items = list.children;
var emptyListMessage = document.querySelector(".empty-tasks");
var newItemForm = document.querySelector(".add-form");
var newItemTitle = newItemForm.querySelector(".add-form-input");
// Объявите переменную newItemTitle здесь

var toggleEmptyListMessage = function() {
  if (items.length === 0) {
    emptyListMessage.classList.remove("hidden");
  }
};

var addCheckHandler = function(item) {
  var checkbox = item.querySelector(".todo-list-input");
  checkbox.addEventListener("change", function() {
    item.remove();
    toggleEmptyListMessage();
  });
};

for (var i = 0; i < items.length; i++) {
  addCheckHandler(items[i]);
}

newItemForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  var taskText = newItemTitle.value;
  console.log(taskText);
  // Добавляйте переменную taskText сюда
});

//---------------------------------------

var list = document.querySelector(".todo-list");
var items = list.children;
var emptyListMessage = document.querySelector(".empty-tasks");
var newItemForm = document.querySelector(".add-form");
var newItemTitle = newItemForm.querySelector(".add-form-input");
var taskTemplate = document.querySelector("#task-template").content;
var newItemTemplate = taskTemplate.querySelector(".todo-list-item");

var toggleEmptyListMessage = function() {
  if (items.length === 0) {
    emptyListMessage.classList.remove("hidden");
  }
};

var addCheckHandler = function(item) {
  var checkbox = item.querySelector(".todo-list-input");
  checkbox.addEventListener("change", function() {
    item.remove();
    toggleEmptyListMessage();
  });
};

for (var i = 0; i < items.length; i++) {
  addCheckHandler(items[i]);
}

newItemForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  var taskText = newItemTitle.value;
  // Добавьте переменную task сюда
  var task = newItemTemplate.cloneNode(true);
  console.log(task);
});

//-------------------------------------------

var list = document.querySelector(".todo-list");
var items = list.children;
var emptyListMessage = document.querySelector(".empty-tasks");
var newItemForm = document.querySelector(".add-form");
var newItemTitle = newItemForm.querySelector(".add-form-input");
var taskTemplate = document.querySelector("#task-template").content;
var newItemTemplate = taskTemplate.querySelector(".todo-list-item");

var toggleEmptyListMessage = function() {
  if (items.length === 0) {
    emptyListMessage.classList.remove("hidden");
  }
};

var addCheckHandler = function(item) {
  var checkbox = item.querySelector(".todo-list-input");
  checkbox.addEventListener("change", function() {
    item.remove();
    toggleEmptyListMessage();
  });
};

for (var i = 0; i < items.length; i++) {
  addCheckHandler(items[i]);
}

newItemForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  var taskText = newItemTitle.value;
  var task = newItemTemplate.cloneNode(true);
  // Добавьте сюда переменную taskDescription
  var taskDescription = task.querySelector("span");
  taskDescription.textContent = taskText;
  list.appendChild(task);
});

//--------------------------------------------

var list = document.querySelector(".todo-list");
var items = list.children;
var emptyListMessage = document.querySelector(".empty-tasks");
var newItemForm = document.querySelector(".add-form");
var newItemTitle = newItemForm.querySelector(".add-form-input");
var taskTemplate = document.querySelector("#task-template").content;
var newItemTemplate = taskTemplate.querySelector(".todo-list-item");

var toggleEmptyListMessage = function() {
  if (items.length === 0) {
    emptyListMessage.classList.remove("hidden");
  }
};

var addCheckHandler = function(item) {
  var checkbox = item.querySelector(".todo-list-input");
  checkbox.addEventListener("change", function() {
    item.remove();
    toggleEmptyListMessage();
  });
};

for (var i = 0; i < items.length; i++) {
  addCheckHandler(items[i]);
}

newItemForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  var taskText = newItemTitle.value;
  var task = newItemTemplate.cloneNode(true);
  var taskDescription = task.querySelector("span");
  taskDescription.textContent = taskText;

  // Добавьте вызов функции addCheckHandler сюда
  addCheckHandler(task);
  list.appendChild(task);
});

//-------------------------------------------------------

var list = document.querySelector(".todo-list");
var items = list.children;
var emptyListMessage = document.querySelector(".empty-tasks");
var newItemForm = document.querySelector(".add-form");
var newItemTitle = newItemForm.querySelector(".add-form-input");
var taskTemplate = document.querySelector("#task-template").content;
var newItemTemplate = taskTemplate.querySelector(".todo-list-item");

var toggleEmptyListMessage = function() {
  if (items.length === 0) {
    emptyListMessage.classList.remove("hidden");
  } else {
    emptyListMessage.classList.add("hidden");
  }
};

var addCheckHandler = function(item) {
  var checkbox = item.querySelector(".todo-list-input");
  checkbox.addEventListener("change", function() {
    item.remove();
    toggleEmptyListMessage();
  });
};

for (var i = 0; i < items.length; i++) {
  addCheckHandler(items[i]);
}

newItemForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  var taskText = newItemTitle.value;
  var task = newItemTemplate.cloneNode(true);
  var taskDescription = task.querySelector("span");
  taskDescription.textContent = taskText;
  addCheckHandler(task);

  list.appendChild(task);
  toggleEmptyListMessage();
  newItemTitle.value = "";
});

//----------------------------------------------
