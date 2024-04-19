jQuery(document).ready(function ($) {
  // Initialize Row Slider
  $(".partners-slider").slick({
    dots: false,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // speed:'',\
  });

  $(".text-slick-slider-container").slick({
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    fadeSpeed: 4000,
  });

  var x = 0; // incrementor
  requestAnimationFrame(move);
  var scrollBG = document.querySelectorAll(".banner-slider");
  function move() {
    x++;
    for (i = 0; i < scrollBG.length; i++) {
      scrollBG[i].style.backgroundPosition = x + "px 0px";
    }
    requestAnimationFrame(move);
  }

  //  Header Modal Starts Here
  var modal = document.getElementById("myModal");
  var btn = document.querySelector("header nav ul li:last-child a");
  var span = document.getElementsByClassName("close")[0];
  btn.onclick = function () {
    modal.style.display = "block";
    document.body.classList.add("modal-open"); // Add class to body
    var a = document.querySelector(".form-body");
    if (a.style.display === "none") {
      a.style.display = "block";
    } else {
      a.style.display = "none";
    }
    $("header nav ul li a").addClass("disabled");
  };
  $(".contact-us").click(function (event) {
    $("header nav ul li a").addClass("disabled");
  });
  $(".close").click(function (event) {
    $(".form-body").show();
    $("header nav ul li:last-child a").removeClass("disabled");
  });

  span.onclick = function () {
    modal.style.display = "none";
    document.body.classList.remove("modal-open"); // Remove class from body
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.classList.remove("modal-open"); // Remove class from body
    }
  };

  //  Header Modal Ends Here

  // CTA Modal JS Starts Here

  var modal = document.getElementById("myModal");
  var btn = document.querySelector(".contact");
  console.log("btn", btn);
  var span = document.getElementsByClassName("close")[0];
  btn.onclick = function () {
    modal.style.display = "block";
    document.body.classList.add("modal-open"); // Add class to body
  };
  span.onclick = function () {
    modal.style.display = "none";
    document.body.classList.remove("modal-open"); // Remove class from body
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.classList.remove("modal-open"); // Remove class from body
      $(".banner-slider-form").show();
      $("header nav ul li:last-child a").removeClass("disabled");
    }
  };

  // CTA Modal JS Ends Here
});
