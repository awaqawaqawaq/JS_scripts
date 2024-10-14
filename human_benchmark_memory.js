// ==UserScript==
// @name        Human Benchmark Cheats
// @namespace   Violentmonkey Scripts
// @match       https://humanbenchmark.com/*
// @grant       none
// @version     1.0
// @author      AWAQ
// @description 2024
// ==/UserScript==

window.addEventListener("load", function () {
  if (window.location.href == "https://humanbenchmark.com/tests/memory") {
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
          if (element.classList.contains("active")) {
            elementArray.push(element);
            console.log(element);
            setTimeout(() => {
              simulateMouseEvent(element);
            }, 2000);
          }
        }
      });
    });

    let elementArray = [];
    const config = { attributes: true, childList: true, subtree: true };
    let elementNode = document.querySelector(
      ".memory-test.css-aix2he.e19owgy77"
    );
    let startBtn = document.querySelector(".css-de05nr.e19owgy710");

    observer.observe(elementNode, config);
    simulateMouseEvent(startBtn);
  }
});
