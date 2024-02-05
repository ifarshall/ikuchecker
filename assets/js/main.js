/*-----------------------------------------------------------------------------------
    Template Name: Landio - Multipurpose Landing Page HTML Template
    Template URI: https://webtend.net/demo/html/landio/
    Author: WebTend
    Author URI:  https://webtend.net/
    Version: 1.3

    Note: This is Main Js file
-----------------------------------------------------------------------------------
    Js INDEX
    ===================
    #. Main Menu
    #. Testimonials Slider One
    #. Testimonials Slider Two
    #. Testimonials Slider Three
    #. Testimonials Slider Four
    #. Testimonials Slider Five
    #. Testimonials Slider Six
    #. Counter Up
    #. Service Slider One
    #. Brand Slider One
    #. Brand Slider Two
    #. Testimonial Slider (On Sidebar)
    #. Progress bar
    #. Active Nice Select
    #. Hero Slider
    #. Screenshot Slider
    #. Sticky Header
    #. Preloader
    #. Video Popup
    #. Team Slider
    #. Scroll To Top
    #. Portfolio FIlter
-----------------------------------------------------------------------------------*/

(function ($) {
  "use strict";

  // ===== Main Menu
  function mainMenu() {
    const navbarToggler = $(".navbar-toggler"),
      navMenu = $(".nav-menu"),
      mobilePanel = $(".mobile-slide-panel"),
      mobilePanelMenu = $(".mobile-menu"),
      mobileOverly = $(".panel-overlay"),
      navClose = $(".panel-close");

    // Show Mobile Slide Panel
    navbarToggler.on("click", function (e) {
      e.preventDefault();
      mobilePanel.toggleClass("panel-on");
    });

    // Close Mobile Slide Panel
    navClose.add(mobileOverly).on("click", function (e) {
      e.preventDefault();
      mobilePanel.removeClass("panel-on");
    });

    // Adds toggle button to li items that have children
    navMenu.find("li a").each(function () {
      if ($(this).next().length > 0) {
        $(this).append(
          '<span class="dd-trigger"><i class="fas fa-angle-down"></i></span>'
        );
      }
    });

    mobilePanelMenu.find("li a").each(function () {
      if ($(this).next().length > 0) {
        $(this).append(
          '<span class="dd-trigger"><i class="fas fa-angle-down"></i></span>'
        );
      }
    });

    // Expands the dropdown menu on each click
    mobilePanelMenu.find(".dd-trigger").on("click", function (e) {
      e.preventDefault();
      $(this)
        .parent()
        .parent("li")
        .children("ul.sub-menu")
        .stop(true, true)
        .slideToggle(350);
      $(this).toggleClass("sub-menu-opened");
    });

    const offCanvasBtn = $(".off-canvas-btn"),
      offCanvasClose = $(".canvas-close"),
      canvasOverly = $(".canvas-overlay"),
      offCanvasPanel = $(".off-canvas-wrapper");

    // Show Off canvas Panel
    offCanvasBtn.on("click", function (e) {
      e.preventDefault();
      offCanvasPanel.addClass("canvas-on");
    });

    // Hide Off canvas Panel
    offCanvasClose.add(canvasOverly).on("click", function (e) {
      e.preventDefault();
      offCanvasPanel.removeClass("canvas-on");
    });
  }

  // ===== Testimonials Slider One
  function testimonialActiveOne() {
    const slider = $("#testimonialActiveOne");

    slider.slick({
      infinite: true,
      dots: true,
      arrows: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  // =====Testimonials Slider Two
  function testimonialActiveTwo() {
    const slider = $("#testimonialActiveTwo");

    slider.slick({
      infinite: true,
      dots: true,
      arrows: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  // ===== Testimonials Slider Three
  function testimonialActiveThree() {
    const slider = $("#testimonialActiveThree");

    slider.slick({
      infinite: true,
      dots: false,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      prevArrow:
        '<button class="slick-arrow prev-arrow"><i class="fas fa-arrow-left"></i></button>',
      nextArrow:
        '<button class="slick-arrow next-arrow"><i class="fas fa-arrow-right"></i></button>',
      responsive: [
        {
          breakpoint: 430,
          settings: {
            arrows: false,
          },
        },
      ],
    });
  }

  // ===== Testimonials Slider Four
  function testimonialActiveFour() {
    const slider = $("#testimonialActiveFour");

    slider.slick({
      infinite: true,
      dots: true,
      arrows: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  // ===== Testimonials Slider Five
  function testimonialActiveFive() {
    const slider = $("#testimonialActiveFive");

    slider.slick({
      infinite: true,
      dots: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
    });
  }

  // ===== Testimonials Slider Six
  function testimonialActiveSix() {
    const slider = $("#testimonialActiveSix");

    slider.slick({
      infinite: true,
      dots: true,
      arrows: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  // ===== Testimonials Slider Seven
  function testimonialActiveSeven() {
    const slider = $(".testimonial-boxes-v3");

    slider.slick({
      infinite: true,
      dots: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
    });
  }

  // ===== Testimonials Slider Eight
  function testimonialActiveEight() {
    const slider = $(".customer-review-wrap");
    slider.slick({
      infinite: true,
      dots: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
    });
  }

  // ===== Counter Up
  function counterUp() {
    $(".counter-item").on("inview", function (event, isInView) {
      if (isInView) {
        $(this)
          .find(".counter")
          .each(function () {
            $(this)
              .prop("Counter", 0)
              .animate(
                {
                  Counter: $(this).text(),
                },
                {
                  duration: 3000,
                  easing: "swing",
                  step: function (now) {
                    $(this).text(Math.ceil(now));
                  },
                }
              );
          });
        $(this).unbind("inview");
      }
    });
  }

  // ===== Service Slider One
  function serviceSliderActive() {
    const slider = $("#serviceSliderActive");

    slider.slick({
      infinite: true,
      dots: false,
      arrows: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1800,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  // ===== Brand Slider One
  function brandSlider() {
    const slider = $(".brand-slider-one-active");

    slider.slick({
      infinite: true,
      dots: false,
      arrows: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  }

  // ===== Brand Slider Two
  function brandSliderTwo() {
    const slider = $(".brand-slider-two-active");

    slider.slick({
      infinite: true,
      dots: false,
      arrows: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  }

  // ===== Testimonial Slider (On Sidebar)
  function testimonialWidgetSlider() {
    const slider = $(".testimonial-widget-active");

    slider.slick({
      infinite: true,
      dots: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
    });
  }

  // ===== Progress bar
  function progressBar() {
    $(".progress-bars").on("inview", function (event, isInView) {
      if (isInView) {
        $(this)
          .find(".single-progress")
          .each(function () {
            const percentage = $(this).data("percentage"),
              lineInner = $(this).find(".line-inner"),
              widthCss = percentage + "%";

            lineInner.width(widthCss);
          });
        $(this).unbind("inview");
      }
    });
  }

  // ===== Active Nice Select
  function activeNiceSelect() {
    $("select").niceSelect();
  }

  // ===== Hero Slider
  function heroSlider() {
    const slider = $(".hero-slider");

    slider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      speed: 500,
      arrows: true,
      fade: false,
      dots: true,
      swipe: true,
      prevArrow:
        '<button class="slick-arrow prev-arrow"><i  class="fas fa-angle-left"></i></button>',
      nextArrow:
        '<button class="slick-arrow next-arrow"><i  class="fas fa-angle-right"></i></button>',
      responsive: [
        {
          breakpoint: 576,
          settings: {
            dots: false,
          },
        },
        {
          breakpoint: 425,
          settings: {
            dots: false,
            arrows: false,
          },
        },
      ],
    });
  }

  // ==== Screenshot Slider
  function screenshotSlider() {
    $(".screenshot-slider").slick({
      dots: false,
      arrows: true,
      infinite: true,
      autoplay: false,
      speed: 600,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow:
        '<button class="slick-arrow prev-arrow"><i class="far fa-angle-left"></i></button>',
      nextArrow:
        '<button class="slick-arrow next-arrow"><i class="far fa-angle-right"></i></button>',
      appendArrows: $(".screenshot-arrows"),
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  }

  // ==== Sticky Header
  function stickyHeader() {
    const scroll_top = $(window).scrollTop(),
      siteHeader = $(".template-header");

    if (siteHeader.hasClass("sticky-header")) {
      if (scroll_top < 110) {
        siteHeader.removeClass("sticky-on");
      } else {
        siteHeader.addClass("sticky-on");
      }
    }
  }

  // ==== Preloader
  function preloader() {
    $("#preloader").delay(500).fadeOut(500);
  }

  // ==== Video Popup
  function videoPopup() {
    $(".popup-video").each(function () {
      $(this).magnificPopup({
        type: "iframe",
      });
    });
  }

  // ===== Team Slider
  function teamSliderOne() {
    const slider = $("#teamSliderOne");

    slider.slick({
      infinite: true,
      dots: false,
      arrows: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 620,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  // ===== Scroll To Top
  function scrollToTop() {
    var $scrollUp = $("#scroll-top"),
      $lastScrollTop = 0,
      $window = $(window);

    $window.on("scroll", function () {
      var st = $(this).scrollTop();
      if (st > $lastScrollTop) {
        $scrollUp.removeClass("show");
      } else {
        if ($window.scrollTop() > 200) {
          $scrollUp.addClass("show");
        } else {
          $scrollUp.removeClass("show");
        }
      }
      $lastScrollTop = st;
    });

    $scrollUp.on("click", function (evt) {
      $("html, body").animate({ scrollTop: 0 }, 600);
      evt.preventDefault();
    });
  }

  // ===== Portfolio FIlter
  function portfolioFilter() {
    const items = $(".portfolio-filter-items").isotope();

    // Items on button click
    $(".portfolio-filter").on("click", "li", function (e) {
      const filterValue = $(this).attr("data-filter");
      items.isotope({
        filter: filterValue,
      });
    });

    // Menu active class
    $(".portfolio-filter li").on("click", function (event) {
      $(".portfolio-filter .active").removeClass("active");
      $(this).addClass("active");

      event.preventDefault();
    });
  }

  // ===== Portfolio FIlter Two
  function portfolioFilter() {
    const items = $(".portfolio-items-two").isotope();

    // Items on button click
    $(".portfolio-filter-two").on("click", "li", function (e) {
      const filterValue = $(this).attr("data-filter");
      items.isotope({
        filter: filterValue,
      });
    });

    // Menu active class
    $(".portfolio-filter-two li").on("click", function (event) {
      $(".portfolio-filter-two .active").removeClass("active");
      $(this).addClass("active");

      event.preventDefault();
    });
  }

  // cek proyeksi kualitas target per bobot
  function checkTarget() {
    let bobot1;
    let bobot2;
    let bobot3;
    let bobot4;
    let bobot5;
    // cek target maximize
    $("#check-target").on("click", function (event) {
      event.preventDefault();
      const target2 = parseFloat($("#target-2").val());
      const realisasi2 = parseFloat($("#realisasi-2").val());
      const indexCapaian2 = realisasi2 / target2;
      const target1 = parseFloat($("#target-1").val());
      const realisasi1 = parseFloat($("#realisasi-1").val());
      const indexCapaian1 = realisasi1 / target1;
      let indeks125 = false;
      if (indexCapaian2 >= 1.25 && indexCapaian1 >= 1.25) {
        bobot1 = parseFloat((0.94 * realisasi1).toFixed(2));
        bobot2 = parseFloat((0.95 * realisasi1).toFixed(2));
        bobot3 = parseFloat(realisasi1.toFixed(2));
        bobot4 = parseFloat((1.01 * realisasi1).toFixed(2));
        bobot5 = parseFloat((1.06 * realisasi1).toFixed(2));
        indeks125 = true;
      } else {
        bobot1 = parseFloat((0.99 * target1).toFixed(2));
        bobot2 = parseFloat(target1.toFixed(2));
        bobot3 = parseFloat((1.01 * target1).toFixed(2));
        bobot4 = parseFloat((1.06 * target1).toFixed(2));
        bobot5 = parseFloat((1.11 * target1).toFixed(2));
        indeks125 = false;
      }
      document.getElementById("result-view").style.display = "block";
      document.getElementById("result-view").scrollIntoView({ behavior: "smooth" });
      document.getElementById("result-bobot1").innerText = bobot1;
      document.getElementById("result-bobot2").innerText = bobot2;
      document.getElementById("result-bobot3").innerText = bobot3;
      document.getElementById("result-bobot4").innerText = bobot4;
      document.getElementById("result-bobot5").innerText = bobot5;
      if (indeks125) {
        document.getElementById("menantang").innerText =
          "Tidaaak, mending reformulasi aja";
        document.getElementById("menantang").style.color = "#fff";
        document.getElementById("menantang-box").style.backgroundColor =
          "#F28585";
        document
          .getElementById("menantang-gradient")
          .classList.remove("icon-gradient-5");
        document
          .getElementById("menantang-icon")
          .classList.remove("fa-laugh-squint");
        document
          .getElementById("menantang-gradient")
          .classList.add("icon-gradient-3");
        document.getElementById("menantang-icon").classList.add("fa-sad-tear");
      } else {
        if (realisasi2 == target2 && realisasi1 == target1) {
          document.getElementById("menantang").innerText =
            "Apa ini sudah maksimal banget capaiannya? Mending reformulasi aja!";
          document.getElementById("menantang").style.color = "#fff";
          document.getElementById("menantang-box").style.backgroundColor =
            "#F28585";
          document
            .getElementById("menantang-gradient")
            .classList.remove("icon-gradient-5");
          document
            .getElementById("menantang-icon")
            .classList.remove("fa-laugh-squint");
          document
            .getElementById("menantang-gradient")
            .classList.add("icon-gradient-3");
          document
            .getElementById("menantang-icon")
            .classList.add("fa-sad-tear");
        } else {
          document.getElementById("menantang").innerText = "Masiiiih";
          document.getElementById("menantang").style.color = "#000";
          document.getElementById("menantang-box").style.backgroundColor =
            "#B7E5B4";
          document
            .getElementById("menantang-gradient")
            .classList.remove("icon-gradient-3");
          document
            .getElementById("menantang-icon")
            .classList.remove("fa-sad-tear");
          document
            .getElementById("menantang-gradient")
            .classList.add("icon-gradient-5");
          document
            .getElementById("menantang-icon")
            .classList.add("fa-laugh-squint");
        }
      }
    });
    $("#check-target-minimize").on("click", function (event) {
      event.preventDefault();
      const target2 = parseFloat($("#target-min-2").val());
      let realisasi2 = parseFloat($("#realisasi-min-2").val());
      const indexCapaian2 = (1+(1 - realisasi2 / target2));
      const target1 = parseFloat($("#target-min-1").val());
      let realisasi1 = parseFloat($("#realisasi-min-1").val());
      const indexCapaian1 = (1+(1 - realisasi1 / target1));
      let indeks125 = false;
      if (indexCapaian2 >= 1.25 && indexCapaian1 >= 1.25) {
        bobot1 = parseFloat((1.1 * realisasi1).toFixed(3));
        bobot2 = parseFloat((1.09 * realisasi1).toFixed(3));
        bobot3 = parseFloat(realisasi1.toFixed(3));
        bobot4 = parseFloat((0.99 * realisasi1).toFixed(3));
        bobot5 = parseFloat((0.89 * realisasi1).toFixed(3));
        indeks125 = true;
      } else {
        bobot1 = parseFloat((1.01 * target1).toFixed(3));
        bobot2 = parseFloat(target1.toFixed(3));
        bobot3 = parseFloat((0.99 * target1).toFixed(3));
        bobot4 = parseFloat((0.89 * target1).toFixed(3));
        bobot5 = parseFloat((0.85 * target1).toFixed(3));
        indeks125 = false;
      }
      document.getElementById("result-view").style.display = "block";
      document.getElementById("result-view").scrollIntoView({ behavior: "smooth" });
      document.getElementById("result-bobot1").innerText = bobot1;
      document.getElementById("result-bobot2").innerText = bobot2;
      document.getElementById("result-bobot3").innerText = bobot3;
      document.getElementById("result-bobot4").innerText = bobot4;
      document.getElementById("result-bobot5").innerText = bobot5;
      if (indeks125) {
        if(realisasi1==0||realisasi2==0){
          document.getElementById("menantang").innerText =
            "Mungkin ini masih menantang, realisasi 0 jadi sudah maksimal. Kalau dihitung pasti lebih dari 125 indeks capaiannya. Kalau mau 120 bisa realisasi diisi 0.08";
          document.getElementById("menantang").style.color = "#fff";
          document.getElementById("menantang-box").style.backgroundColor =
            "#F28585";
          document
            .getElementById("menantang-gradient")
            .classList.remove("icon-gradient-5");
          document
            .getElementById("menantang-icon")
            .classList.remove("fa-laugh-squint");
          document
            .getElementById("menantang-gradient")
            .classList.add("icon-gradient-3");
          document
            .getElementById("menantang-icon")
            .classList.add("fa-sad-tear");
        } else {
          document.getElementById("menantang").innerText =
            "Tidaaak, mending reformulasi aja";
          document.getElementById("menantang").style.color = "#fff";
          document.getElementById("menantang-box").style.backgroundColor =
            "#F28585";
          document
            .getElementById("menantang-gradient")
            .classList.remove("icon-gradient-5");
          document
            .getElementById("menantang-icon")
            .classList.remove("fa-laugh-squint");
          document
            .getElementById("menantang-gradient")
            .classList.add("icon-gradient-3");
          document.getElementById("menantang-icon").classList.add("fa-sad-tear");
        }
      } else {
        if (realisasi2 == target2 && realisasi1 == target1) {
          document.getElementById("menantang").innerText =
            "Apa ini sudah maksimal banget capaiannya? Mending reformulasi aja!";
          document.getElementById("menantang").style.color = "#fff";
          document.getElementById("menantang-box").style.backgroundColor =
            "#F28585";
          document
            .getElementById("menantang-gradient")
            .classList.remove("icon-gradient-5");
          document
            .getElementById("menantang-icon")
            .classList.remove("fa-laugh-squint");
          document
            .getElementById("menantang-gradient")
            .classList.add("icon-gradient-3");
          document
            .getElementById("menantang-icon")
            .classList.add("fa-sad-tear");
        } else {
          document.getElementById("menantang").innerText = "Masiiiih";
          document.getElementById("menantang").style.color = "#000";
          document.getElementById("menantang-box").style.backgroundColor =
            "#B7E5B4";
          document
            .getElementById("menantang-gradient")
            .classList.remove("icon-gradient-3");
          document
            .getElementById("menantang-icon")
            .classList.remove("fa-sad-tear");
          document
            .getElementById("menantang-gradient")
            .classList.add("icon-gradient-5");
          document
            .getElementById("menantang-icon")
            .classList.add("fa-laugh-squint");
        }
      }
    });
    $("#pelaksana").change(function() {
      if ($(this).val() == "1") {
        $("#barucascading").css("display", "flex");
      } else {
        $("#barucascading").css("display", "none");
      }
    });
    $("#cascadingbaru").change(function() {
      if ($(this).val() == "1") {
        console.log('masuk?')
        $("#barupoin1").css("display", "none");
        $("#barupoin2").css("display", "none");
        $("#validitasbaru").css("display", "flex");
        $("#kendalibaru").css("display", "flex");
      } else {
        $("#barupoin1").css("display", "flex");
        $("#barupoin2").css("display", "flex");
        $("#validitasbaru").css("display", "none");
        $("#kendalibaru").css("display", "none");
      }
    });
    $("#check-target-baru").on("click", function(e){
      e.preventDefault();
      const pelaksana = $("#pelaksana").val();
      const poin1 = $("#poin1").val();
      const poin2 = $("#poin2").val();
      let resultbaru;
      if(pelaksana == "0"){
        if(poin1 == "1"&& poin2 == "1"){
          resultbaru = "Waaah, bobotnya 3 nih, sesuai standar bobot kualitas target IKU!!"
          document.getElementById("result-baru-target").innerText = resultbaru;
          document.getElementById("result-baru-target").style.color = "#000";
          document.getElementById("result-baru-box").style.backgroundColor =
            "#B7E5B4";
            document
            .getElementById("result-baru-gradient")
            .classList.remove("icon-gradient-3");
          document
            .getElementById("result-baru-icon")
            .classList.remove("fa-sad-tear");
          document
            .getElementById("result-baru-gradient")
            .classList.add("icon-gradient-4");
          document
            .getElementById("result-baru-icon")
            .classList.add("fa-laugh-squint");
        } else if(poin1 == "0"&&poin2=="0"){
          resultbaru = "Bobotnya cuma 1 ajaaa, IKUnya kurang berkualitas :(";
          document.getElementById("result-baru-target").innerText = resultbaru;
          document.getElementById("result-baru-target").style.color = "#fff";
          document.getElementById("result-baru-box").style.backgroundColor =
            "#F28585";
          document
            .getElementById("result-baru-gradient")
            .classList.remove("icon-gradient-4");
          document
            .getElementById("result-baru-icon")
            .classList.remove("fa-laugh-squint");
          document
            .getElementById("result-baru-gradient")
            .classList.add("icon-gradient-3");
          document
            .getElementById("result-baru-icon")
            .classList.add("fa-sad-tear");
        } else {
          resultbaru = "Bobotnya 2 poin! Rata-rata IKU baru pelaksana memang bobotnya segini kak!";
          document.getElementById("result-baru-target").innerText = resultbaru;
          document.getElementById("result-baru-target").style.color = "#000";
          document.getElementById("result-baru-box").style.backgroundColor =
            "#B7E5B4";
            document
            .getElementById("result-baru-gradient")
            .classList.remove("icon-gradient-3");
          document
            .getElementById("result-baru-icon")
            .classList.remove("fa-sad-tear");
          document
            .getElementById("result-baru-gradient")
            .classList.add("icon-gradient-4");
          document
            .getElementById("result-baru-icon")
            .classList.add("fa-laugh-squint");
        }
      } else {
        const validitas = $("#baruvaliditas").val();
        const kendali = $("#barukendali").val();
        if(validitas == "0"&&kendali=="0"){
          resultbaru = "Waaah, bobotnya 3 nih, sesuai standar bobot kualitas target IKU!!"
          document.getElementById("result-baru-target").innerText = resultbaru;
          document.getElementById("result-baru-target").style.color = "#000";
          document.getElementById("result-baru-box").style.backgroundColor =
            "#B7E5B4";
            document
            .getElementById("result-baru-gradient")
            .classList.remove("icon-gradient-3");
          document
            .getElementById("result-baru-icon")
            .classList.remove("fa-sad-tear");
          document
            .getElementById("result-baru-gradient")
            .classList.add("icon-gradient-4");
          document
            .getElementById("result-baru-icon")
            .classList.add("fa-laugh-squint");
        } else if (validitas=="0"&&(kendali=="1"||kendali=="2")){
          resultbaru = "OMG! Bobotnya 4 loh, itu udah diatas target standar! Targetnya menantang banget nih buat kamu"
          document.getElementById("result-baru-target").innerText = resultbaru;
          document.getElementById("result-baru-target").style.color = "#000";
          document.getElementById("result-baru-box").style.backgroundColor =
            "#B7E5B4";
            document
            .getElementById("result-baru-gradient")
            .classList.remove("icon-gradient-3");
          document
            .getElementById("result-baru-icon")
            .classList.remove("fa-sad-tear");
          document
            .getElementById("result-baru-gradient")
            .classList.add("icon-gradient-4");
          document
            .getElementById("result-baru-icon")
            .classList.add("fa-laugh-squint");
        } else if (validitas=="1"&&(kendali=="1"||kendali=="2")){
          resultbaru = "Luar biasa banget ini! Bobotnya 5 loh!!! Waaah semoga lancar yaa mengerjakannya! Kayaknya bakal susah banget nih untuk dicapai!"
          document.getElementById("result-baru-target").innerText = resultbaru;
          document.getElementById("result-baru-target").style.color = "#000";
          document.getElementById("result-baru-box").style.backgroundColor =
            "#B7E5B4";
            document
            .getElementById("result-baru-gradient")
            .classList.remove("icon-gradient-3");
          document
            .getElementById("result-baru-icon")
            .classList.remove("fa-sad-tear");
          document
            .getElementById("result-baru-gradient")
            .classList.add("icon-gradient-4");
          document
            .getElementById("result-baru-icon")
            .classList.add("fa-laugh-squint");
        } else {
          resultbaru = "Maaaaaf, kayaknya kamu salah pilih deh karena kombinasi exact itu ga mungkin ke high! >///<";
          document.getElementById("result-baru-target").innerText = resultbaru;
            document.getElementById("result-baru-target").style.color = "#fff";
            document.getElementById("result-baru-box").style.backgroundColor =
              "#F28585";
            document
              .getElementById("result-baru-gradient")
              .classList.remove("icon-gradient-4");
            document
              .getElementById("result-baru-icon")
              .classList.remove("fa-laugh-squint");
            document
              .getElementById("result-baru-gradient")
              .classList.add("icon-gradient-3");
            document
              .getElementById("result-baru-icon")
              .classList.add("fa-sad-tear");
        }
      }
      document.getElementById("result-baru-view").style.display = "block";
      document.getElementById("result-baru-view").scrollIntoView({ behavior: "smooth" });
    });

    $("#kualitaspelaksana").change(function() {
      if ($(this).val() == "1") {
        $("#ikucascading").css("display", "flex");
        $("#eselon").css("display", "flex");
      } else {
        $("#ikucascading").css("display", "none");
        $("#eselon").css("display", "none");
      }
    });
    $("#kualitascascading").change(function() {
      if ($(this).val() == "1") {
        $("#kual1").css("display", "none");
        $("#kual2").css("display", "none");
        $("#kual3").css("display", "none");
        $("#kual4").css("display", "none");
        $("#kual5").css("display", "none");
        $("#kual6").css("display", "none");
        $("#kual7").css("display", "none");
        $("#validitascascading").css("display", "flex");
        $("#kendalicascading").css("display", "flex");
      } else {
        $("#kual1").css("display", "flex");
        $("#kual2").css("display", "flex");
        $("#kual3").css("display", "flex");
        $("#kual4").css("display", "flex");
        $("#kual5").css("display", "flex");
        $("#kual6").css("display", "flex");
        $("#kual7").css("display", "flex");
        $("#validitascascading").css("display", "none");
        $("#kendalicascading").css("display", "none");
      }
    });

    $("#check-target-kualitas").on("click", function(e){
      e.preventDefault();
      const pelaksana = $("#kualitaspelaksana").val();
      const poin1 = $("#kualitas1").val();
      const poin2 = $("#kualitas2").val();
      const poin3 = $("#kualitas3").val();
      const poin4 = $("#kualitas4").val();
      const poin5 = $("#kualitas5").val();
      const poin6 = $("#kualitas6").val();
      const poin7 = $("#kualitas7").val();
      let resultkualitas;
      if(pelaksana == "0"){
        if((poin1 == "1"||poin2 =="1"||poin3 =="1"||poin4 =="1"||poin5 =="1"||poin6 =="1")&& poin7 == "1"){
          resultkualitas = "Waaah, bobotnya 11 nih, melebihi standar bobot kualitas IKU!!"
          document.getElementById("result-kualitas-target").innerText = resultkualitas;
          document.getElementById("result-kualitas-target").style.color = "#000";
          document.getElementById("result-kualitas-box").style.backgroundColor =
            "#B7E5B4";
            document
            .getElementById("result-kualitas-gradient")
            .classList.remove("icon-gradient-3");
          document
            .getElementById("result-kualitas-icon")
            .classList.remove("fa-sad-tear");
          document
            .getElementById("result-kualitas-gradient")
            .classList.add("icon-gradient-4");
          document
            .getElementById("result-kualitas-icon")
            .classList.add("fa-laugh-squint");
        } else if(poin1 == "1"&&poin2 =="1"&&poin3 =="1"&&poin4 =="1"&&poin5 =="1"&&poin6 =="1"&&poin7=="0"){
          resultkualitas = "Bobotnya cuma 9 ajaaa, IKUnya kurang berkualitas :(. Jangan cuma ngukur output atau activity saja, coba ngukur waktunya juga kak!";
          document.getElementById("result-kualitas-target").innerText = resultkualitas;
          document.getElementById("result-kualitas-target").style.color = "#fff";
          document.getElementById("result-kualitas-box").style.backgroundColor =
            "#F28585";
          document
            .getElementById("result-kualitas-gradient")
            .classList.remove("icon-gradient-4");
          document
            .getElementById("result-kualitas-icon")
            .classList.remove("fa-laugh-squint");
          document
            .getElementById("result-kualitas-gradient")
            .classList.add("icon-gradient-3");
          document
            .getElementById("result-kualitas-icon")
            .classList.add("fa-sad-tear");
        } else {
          resultkualitas = "Bobotnya 10 poin! Standar kualitas IKU pelaksana memang bobotnya segini kak!";
          document.getElementById("result-kualitas-target").innerText = resultkualitas;
          document.getElementById("result-kualitas-target").style.color = "#000";
          document.getElementById("result-kualitas-box").style.backgroundColor =
            "#B7E5B4";
            document
            .getElementById("result-kualitas-gradient")
            .classList.remove("icon-gradient-3");
          document
            .getElementById("result-kualitas-icon")
            .classList.remove("fa-sad-tear");
          document
            .getElementById("result-kualitas-gradient")
            .classList.add("icon-gradient-4");
          document
            .getElementById("result-kualitas-icon")
            .classList.add("fa-laugh-squint");
        }
      } else {
        const kualitascascading = $("#kualitascascading").val();
        const eselon = $("#eselon").val();
        if(kualitascascading == "0"){
          if(eselon=="1"){
            if((poin1 == "1"||poin2 =="1"||poin3 =="1"||poin4 =="1"||poin5 =="1"||poin6 =="1")&& poin7 == "1"){
              resultkualitas = "Waaah, bobotnya 11 nih, sesuai standar bobot kualitas IKU!!"
              document.getElementById("result-kualitas-target").innerText = resultkualitas;
              document.getElementById("result-kualitas-target").style.color = "#000";
              document.getElementById("result-kualitas-box").style.backgroundColor =
                "#B7E5B4";
                document
                .getElementById("result-kualitas-gradient")
                .classList.remove("icon-gradient-3");
              document
                .getElementById("result-kualitas-icon")
                .classList.remove("fa-sad-tear");
              document
                .getElementById("result-kualitas-gradient")
                .classList.add("icon-gradient-4");
              document
                .getElementById("result-kualitas-icon")
                .classList.add("fa-laugh-squint");
            } else if(poin1 == "1"&&poin2 =="1"&&poin3 =="1"&&poin4 =="1"&&poin5 =="1"&&poin6 =="1"&&poin7=="0"){
              resultkualitas = "Bobotnya cuma 9 ajaaa, IKUnya kurang berkualitas :(. Jangan cuma ngukur output atau activity saja, coba ngukur waktunya juga kak!";
              document.getElementById("result-kualitas-target").innerText = resultkualitas;
              document.getElementById("result-kualitas-target").style.color = "#fff";
              document.getElementById("result-kualitas-box").style.backgroundColor =
                "#F28585";
              document
                .getElementById("result-kualitas-gradient")
                .classList.remove("icon-gradient-4");
              document
                .getElementById("result-kualitas-icon")
                .classList.remove("fa-laugh-squint");
              document
                .getElementById("result-kualitas-gradient")
                .classList.add("icon-gradient-3");
              document
                .getElementById("result-kualitas-icon")
                .classList.add("fa-sad-tear");
            } else {
              resultkualitas = "Bobotnya 10 poin! Rata-rata kualitas IKU pejabat 2 level dibawah kepala kantor memang bobotnya segini sih, tapi coba naikin lagi yuk!";
              document.getElementById("result-kualitas-target").innerText = resultkualitas;
              document.getElementById("result-kualitas-target").style.color = "#000";
              document.getElementById("result-kualitas-box").style.backgroundColor =
                "#B7E5B4";
                document
                .getElementById("result-kualitas-gradient")
                .classList.remove("icon-gradient-3");
              document
                .getElementById("result-kualitas-icon")
                .classList.remove("fa-sad-tear");
              document
                .getElementById("result-kualitas-gradient")
                .classList.add("icon-gradient-4");
              document
                .getElementById("result-kualitas-icon")
                .classList.add("fa-laugh-squint");
            }
          } else {
            if((poin1 == "1"||poin2 =="1"||poin3 =="1"||poin4 =="1"||poin5 =="1"||poin6 =="1")&& poin7 == "1"){
              resultkualitas = "Akhirnyaaa, bobotnya 11 nih, walaupun belum sesuai standar bobot kualitas IKU. Tapi memang sudah ini yang terbaik, kita maksimalin di IKU yang ke kepala kantornya ya!"
              document.getElementById("result-kualitas-target").innerText = resultkualitas;
              document.getElementById("result-kualitas-target").style.color = "#000";
              document.getElementById("result-kualitas-box").style.backgroundColor =
                "#B7E5B4";
                document
                .getElementById("result-kualitas-gradient")
                .classList.remove("icon-gradient-3");
              document
                .getElementById("result-kualitas-icon")
                .classList.remove("fa-sad-tear");
              document
                .getElementById("result-kualitas-gradient")
                .classList.add("icon-gradient-4");
              document
                .getElementById("result-kualitas-icon")
                .classList.add("fa-laugh-squint");
            } else if(poin1 == "1"&&poin2 =="1"&&poin3 =="1"&&poin4 =="1"&&poin5 =="1"&&poin6 =="1"&&poin7=="0"){
              resultkualitas = "Bobotnya cuma 9 ajaaa, IKUnya kurang berkualitas :(. Jangan cuma ngukur output atau activity saja, coba ngukur kualitasnya juga";
              document.getElementById("result-kualitas-target").innerText = resultkualitas;
              document.getElementById("result-kualitas-target").style.color = "#fff";
              document.getElementById("result-kualitas-box").style.backgroundColor =
                "#F28585";
              document
                .getElementById("result-kualitas-gradient")
                .classList.remove("icon-gradient-4");
              document
                .getElementById("result-kualitas-icon")
                .classList.remove("fa-laugh-squint");
              document
                .getElementById("result-kualitas-gradient")
                .classList.add("icon-gradient-3");
              document
                .getElementById("result-kualitas-icon")
                .classList.add("fa-sad-tear");
            } else {
              resultkualitas = "Bobotnya 10 poin! Kalau untuk kamu yang 1 level dibawah kepala kantor, kualitas IKUnya sih masih kurang banget :(";
              document.getElementById("result-kualitas-target").innerText = resultkualitas;
              document.getElementById("result-kualitas-target").style.color = "#fff";
              document.getElementById("result-kualitas-box").style.backgroundColor =
                "#F28585";
              document
                .getElementById("result-kualitas-gradient")
                .classList.remove("icon-gradient-4");
              document
                .getElementById("result-kualitas-icon")
                .classList.remove("fa-laugh-squint");
              document
                .getElementById("result-kualitas-gradient")
                .classList.add("icon-gradient-3");
              document
                .getElementById("result-kualitas-icon")
                .classList.add("fa-sad-tear");
            }
          }
        } else {
          const kualitasvaliditas = $("#kualitasvaliditas").val();
          const kualitaskendali = $("#kualitaskendali").val();
          // proxy high
          if(kualitasvaliditas=="0"&&kualitaskendali=="0"){
            if(eselon == "0"){
              resultkualitas = "Hmm, bobotnya cuma 11 nih. Kalau ini IKU yang ke kepala kantor, harusnya bisa lebih baik lagi!"
            } else {
              resultkualitas = "Standarnya sih emang 11, tapi kalau ini mendukung punya kepala kantor, harusnya yang lebih strategis lagi yaa!"
            }
            document.getElementById("result-kualitas-target").innerText = resultkualitas;
            document.getElementById("result-kualitas-target").style.color = "#fff";
            document.getElementById("result-kualitas-box").style.backgroundColor =
              "#F28585";
            document
              .getElementById("result-kualitas-gradient")
              .classList.remove("icon-gradient-4");
            document
              .getElementById("result-kualitas-icon")
              .classList.remove("fa-laugh-squint");
            document
              .getElementById("result-kualitas-gradient")
              .classList.add("icon-gradient-3");
            document
              .getElementById("result-kualitas-icon")
              .classList.add("fa-sad-tear");
          } else if(kualitasvaliditas=="0"&&kualitaskendali=="1"){
            if(eselon == "0"){
              resultkualitas = "Naah, bobotnya udah 14 nih! Rata-rata memang berada di angka ini. Yuk kita banyakin lagi ! Maksimal 40% dari total IKU kita loh yang bisa dapat angka diatas 11 (Maksimal nilai non cascading)"
            } else {
              resultkualitas = "Okeeeey, udah lumayan nih kita nambah yang 14, maka bisa lebih bagus lagi kualitasnya uhuuuy! Maksimal 20% dari total IKU kita loh yang bisa dapat angka diatas 11 (Maksimal nilai non cascading)"
            }
            document.getElementById("result-kualitas-target").innerText = resultkualitas;
            document.getElementById("result-kualitas-target").style.color = "#000";
            document.getElementById("result-kualitas-box").style.backgroundColor =
              "#B7E5B4";
              document
              .getElementById("result-kualitas-gradient")
              .classList.remove("icon-gradient-3");
            document
              .getElementById("result-kualitas-icon")
              .classList.remove("fa-sad-tear");
            document
              .getElementById("result-kualitas-gradient")
              .classList.add("icon-gradient-4");
            document
              .getElementById("result-kualitas-icon")
              .classList.add("fa-laugh-squint");
          } else if(kualitasvaliditas=="0"&&kualitaskendali=="2"){
            if(eselon == "0"){
              resultkualitas = "Wooow, bobotnya 19 loh! Ini udah bisa jadi naik banget kualitasnya. Yuk kita banyakin lagi ! Maksimal 40% dari total IKU kita loh yang bisa dapat angka diatas 11 (Maksimal nilai non cascading)"
            } else {
              resultkualitas = "Whoaaah, mantap banget dapat kualitas IKU 19! Maksimal 20% dari total IKU kita loh yang bisa dapat angka diatas 11 (Maksimal nilai non cascading)"
            }
            document.getElementById("result-kualitas-target").innerText = resultkualitas;
            document.getElementById("result-kualitas-target").style.color = "#000";
            document.getElementById("result-kualitas-box").style.backgroundColor =
              "#B7E5B4";
              document
              .getElementById("result-kualitas-gradient")
              .classList.remove("icon-gradient-3");
            document
              .getElementById("result-kualitas-icon")
              .classList.remove("fa-sad-tear");
            document
              .getElementById("result-kualitas-gradient")
              .classList.add("icon-gradient-4");
            document
              .getElementById("result-kualitas-icon")
              .classList.add("fa-laugh-squint");
          } else if(kualitasvaliditas=="1"&&kualitaskendali=="0"){
            resultkualitas = "Waduh, kalau exact ini sih udah pasti ga ada yang full kendalinya di kitaaa, ini kamu salah rumus XD"
            document.getElementById("result-kualitas-target").innerText = resultkualitas;
            document.getElementById("result-kualitas-target").style.color = "#fff";
            document.getElementById("result-kualitas-box").style.backgroundColor =
              "#F28585";
            document
              .getElementById("result-kualitas-gradient")
              .classList.remove("icon-gradient-4");
            document
              .getElementById("result-kualitas-icon")
              .classList.remove("fa-laugh-squint");
            document
              .getElementById("result-kualitas-gradient")
              .classList.add("icon-gradient-3");
            document
              .getElementById("result-kualitas-icon")
              .classList.add("fa-sad-tear");
          } else if(kualitasvaliditas=="1"&&kualitaskendali=="1"){
            if(eselon == "0"){
              resultkualitas = "Waaaw, ada SS yang jadi tanggung jawab kamu. Poinnya 21 loh ! Maksimal 40% dari total IKU kita loh yang bisa dapat angka diatas 11 (Maksimal nilai non cascading)"
            } else {
              resultkualitas = "Eh seriusan kamu dapat SS yang menjadi tanggung jawabmu? Pasti berat banget karena bobotnya 21! Maksimal 20% dari total IKU kita loh yang bisa dapat angka diatas 11 (Maksimal nilai non cascading)"
            }
            document.getElementById("result-kualitas-target").innerText = resultkualitas;
            document.getElementById("result-kualitas-target").style.color = "#000";
            document.getElementById("result-kualitas-box").style.backgroundColor =
              "#B7E5B4";
              document
              .getElementById("result-kualitas-gradient")
              .classList.remove("icon-gradient-3");
            document
              .getElementById("result-kualitas-icon")
              .classList.remove("fa-sad-tear");
            document
              .getElementById("result-kualitas-gradient")
              .classList.add("icon-gradient-4");
            document
              .getElementById("result-kualitas-icon")
              .classList.add("fa-laugh-squint");
          } else if(kualitasvaliditas=="1"&&kualitaskendali=="2"){
            if(eselon == "0"){
              resultkualitas = "Wih, Semoga SSnya bisa tercapai ya dengan seluruh usahamu! Bobotnya maksimal di 26 poin ! Maksimal 40% dari total IKU kita loh yang bisa dapat angka diatas 11 (Maksimal nilai non cascading)"
            } else {
              resultkualitas = "Wowowoww benerankah kamu dapat SS yang menjadi tanggung jawabmu? Ngeri to the max, karena bobotnya 26 poin!  Maksimal 20% dari total IKU kita loh yang bisa dapat angka diatas 11 (Maksimal nilai non cascading)"
            }
            document.getElementById("result-kualitas-target").innerText = resultkualitas;
            document.getElementById("result-kualitas-target").style.color = "#000";
            document.getElementById("result-kualitas-box").style.backgroundColor =
              "#B7E5B4";
              document
              .getElementById("result-kualitas-gradient")
              .classList.remove("icon-gradient-3");
            document
              .getElementById("result-kualitas-icon")
              .classList.remove("fa-sad-tear");
            document
              .getElementById("result-kualitas-gradient")
              .classList.add("icon-gradient-4");
            document
              .getElementById("result-kualitas-icon")
              .classList.add("fa-laugh-squint");
          } else {

          }
        }
      }
      document.getElementById("result-kualitas-view").style.display = "block";
      document.getElementById("result-kualitas-view").scrollIntoView({ behavior: "smooth" });
    });
  }
  
  function scrollToSection(){
    $("#myTab li a").on("click", function (event){
      event.preventDefault();
      let element = document.getElementById('myTabContent');
      element.scrollIntoView({behavior:"smooth"});
    })
    $("#target-tab li a").on("click", function(){
      $("#result-view").hide();
      $("#result-baru-view").hide();
    })
  }

  // 22. Price range Fliter jQuery UI
  if ($(".price-slider-range").length) {
    $(".price-slider-range").slider({
      range: "min",
      value: 5960,
      min: 5,
      max: 8000,
      slide: function (event, ui) {
        $("#price").val("$" + ui.value);
      },
    });
    $("#price").val("$" + $(".price-slider-range").slider("value"));
  }

  /*---------------------
    === Document Ready  ===
    ----------------------*/
  $(document).ready(function () {
    mainMenu();
    testimonialActiveOne();
    testimonialActiveTwo();
    testimonialActiveThree();
    testimonialActiveFour();
    testimonialActiveFive();
    testimonialActiveSix();
    testimonialActiveSeven();
    testimonialActiveEight();
    counterUp();
    serviceSliderActive();
    brandSlider();
    testimonialWidgetSlider();
    progressBar();
    activeNiceSelect();
    heroSlider();
    brandSliderTwo();
    screenshotSlider();
    videoPopup();
    teamSliderOne();
    scrollToTop();
    portfolioFilter();
    checkTarget();
    scrollToSection();
  });

  /*---------------------
    === Window Scroll  ===
    ----------------------*/
  $(window).on("scroll", function () {
    stickyHeader();
  });

  /*------------------
    === Window Load  ===
    --------------------*/
  $(window).on("load", function () {
    preloader();

    // wow Init
    new WOW().init();
  });
})(jQuery);
