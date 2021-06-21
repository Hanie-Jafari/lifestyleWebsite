$(function () {
  //pre loader
  $(".loader").fadeOut();
  $(".elevator").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 1200);
  });
  $(window).scroll(function () {
    if (
      $(window).scrollTop() > $("#header").height() ||
      $(window).scrollTop() > $(".h-elevator").height()
    ) {
      $(".elevator").fadeIn();
      $(".elevator").css("display", "flex");
    } else {
      $(".elevator").fadeOut();
      $(".elevator").css("display", "none");
    }
  });
  //fixed menu
  $(window).scroll(function () {
    if (
      $(this).scrollTop() > $(".nav > .navbar").height() &&
      $(window).width() >= 769
    ) {
      $(".nav > .navbar").css("position", "fixed");
      $(".nav > .navbar").css("top", "0%");
      $(".nav > .navbar").css("left", "0");
    }
  });
  // show & hide the search box

  $(".nav > .navbar > li:nth-child(4)").on("click", function (e) {
    e.preventDefault();
    var clicks = $(this).data("clicks");
    if (clicks) {
      $(".search-box").css("display", "none");
      $(".nav > .navbar > li:nth-child(4)").css({
        "background-color": "var(--primary-color)",
        border: "1px solid var(--primary-color)",
        "border-right": "1px solid rgba(245, 245, 245, 0.493)",
      });
    } else {
      $(".search-box").css("display", "flex");
    }
    $(this).data("clicks", !clicks);
  });

  $(".icon-search-style").click(function (e) {
    e.preventDefault();
    var clicks = $(this).data("clicks");
    if (clicks) {
      $(".search-box").css("display", "none");
    } else {
      $(".search-box").css("display", "flex");
    }
    $(this).data("clicks", !clicks);
  });

  //opening the search page after user has pressed enter!
  var input1 = document.querySelector(".search-box input");
  $(input1).keyup(function (e) {
    localStorage.setItem("inputValue", input1.value);
    if (e.which == 13) {
      window.open("search.html");
      $(input1).val("");
    }
  });
  //put the value of an input in  other input
  var input2 = document.querySelector(".search-box-2 input");
  var inputVal = localStorage.getItem("inputValue");
  $(input2).val(inputVal);
  //put the value of an input in span
  var searchResult = document.querySelector(".search-result h4 span");
  $(searchResult).text(inputVal);
  //closing the search box after cicking on body
  let winSize = $(window).width();
  if (winSize <= 768) {
    window.addEventListener("click", function (e) {
      if (
        !document.getElementById("search-3").contains(e.target) &&
        !document.getElementById("search-box").contains(e.target)
      ) {
        $(".search-box").css("display", "none");
      }
    });
  } else if (winSize >= 769) {
    window.addEventListener("click", function (e) {
      if (
        !document.getElementById("search").contains(e.target) &&
        !document.getElementById("search-box").contains(e.target)
      ) {
        $(".search-box").css("display", "none");
      }
    });
  }

  //open burger menu and closing the burger menu after clicking outside
  $(".burger").click(function () {
    $(".navbar").css("right", "0");
    $(".burger").hide();
    $(".cross").show(function () {
      $(".dimScreen").css("display", "block");
      window.addEventListener("click", function (e) {
        if (
          !document.getElementById("burger").contains(e.target) &&
          !document.getElementById("navbar").contains(e.target) &&
          !document.getElementById("cross").contains(e.target)
        ) {
          $(".navbar").css("right", "-100%");
          $(".cross").hide();
          $(".burger").show();
          $(".dimScreen").css("display", "none");
        }
      });
    });
  });
  $(".cross").click(function () {
    $(".navbar").css("right", "-100%");
    $(".cross").hide();
    $(".burger").show();
    $(".dimScreen").css("display", "none");
  });

  //subscribe form
  var formInput = document.querySelector(".subscribe-form input");
  $(".subscribe-form .btn").click(function (event) {
    event.preventDefault();
    if (formInput.value.trim() == "") {
      $(formInput).css("border", "1px solid red");
    } else if (
      formInput.value.length >= 7 &&
      formInput.value.includes("@") &&
      formInput.value.includes("gmail") &&
      formInput.value.includes("com")
    ) {
      $(".right-content .btn").text("Sending...");
      setTimeout(function () {
        $(".right-content .subscribe-form").hide();
        $(".right-content .form-comment").show();
      }, 1500);
    }
  });
  formInput.addEventListener("keyup", function () {
    if (
      formInput.value.length >= 7 &&
      formInput.value.includes("@") &&
      formInput.value.includes("com") &&
      formInput.value.includes("gmail")
    ) {
      $(formInput).css("border", "1px solid green");
    }
  });
  formInput.addEventListener("keyup", function () {
    if (
      formInput.value.length < 7 ||
      formInput.value.includes("@") != true ||
      formInput.value.includes("com") != true ||
      formInput.value.includes("gmail") != true
    ) {
      $(formInput).css("border", "1px solid red");
    }
  });
});
