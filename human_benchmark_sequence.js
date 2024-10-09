// ==UserScript==
// @name        Huma
// @namespace   Violentmonkey Scripts
// @match       https://humanbenchmark.com/*
// @grant       none
// @version     1.0
// @author      AWAQ
// @description 2022/12/13 上午11:05:22
// ==/UserScript==

window.addEventListener("load", function () {
if (window.location.href === "https://humanbenchmark.com/tests/aim") {
    const fullnav = document.querySelector("div.full-nav");
    let stopped = false;

    function addStartBtn() {
        const startBtn = document.createElement("button");
        startBtn.style.fontWeight = "bold";
        startBtn.style.color = "#333333";
        startBtn.innerText = "Start";
        startBtn.onclick = () => {
            console.log("Started");
            shootLoop();
            setTimeout(() => {
                const secondaryBtn = document.getElementsByClassName('secondary css-qm6rs9 e19owgy710')[0];
                if (secondaryBtn) secondaryBtn.click();
            }, 4);
            startBtn.remove();
        };
        fullnav.append(startBtn);
    }

    function shootLoop() {
        const targetButton = document.getElementsByClassName('css-ad1j3y e6yfngs2')[0];
        if (targetButton) {
            simulateMouseEvent(targetButton);
            shootLoop();
        } else {
            setTimeout(shootLoop, 1);
        }
    }

    function simulateMouseEvent(element) {
        const box = element.getBoundingClientRect();
        const coordX = box.left + (box.right - box.left) / 2;
        const coordY = box.top + (box.bottom - box.top) / 2;
        element.dispatchEvent(new MouseEvent("mousedown", {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: coordX,
            clientY: coordY,
            button: 0
        }));
        element.dispatchEvent(new MouseEvent("mouseup", {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: coordX,
            clientY: coordY,
            button: 0
        }));
    }

    addStartBtn();
}

  
  });