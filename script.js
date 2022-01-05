let popup = document.getElementById("popup");
let popup_btn = document.getElementById("popup_btn");
const burger_btn = document.getElementById("burger_btn");
const burger_menu = document.getElementById("burger_menu");
const burger_sing = document.getElementById("burger_sing");
//const sing_in = document.getElementById("sign_in");
//const sing_up = document.getElementById("sign_up");
const body = document.body;


function toggleOpenClass(){
  burger_btn.classList.toggle("open");
  burger_menu.classList.toggle("open");
  burger_sing.classList.toggle("open");
  if(burger_menu.classList.contains("open")){
    body.style.height = "100%";
    body.style.overflow = "hidden";
  } else {
    body.style.height = "auto";
    body.style.overflow = "auto";
  }
}

/*
if(burger_btn.classList.contains("open")){
  sing_in.style.backgroundColor = "black";
};
function enableBodyScroll() {
    if (document.readyState === "complete") {
      document.body.style.position = "";
      document.body.style.overflowY = "";
  
      if (document.body.style.marginTop) {
        const scrollTop = -parseInt(document.body.style.marginTop, 10);
        document.body.style.marginTop = "";
        window.scrollTo(window.pageXOffset, scrollTop);
      }
    } else {
      window.addEventListener("load", enableBodyScroll);
    }
  }
  
  function disableBodyScroll({ savePosition = false } = {}) {
    if (document.readyState === "complete") {
      if (document.body.scrollHeight > window.innerHeight) {
        if (savePosition)
          document.body.style.marginTop = `-${window.pageYOffset}px`;
        document.body.style.position = "fixed";
        document.body.style.overflowY = "scroll";
      }
    } else {
      window.addEventListener("load", () => disableBodyScroll({ savePosition }));
    }
  }
  
  function closePopup() {
    popup.classList.remove("open");
    enableBodyScroll();
  }
  
  function openPopup() {
    popup.classList.add("open");
    disableBodyScroll();
    disableBodyScroll({ savePosition: true });
  }
  
  popup_btn.addEventListener("click", openPopup);
  popup.addEventListener("click", closePopup);*/
  burger_menu.addEventListener("click", toggleOpenClass);
  burger_btn.addEventListener("click", toggleOpenClass);
  