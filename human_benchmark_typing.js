// ==UserScript==
// @name        Human Benchmark Cheats
// @namespace   Violentmonkey Scripts
// @match       https://humanbenchmark.com/*
// @grant       none
// @version     1.0
// @author      AWAQ
// @description 2024
// ==/UserScript==

// ** execCommand() 可以很好的模拟用户在页面中输入文本的行为，但需要注意的是，它可能受到浏览器的限制，并且不是所有浏览器都支持该命令。**
// simulateKeyPress 可以很好的模拟到键盘的点击事件，但是并不能模拟到键盘输入
// 如果是input框，使用execCommand() 或者 直接修改 value
// 如果单纯触发键盘事件，可以使用 KeyboardEvent
window.addEventListener("load", function () {
    
    if(window.location.href=="https://humanbenchmark.com/tests/typing"){
        function similateKeyPress(character,element) {
            let keydownEvent = new KeyboardEvent('keydown', {
                key: character,
                bubbles: true,
                cancelable: true,
            })
            let keyupEvent = new KeyboardEvent('keyup', {
                key: character,
                bubbles: true,
                cancelable: true,
            })
            element.dispatchEvent(keydownEvent);
            element.dispatchEvent(keyupEvent);
        }
        
        let spans=document.querySelectorAll('[tabindex="1"] span');
        // let spansText=Array.from(spans).map(element=>element.innerText);
        // spansText.forEach((text,index)=>{
        //     similateKeyPress(text,spans[index]);
        // })
        spans.forEach((span,index)=>{
            span.classList.toggle('right');
        })
    }

})