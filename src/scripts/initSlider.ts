const initSlider = () => {
  const card = document.querySelector(".advantages__card");
  const progressBar = card.querySelector(".progress-bar");
  const progressBarLine = progressBar.querySelector(".progress-bar__line");

  const currentSlideNumber = progressBar.querySelector(".progress-bar__start");
  const lastSlideNumber = progressBar.querySelector(".progress-bar__end");

  const images = document.querySelectorAll(".advantages__image-container");


  // ПОказ скрытие контента карточки
  const text = document.querySelectorAll(".advantages__card-text");
  const numberOfElements = text.length;

  const hideTabContent = () => {
    text.forEach(item => {
      item.style.display = "none";
    });
  };

  const showTabContent = (i = 0) => {
    text[i].style.display = "block";
  };

  hideTabContent();
  showTabContent();


  var getAbsPosition = function(el){
    var el2 = el;
    var curtop = 0;
    var curleft = 0;
    if (document.getElementById || document.all) {
      do  {
        curleft += el.offsetLeft-el.scrollLeft;
        curtop += el.offsetTop-el.scrollTop;
        el = el.offsetParent;
        el2 = el2.parentNode;
        while (el2 != el) {
          curleft -= el2.scrollLeft;
          curtop -= el2.scrollTop;
          el2 = el2.parentNode;
        }
      } while (el.offsetParent);

    } else if (document.layers) {
      curtop += el.y;
      curleft += el.x;
    }
    return [curtop, curleft];
  };


  // Создание прогресс бара
  const createProgressBar = () => {
    for (let i = 0; i < numberOfElements; i++) {
      if (i === 0) {
        progressBarLine.insertAdjacentHTML(
            "beforeend",
            `<div class='progress-bar__level progress-bar__level_red'></div>`);
      } else {
        progressBarLine.insertAdjacentHTML(
            "beforeend",
            `<div class='progress-bar__level'></div>`);
      }
    }
  };

  createProgressBar();

  const sueta2 = document.querySelector('.advantages__images');
    const [yy,xy] = getAbsPosition(sueta2)


  console.log(yy);

  const levels = [...document.querySelectorAll(".progress-bar__level")];
  lastSlideNumber.textContent = numberOfElements;

  const sueta = document.querySelectorAll('.advantages__image-container');

  levels.map((item, i) => {
    item.addEventListener("click", () => {


      let position = i;

      hideTabContent();
      showTabContent(position);

     // sueta[i].scrollIntoView({behavior: "smooth",})


      if (!item.classList.contains("progress-bar__level_red")) {
        for (position; position >= 1; position--) {
          levels[position].classList.add("progress-bar__level_red");
        }

        window.scrollBy(0, sueta[i].getBoundingClientRect().top)
      } else {
        if (position < levels.length - 1 && item.nextSibling.classList.contains("progress-bar__level_red")) {
          for (position; position < levels.length - 1; position++) {
            levels[position + 1].classList.remove("progress-bar__level_red");

          }

          //console.log(sueta[i].getBoundingClientRect().height);

          //console.log(sueta[i].getBoundingClientRect())
         // const ar = i + 1
          //console.log(ar);
        // window.scrollTo(0, yy + (748 * i))
        }
      }

      currentSlideNumber.textContent = i + 1;
    });
  });






  document.addEventListener("scroll", () => {
    sueta.forEach((item, i) => {
      const scrollPositionY  = item.getBoundingClientRect().y

      if(scrollPositionY <= 250) {
        hideTabContent();
        showTabContent(i);

        levels[i].classList.add("progress-bar__level_red");
        currentSlideNumber.textContent = i + 1;
      } else {
        if (i === 0) return
        levels[i].classList.remove("progress-bar__level_red");
      }
    })
  });


};

export default initSlider;
