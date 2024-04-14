var cookieOptions = {
  expires: 0,
  path: "/",
};

if ($.cookie("visit6") == undefined) {
  console.log("vis6");

  $(".preloader").removeClass("hide");

  setTimeout(function () {
    $(".preloader").fadeOut(2000, function () {
      setTimeout(function () {
        $(".preloader_content").addClass("relative");
      }, 2000);
    });
  }, 3000);

  $.cookie("visit6", true, cookieOptions);
}

function adjustVideoMainHeight() {
  var bannerHeight = $('.banner-bot').outerHeight();
  var desiredHeight = bannerHeight + 100; 
  $('.video-main').height(desiredHeight);
}

$(window).on('load resize', adjustVideoMainHeight);





const imagesAnimate = document.querySelectorAll(".image-animation");

imagesAnimate.forEach((element) => {
  element.addEventListener("click", function () {
    const parentElement = this.querySelector(".text-animate");
    document.querySelectorAll(".text-animate").forEach((el) => {
      if (el !== parentElement) {
        el.classList.remove("text-animation");
      }
    });
    document.querySelectorAll(".image-animation").forEach((el) => {
      el.classList.remove("active-animation");
    });
    this.classList.add("active-animation");
    if (parentElement) {
      parentElement.classList.add("text-animation");
    }
  });

  document.addEventListener("scroll", function () {
    var sections = document.querySelectorAll(".blocks");
    var scrollPosition = window.scrollY;

    sections.forEach(function (section) {
      var rect = section.getBoundingClientRect();
      if (rect.top <= 200 && rect.bottom >= 200) {
        var id = section.getAttribute("id");
        document.querySelectorAll(".menu li").forEach(function (menuItem) {
          menuItem.classList.remove("active");
        });
        document
          .querySelector('a[href="#' + id + '"]')
          .parentNode.classList.add("active");
      }
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const linesFirst = document.querySelectorAll(".line-first");
    const linesSecond = document.querySelectorAll(".line-second");
    const blocks = document.querySelectorAll(".blocks");

    const isInViewport = (elem) => {
      const bounding = elem.getBoundingClientRect();
      return (
        bounding.top >= -200 &&
        bounding.left >= 0 &&
        bounding.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const handleScroll = () => {
      blocks.forEach((block, index) => {
        if (isInViewport(block)) {
          if (linesFirst[index] && linesSecond[index]) {
            linesFirst[index].style.animationPlayState = "running";
            linesSecond[index].style.animationPlayState = "running";
          }
        } else {
          if (linesFirst[index] && linesSecond[index]) {
            linesFirst[index].style.animationPlayState = "paused";
            linesSecond[index].style.animationPlayState = "paused";
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();
  });

  document.querySelectorAll(".link").forEach((link) => {
    link.onclick = function () {
      const popup = document.querySelector(".pop_up");
      popup.classList.add("disblock");

      var oneMinute = 60;
      var display = document.querySelector("#timer");
      startTimer(oneMinute, display);
    };
  });

  function startTimer(duration, display) {
    var timer = duration,
      minutes,
      seconds;
    let interval = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        timer = 0;
        clearInterval(interval);
        document.querySelector(".resendButton").style.display = "flex";
        document.querySelector(".sendButton").style.display = "none";
      }
    }, 1000);
  }

  document.querySelector(".close").onclick = function () {
    const popup = document.querySelector(".pop_up");
    popup.classList.remove("disblock");
  };

  document.querySelector(".closeAll").onclick = function () {
    const popup = document.querySelector(".pop_up");
    popup.classList.remove("disblock");
  };

  const emailInput = document.getElementById("emailInput");
  const registerButton = document.getElementById("registerButton");

  emailInput.addEventListener("input", function () {
    if (emailInput.value.trim() !== "") {
      registerButton.disabled = false;
    } else {
      registerButton.disabled = true;
    }
  });

  document
    .getElementById("registrationForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      let email = document.getElementById("emailInput").value;

      if (validateEmail(email)) {
        document.querySelector(".code-verified").style.display = "flex";
        document.querySelector(".registrate").style.display = "none";
      } else {
        alert("Пожалуйста, введите корректный адрес электронной почты.");
      }
    });

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const inputs = document.querySelectorAll(
    '.code-verified input[type="text"]'
  );
  const thankYouBlock = document.querySelector(".message-thank");

  const sendButton = document.querySelector(".sendButton");

  sendButton.addEventListener("click", function () {
    if (checkInputsFilled()) {
      thankYouBlock.style.display = "flex";
      document.querySelector(".code-verified").style.display = "none";
    } else {
      // Здесь можете добавить код, который должен выполниться, если input не заполнены
    }
  });


  inputs.forEach((input, index) => {
    input.addEventListener("input", function () {
      if (input.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });
  });

  function checkInputsFilled() {
    return Array.from(inputs).every((input) => input.value.trim() !== "");
  }

  document.querySelector(".mobile-menu").onclick = function () {
    let menu = document.querySelector(".menu");
    let head = document.querySelector(".block1");
    menu.classList.toggle("disblock");
  };
});
