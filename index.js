const title = document.querySelector('#title');

const CLICKED_CLASS = 'clicked';

function handleClick(){
  title.classList.toggle(CLICKED_CLASS);

  /* const hasClass = title.classList.contains(CLICKED_CLASS);

  if(hasClass){
    title.classList.remove(CLICKED_CLASS);
  } else {
    title.classList.add(CLICKED_CLASS);
  } */
}

function init(){
  title.addEventListener('click', handleClick);
}
init();

// handleResize()라고 적으면 함수부터 호출함.
// handleResize라고 적으면 resize될 때 함수를 호출함.
// window.addEventListener("resize", handleResize());
