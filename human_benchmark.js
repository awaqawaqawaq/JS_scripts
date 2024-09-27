// ==UserScript==
// @name        Human Benchmark Cheats
// @namespace   Violentmonkey Scripts
// @match       https://humanbenchmark.com/*
// @grant       none
// @version     1.0
// @author      AWAQ
// ==/UserScript==

window.addEventListener("load", function () {
    const simulateMouseEvent = (event, element, x, y) => {
        element.dispatchEvent(new MouseEvent(event, {
            bubbles: true,
            cancelable: true,
            clientX: x,
            clientY: y,
            button: 0
        }));
    };

    const checkForElement = (callback) => {
        let element = document.querySelector(".view-go.e18o0sx0.css-saet2v.e19owgy77");
        if (element) {
            callback(element);
            callback(element);
        } else {
            setTimeout(() => checkForElement(callback), 0); // 每100毫秒检查一次
        }
    };

    const href = window.location.href;
    if (href.includes("https://humanbenchmark.com/tests/reactiontime")) {
        let butt = document.querySelector(".anim-slide-fade-in");
        if (butt) {
            const x = butt.getBoundingClientRect().left + (butt.getBoundingClientRect().width / 2);
            const y = butt.getBoundingClientRect().top + (butt.getBoundingClientRect().height / 2);
            this.setTimeout(()=>butt.dispatchEvent(new MouseEvent("mousedown", {
                bubbles: true,
                cancelable: true,
            })), 1000);
            // 监测元素出现并进行点击
            checkForElement((element) => simulateMouseEvent("mousedown", element, x, y));
        }
    }
});
