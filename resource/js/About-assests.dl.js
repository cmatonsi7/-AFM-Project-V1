jQuery(
  (function ($) {
    $(".service-times .button").on("click", function (event) {
      event.preventDefault();
    });
    $(".menu-item-has-children > a").on("click", function (event) {
      event.preventDefault();
      $(this).siblings(".sub-menu").slideToggle();
    });
    $('a[href^="#top"]').on("click", function (event) {
      event.preventDefault();
      var target_offset = $(this.hash).offset() ? $(this.hash).offset().top : 0;
      var customoffset = 85;
      $("html, body").animate({ scrollTop: target_offset - customoffset }, 500);
    });
    $('a[href*="#"]:not(a[href="#"])').click(function () {
      var new_url = $.attr(this, "href");
      new_url = new_url.split("#");
      var new_hash = "";
      if (new_url.length > 1) {
        new_hash = new_url[1];
      }
      var current_url = window.location.href;
      current_url = current_url.split("#");
      var current_hash = "";
      if (current_url.length > 1) {
        current_hash = current_url[1];
      }
      if (current_url[0] == new_url[0]) {
        $("html, body").animate(
          { scrollTop: $('[name="' + new_hash + '"]').offset().top - 85 },
          500
        );
        $(".off-canvas-right").removeClass("open");
        window.location.hash = new_hash;
        return false;
      }
    });
    widgets = $(".wrapper-content .widget");
    if (
      $(".header-site").hasClass("header-overlay") &&
      $(widgets[0]).hasClass("layers-slider-widget")
    ) {
      $("body").waypoint({
        offset: -500,
        handler: function (direction) {
          if ("down" == direction) {
            $("section.header-sticky .custom-logo").css("filter", "invert(1)");
          }
        },
      });
      $("body").waypoint({
        offset: -1,
        handler: function (direction) {
          if ("up" == direction) {
            $("section.header-sticky .custom-logo").css("filter", "invert(0)");
          }
        },
      });
    } else if (
      $(".header-site").hasClass("header-overlay") &&
      !$(".title-container").hasClass("layers-parallax")
    ) {
      $("section.header-sticky .custom-logo").attr(
        "src",
        "/wp-content/themes/riverschurch/assets/img/Rivers-Logo-Black.png"
      );
      $("section.header-sticky .custom-logo").attr(
        "srcset",
        "/wp-content/themes/riverschurch/assets/img/Rivers-Logo-Black.png"
      );
      $(".responsive-nav .l-menu").css({ color: "#000" });
    }
    $(".modal-content")
      .parents(".media")
      .find("a")
      .on("click", function (e) {
        e.preventDefault();
        $(".modal-wrapper .modal-content").html(
          $(this).parents(".media").find(".modal-content").html()
        );
        $(".modal").fadeIn();
      });
    $(".modal .close").on("click", function (e) {
      e.preventDefault();
      $(".modal").fadeOut(function () {
        $(".modal .modal-content").html("");
      });
    });
    $(".modal").on("click", function (e) {
      e.preventDefault();
      if (!$(event.target).closest(".modal .modal-content").length) {
        $(".modal").fadeOut(function () {
          $(".modal .modal-content").html("");
        });
      }
    });
    $(".video-responsive").fitVids();
  })(jQuery)
);
