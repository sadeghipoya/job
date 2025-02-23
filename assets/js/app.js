// Template Name: Educators
// Template URL: https://techpedia.com/template/educators
// Description: Online Course & Education HTML Template
// Version: 1.0.0
(function (window, document, $, undefined) {
  "use strict";
  var Init = {
    i: function (e) {
      Init.s();
      Init.methods();
    },
    s: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },
    methods: function (e) {
      Init.w();
      Init.hidepreloader();
      Init.BackToTop();
      Init.videplay();
      Init.intializeSlick();
      Init.salActivation();
      Init.contactForm();
      Init.countdownInit(".countdown", "2023/12/01");
    },
    w: function (e) {
      this._window.on("load", Init.l).on("scroll", Init.res);
    },
    hidepreloader: function () {
      $("#preloader").hide();
    },

    BackToTop: function () {
      var btn = $("#backto-top");
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 300) {
          btn.addClass("show");
        } else {
          btn.removeClass("show");
        }
      });
      btn.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate(
          {
            scrollTop: 0,
          },
          "300"
        );
      });
    },
    videplay: function () {
      $(".detail-block .play-btn").on("click", function () {
        console.log('ok')
        $(".detail-block .img-box").hide("slow");
        $(".detail-block .video-box").show("slow");
      });
    },
    salActivation: function () {
      sal({
        threshold: 0.1,
        once: true,
      });
    },
    intializeSlick: function (e) {
      if($(".acheivements-slider").length) {
        $(".acheivements-slider").slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: true,
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          autoplay: true,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 1199,
              settings: {
                arrows: false,
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 992,
              settings: {
                arrows: false,
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 492,
              settings: {
                arrows: false,
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 380,
              settings: {
                arrows: false,
                slidesToShow: 1,
              },
            },
          ],
        });
      }
      if ($(".testimonial-slider").length) {
        $(".testimonial-slider").slick({
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
          dots: true,
          responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
              },
            }
          ],
        });
      }
      if ($(".review-slider").length) {
        $(".review-slider").slick({
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
          // fade: true,
          cssEase: 'linear',
          infinite: true,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 992,
              settings: {
                arrows: false,
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 490,
              settings: {
                arrows: false,
                slidesToShow: 1,
              },
            },
          ],
        });
      }
    },
    contactForm: function () {
      $(".contact-form").on("submit", function (e) {
        e.preventDefault();
          var _self = $(this);
          var _selector = _self.closest("input,textarea");
          _self.closest("div").find("input,textarea").removeAttr("style");
          _self.find(".error-msg").remove();
          _self
            .closest("div")
            .find('button[type="submit"]')
            .attr("disabled", "disabled");
          var data = $(this).serialize();
          $.ajax({
            url: "./assets/mail/contact.php",
            type: "post",
            dataType: "json",
            data: data,
            success: function (data) {
              $(".contact-form").trigger("reset");
              _self.find('button[type="submit"]').removeAttr("disabled");
              if (data.success) {
                document.getElementById("message").innerHTML =
                  "Email Sent Successfully";
              } else {
                document.getElementById("message").innerHTML =
                  "There is an error";
              }
              $("#message").show("slow");
              $("#message").slideDown("slow");
              setTimeout(function () {
                $("#message").hide("slow");
                $("#message").slideUp("hide");
              }, 3000);
            },
          });
      });
    },
    countdownInit: function (countdownSelector, countdownTime) {
      var eventCounter = $(countdownSelector);
      if (eventCounter.length) {
        eventCounter.countdown(countdownTime, function (e) {
          $(this).html(
            e.strftime(
              " <li>%D<small>Days</small></li>\
                <li>%H<small>Hours</small></li>\
                <li>%M<small>Minutes</small></li>\
                <li>%S<small>Seconds</small></li>"
            )
          );
        });
      }
    },
  };
  Init.i();
})(window, document, jQuery);
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);