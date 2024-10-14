// ==UserScript==
// @name        Human Benchmark Cheats
// @namespace   Violentmonkey Scripts
// @match       https://humanbenchmark.com/*
// @grant       none
// @version     1.0
// @author      AWAQ
// @description 2022/12/13 上午11:05:22
// ==/UserScript==
// document.execCommand() 不需要显式指定插入的位置，是因为它是基于 当前选区（current selection）进行操作的，而选区的位置由浏览器的默认行为或用户的操作决定。

// 1. 基于选区进行操作
// execCommand() 操作的前提是浏览器已经知道用户在页面中选中了哪些元素或文本。浏览器通过 Selection 对象和光标位置来管理选区，因此当你调用 execCommand() 时，它默认对当前选区执行命令。

// 当你调用 document.execCommand('insertText', false, 'some text'); 时，文本会被插入到当前选区的光标位置。
// 如果在调用 execCommand() 之前没有明确的选区或光标位置，浏览器可能会忽略该命令或将内容插入到文档的默认位置（如 document.body）。

// ** execCommand() 可以很好的模拟用户在页面中输入文本的行为，但需要注意的是，它可能受到浏览器的限制，并且不是所有浏览器都支持该命令。**
// simulateKeyPress 可以很好的模拟到键盘的点击事件，但是并不能模拟到键盘输入
// 如果是input框，使用execCommand() 或者 直接修改 value
// 如果单纯触发键盘事件，可以使用 KeyboardEvent
window.addEventListener("load", function () {
    if (
      window.location.href == "https://humanbenchmark.com/tests/number-memory"
    ) {
      let cnt = 0;
      function getNumbers() {
        if (cnt == 40) {
          return;
        }
        if (document.getElementsByClassName("big-number").length != 0) {
          let number = new Array();
          for (let i of document.getElementsByClassName("big-number ")[0]
            .innerText) {
            number.push(i);
            console.log(i);
          }
          console.log(number);
          inputNumbers(number);
          cnt++;
        } else {
          setTimeout(() => {
            getNumbers();
          }, 1);
        }
      }
      function simulateKeyPress(character, element) {
        let keydownEvent = new KeyboardEvent("keydown", {
          key: character,
          char: character,
          bubbles: true,
        });
        let keyupEvent = new KeyboardEvent("keyup", {
          key: character,
          char: character,
          bubbles: true,
        });
        element.dispatchEvent(keydownEvent);
        element.dispatchEvent(keyupEvent);
      } // 实际上并不能正确的输入
      function inputNumbers(numbers) {
        let input = document.getElementsByTagName("input")[0];
        if (input) {
          input.focus(); // 确保输入框获得焦点
          numbers.forEach((number) => {
            // 使用 execCommand 插入每一个字符
            document.execCommand("insertText", false, number);
          });
          document.getElementsByClassName("css-de05nr e19owgy710")[0].click();
          document.getElementsByClassName("css-de05nr e19owgy710")[0].click();
          getNumbers();
        } else {
          // 将 inputNumbers 函数作为回调传递给 setTimeout
          setTimeout(() => inputNumbers(numbers), 100);
        }
      }
      let startbtn = document.querySelector("button.css-de05nr.e19owgy710");
      startbtn.click();
      getNumbers();
    }
  });
  
