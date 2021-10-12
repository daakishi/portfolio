const pagetopBtn = document.querySelector('#page-top');
  pagetopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const targetElement = document.querySelectorAll(".animationTarget");
console.log("画面の高さ", window.innerHeight)
document.addEventListener("scroll", function () {
  for(let i = 0; i < targetElement.length; i++){
    const getElementDistance = targetElement[i].
    getBoundingClientRect().top + targetElement[i].clientHeight *.6

    if(window.innerHeight > getElementDistance ){
      targetElement[i].classList.add("show")
    }
  }
  console.log("animationTarget")
})
