// ==UserScript==
// @name        Huma
// @namespace   Violentmonkey Scripts
// @match       https://humanbenchmark.com/*
// @grant       none
// @version     1.0
// @author      AWAQ
// @description 2024
// ==/UserScript==

window.addEventListener("load", function () {
    if (window.location.href === "https://humanbenchmark.com/tests/verbal-memory") {
        
        // 获取开始按钮并点击
        let startBtn = document.querySelector('.css-de05nr.e19owgy710');
        if (startBtn) {
            startBtn.click();
        }

        // 获取看到的按钮和新单词按钮
        let seen = document.getElementsByClassName('css-de05nr e19owgy710')[0]; // 假设这是"已见"按钮
        let newWord = document.getElementsByClassName('css-de05nr e19owgy710')[1]; // 假设这是"新单词"按钮
        let MAP = new Map();
        let cnt = 0;

        // 定义一个函数来处理新单词的点击
        function handleWord() {
            let text = document.querySelector('.word').innerText; // 获取当前单词
            console.log(text);
            if (!MAP.has(text)) {
                MAP.set(text, 1); // 记录已见单词
                if (newWord) {
                    newWord.click(); // 点击新单词按钮
                }
            } else {
                if (seen) {
                    seen.click(); // 点击已见按钮
                }
            }

            cnt++;

            // 限制循环次数或添加延迟以避免阻塞
            if (cnt < 100000) {
                setTimeout(handleWord, 10); // 每秒执行一次
            }
        }

        // 启动单词处理函数
        setTimeout(handleWord, 1000); // 延迟启动，确保页面元素已加载
    }
});
