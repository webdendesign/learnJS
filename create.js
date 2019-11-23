// Б20. Все файлы JS представляют собой отдельные модули в IIFE
// Экспорт значений производится через глобальную область видимости.
//  Код вне модуля запрещён. Вне модуля могут располагаться комментарии и утилитные инструкции,
//   такие как 'use strict';

// Пример правильного модуля:

"use strict";

(function() {
  window.load = function(url, onLoad) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", onLoad);

    xhr.responseType = "json";
    xhr.open("GET", url);
    xhr.send();
  };
})();

// Б21. Все значения, используемые только внутри модулей ограничены по видимости
// Из модуля ничего не должно попадать случайными образом в глобальную область видимости

// Неправильно:

("use strict");

var ENTER_KEYCODE = 13;

(function() {
  var userIcon = document.querySelector(".user");

  userIcon.addEventListener("keydown", function(evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      popup.classList.remove("hidden");
    }
  });
})();

// Правильно:

("use strict");

(function() {
  var ENTER_KEYCODE = 13;

  var userIcon = document.querySelector(".user");

  userIcon.addEventListener("keydown", function(evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      popup.classList.remove("hidden");
    }
  });
})();

// Б22. Код является кроссбраузерным и не вызывает ошибок в разных браузерах и разных операционных системах
// При проверке этого критерия, необходимо удостовериться в правильной работе и отсутствии сообщений об ошибках в выполняемых скриптах только в последних версиях браузеров: Chrome, Firefox, Safari, Microsoft Edge.

// Б23. Нельзя пользоваться глобальной переменной event
// Приводит к неосознанному коду:

var elem = document.querySelector(".test");

var onElemClick = function() {
  event.target.innerText = "you really need event";
};

elem.addEventListener("click", oneElemClick);

// Б24. Своевременный выход из цикла: цикл не работает дольше чем нужно
// Неправильно:

apartments.forEach(function(it, index) {
  if (index < 3) {
    render(it);
  }
});

// Правильно:

for (var i = 0; i < Math.min(apartments.length, 3); i++) {
  render(apartments[i]);
}
