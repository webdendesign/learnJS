var photos = [
  "gallery/laptop-large.jpg",
  "gallery/microphone-large.jpg",
  "gallery/keyboard-large.jpg",
  "gallery/signboard-large.jpg",
  "gallery/tree-large.jpg"
];

var thumbnails = document.querySelectorAll(".gallery__photo-preview");

var fullPhoto = document.querySelector(".full-photo");
//-----------------------------------------------------------

var photos = [
  "gallery/laptop-large.jpg",
  "gallery/microphone-large.jpg",
  "gallery/keyboard-large.jpg",
  "gallery/signboard-large.jpg",
  "gallery/tree-large.jpg"
];

var thumbnails = document.querySelectorAll(".gallery__photo-preview");
var fullPhoto = document.querySelector(".full-photo");

for (var i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("click", function() {
    console.log("Клик по картинке");
  });
}

//---------------------------------------------------------

var photos = [
  "gallery/laptop-large.jpg",
  "gallery/microphone-large.jpg",
  "gallery/keyboard-large.jpg",
  "gallery/signboard-large.jpg",
  "gallery/tree-large.jpg"
];

var thumbnails = document.querySelectorAll(".gallery__photo-preview");
var fullPhoto = document.querySelector(".full-photo");

var addThumbnailClickHandler = function(thumbnail, photo) {
  thumbnail.addEventListener("click", function() {
    fullPhoto.src = photo;
  });
};

for (var i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i], photos[i]);
}
