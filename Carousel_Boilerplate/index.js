var dot1 = document.querySelector("#dot1");
var dot2 = document.querySelector("#dot2");
var dot3 = document.querySelector("#dot3");
var dot4 = document.querySelector("#dot4");
var dot5 = document.querySelector("#dot5");

var img = document.querySelector("#vanilla");
var nowNumber = document.querySelector(".nowNumber");

dot1.addEventListener("click", function changeImage1() {
  img.setAttribute("src", "images/image-1.png");
  img.classList.remove("image1", "image2", "image3", "image4", "image5");
  img.classList.add("image1");
  nowNumber.textContent = "Number : 1";
});

dot2.addEventListener("click", function changeImage2() {
  img.setAttribute("src", "images/image-2.png");
  img.classList.remove("image1", "image2", "image3", "image4", "image5");
  img.classList.add("image2");
  nowNumber.textContent = "Number : 2";
});

dot3.addEventListener("click", function changeImage3() {
  img.setAttribute("src", "images/image-3.png");
  img.classList.remove("image1", "image2", "image3", "image4", "image5");
  img.classList.add("image3");
  nowNumber.textContent = "Number : 3";
});

dot4.addEventListener("click", function changeImage4() {
  img.setAttribute("src", "images/image-4.png");
  img.classList.remove("image1", "image2", "image3", "image4", "image5");
  img.classList.add("image4");
  nowNumber.textContent = "Number : 4";
});

dot5.addEventListener("click", function changeImage5() {
  img.setAttribute("src", "images/image-5.png");
  img.classList.remove("image1", "image2", "image3", "image4", "image5");
  img.classList.add("image5");
  nowNumber.textContent = "Number : 5";
});

var left = document.querySelector("#left");
var right = document.querySelector("#right");

left.addEventListener("click", function changeImageLeft() {
  if (img.className === "image1") {
    img.setAttribute("src", "images/image-5.png");
    img.classList.remove("image1", "image2", "image3", "image4", "image5");
    img.classList.add("image5");
    nowNumber.textContent = "Number : 5";
  } else if (img.className === "image2") {
    img.setAttribute("src", "images/image-1.png");
    img.classList.remove("image1", "image2", "image3", "image4", "image5");
    img.classList.add("image1");
    nowNumber.textContent = "Number : 1";
  } else if (img.className === "image3") {
    img.setAttribute("src", "images/image-2.png");
    img.classList.remove("image1", "image2", "image3", "image4", "image5");
    img.classList.add("image2");
    nowNumber.textContent = "Number : 2";
  } else if (img.className === "image4") {
    img.setAttribute("src", "images/image-3.png");
    img.classList.remove("image1", "image2", "image3", "image4", "image5");
    img.classList.add("image3");
    nowNumber.textContent = "Number : 3";
  } else if (img.className === "image5") {
    img.setAttribute("src", "images/image-4.png");
    img.classList.remove("image1", "image2", "image3", "image4", "image5");
    img.classList.add("image4");
    nowNumber.textContent = "Number : 4";
  }
});

right.addEventListener("click", function changeImageRight() {
  if (img.className === "image1") {
    img.setAttribute("src", "images/image-2.png");
    img.classList.remove("image1", "image2", "image3", "image4", "image5");
    img.classList.add("image2");
    nowNumber.textContent = "Number : 2";
  } else if (img.className === "image2") {
    img.setAttribute("src", "images/image-3.png");
    img.classList.remove("image1", "image2", "image3", "image4", "image5");
    img.classList.add("image3");
    nowNumber.textContent = "Number : 3";
  } else if (img.className === "image3") {
    img.setAttribute("src", "images/image-4.png");
    img.classList.remove("image1", "image2", "image3", "image4", "image5");
    img.classList.add("image4");
    nowNumber.textContent = "Number : 4";
  } else if (img.className === "image4") {
    img.setAttribute("src", "images/image-5.png");
    img.classList.remove("image1", "image2", "image3", "image4", "image5");
    img.classList.add("image5");
    nowNumber.textContent = "Number : 5";
  } else if (img.className === "image5") {
    img.setAttribute("src", "images/image-1.png");
    img.classList.remove("image1", "image2", "image3", "image4", "image5");
    img.classList.add("image1");
    nowNumber.textContent = "Number : 1";
  }
});
