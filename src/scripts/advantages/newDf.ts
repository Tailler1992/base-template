import getRandomColor from "./getRandomColor.ts";

const newDf = () => {


  let cords: number[] = [];
  const btns = document.querySelectorAll(".btnT");
  const blocks = document.querySelectorAll(".block");
  const wrapper = document.querySelector(".anchors");
  const widthGap = getComputedStyle(wrapper).gap.match(/\d/g).join('');

  const  positionFirstElement = wrapper.offsetTop;


  blocks.forEach((block, i) => {
    block.style.backgroundColor = getRandomColor();

    const rect = block.getBoundingClientRect();
    const heightCard = rect.height;

    cords[i] = positionFirstElement + heightCard * i + (widthGap * i);


    btns[i].addEventListener("click", () => {
      window.scrollTo({top: cords[i], behavior: "smooth"});
    });
  });
};

export default newDf;
