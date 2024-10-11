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
    let startbtn = document.querySelector("button.css-de05nr.e19owgy710");
    let fullnav = document.querySelector("div.full-nav");

    waitForMemoryBoxes();

    function waitForMemoryBoxes() {
      if (document.getElementsByClassName(" css-lxtdud eut2yre1").length != 0) {
        if (!document.getElementById("stopBtn")) {
          addStopBtn();
        }

        assignIds();
      } else {
        setTimeout(() => {
          waitForMemoryBoxes();
        }, 1);
      }
    }

    function assignIds() {
      document
        .getElementsByClassName(" css-lxtdud eut2yre1")
        .forEach((element, index) => {
          element.id = "box" + index;
        });
      getHighlightedBoxesIds();
    }

    function getHighlightedBoxesIds() {
      boxes = new Array();
      if (
        document.getElementsByClassName("active css-lxtdud eut2yre1").length !=
        0
      ) {
        document
          .getElementsByClassName("active css-lxtdud eut2yre1")
          .forEach((element) => {
            boxes.push(element.id);
          });
        waitForClickingAndClick();
      } else {
        setTimeout(() => {
          getHighlightedBoxesIds();
        }, 1);
      }
    }

    function waitForClickingAndClick() {
      if (
        document.getElementsByClassName("active css-lxtdud eut2yre1").length ==
        0
      ) {
        if (stopped == false) {
          boxes.forEach((element) => {
            var simulateMouseEvent = function (
              element,
              eventName,
              coordX,
              coordY
            ) {
              element.dispatchEvent(
                new MouseEvent(eventName, {
                  view: window,
                  bubbles: true,
                  cancelable: true,
                  clientX: coordX,
                  clientY: coordY,
                  button: 0,
                })
              );
            };

            var theButton = document.getElementById(element);

            var box = theButton.getBoundingClientRect(),
              coordX = box.left + (box.right - box.left) / 2,
              coordY = box.top + (box.bottom - box.top) / 2;
            simulateMouseEvent(theButton, "mousedown", coordX, coordY);
            simulateMouseEvent(theButton, "mouseup", coordX, coordY);
          });
          waitForLevel(
            document.getElementsByClassName("css-dd6wi1")[0].children[1]
              .innerText
          );
        }
      } else {
        setTimeout(() => {
          waitForClickingAndClick();
        }, 1);
      }
    }

    function waitForLevel(oldLvl) {
      level =
        document.getElementsByClassName("css-dd6wi1")[0].children[1].innerText;
      if (level != oldLvl) {
        if (stopped == false) {
          waitForMemoryBoxes();
        }
      } else {
        setTimeout(() => {
          waitForLevel(level);
        }, 1);
      }
    }
  }
});
