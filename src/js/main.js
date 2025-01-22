import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebP();

jQuery(function ($) {
  $(".header__burger").on("click", function () {
    $(".header__mobile").toggleClass("header__mobile--active");
    $(".back").toggleClass("back__dark--active");
  });

  $(".header__mobile-close").on("click", function () {
    $(".header__mobile").toggleClass("header__mobile--active");
    $(".back").toggleClass("back__dark--active");
  });

  $(".questions__item-title").on("click", function () {
    if (
      $(this).parent(".questions__item").hasClass("questions__item--active")
    ) {
      $(this).parent(".questions__item").removeClass("questions__item--active");
      $(this)
        .parent(".questions__item")
        .children(".questions__item-text")
        .slideUp();
    } else {
      $(this).parent(".questions__item").addClass("questions__item--active");
      $(this)
        .parent(".questions__item")
        .children(".questions__item-text")
        .slideDown();
    }
  });

  let callback = () => {
    if (
      $(window).scrollTop() > 0
    ) {
      $(".header__burger").addClass("header__burger--active");
      const containerWidth = $(".wrapper > .container").width();
      const screenWidth = $(".wrapper").width();
      $(".header__burger--active").css(
        "right",
        `${(screenWidth - containerWidth) / 2 + 30}px`
      );
    } else {
      $(".header__burger").removeClass("header__burger--active");
    }
  };
  $(window).on("scroll", callback);
});
