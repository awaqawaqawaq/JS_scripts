let simulateMouseEvent = (element) => {
  element.dispatchEvent(
    new MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
      button: 0,
    })
  );
  element.dispatchEvent(
    new MouseEvent("mouseup", {
      bubbles: true,
      cancelable: true,
      button: 0,
    })
  );
};

let observer = new MutationObserver((mutationList) => {
  mutationList.forEach((mutation) => {
    if (mutation.type === "attributes") {
      let element = mutation.target;
      let num = parseInt(document.querySelectorAll('.css-dd6wi1 span')[1].innerText);
      if (element.classList.contains("active")) {
        console.log(num);
        elementArray.push(element);
        console.log(element);
        if(elementArray.length == num){
          setTimeout(() => {
            elementArray.forEach((element) => {
              simulateMouseEvent(element);
            })
            elementArray = [];//注意异步编程，不能写在外面
          },2000)
        }
      }
    }
  });
});

const config = { attributes: true, childList: true, subtree: true };
let startBtn = document.querySelector(".css-de05nr.e19owgy710");
simulateMouseEvent(startBtn);
let elementArray = [];
let elementNode = document.querySelector(
  ".squares"
);
observer.observe(elementNode, config);