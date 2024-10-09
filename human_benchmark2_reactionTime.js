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
    // 选择需要观察变动的节点
    const getTargetNode = () => document.querySelector(".anim-slide-fade-in");
    // 观察器的配置（需要观察什么变动）
    const config = { attributes: true, childList: true, subtree: true };
    // 创建一个观察器实例
    const observer = new MutationObserver(callback);
    // 当观察到变动时执行的回调函数
    function callback(mutationsList, observer) {
      for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
          console.log(mutation.target);
          console.log("A child node has been added or removed.");
          // 暂停观察器，避免死循环
          observer.disconnect();
          // 模拟鼠标 mousedown 事件
          simulateMouseDown(mutation.target);
          // 点击完成后重新启用观察器
          observer.observe(getTargetNode(), config);
        } else if (mutation.type === "attributes") {
          console.log("The " + mutation.attributeName + " attribute was modified.");
        }
      }
    }
  
    const targetNode = getTargetNode();
    if (!targetNode) {
      console.error("Target node not found!");
      return; // Exit if the target node doesn't exist
    }
    // 开始观察目标节点
    observer.observe(targetNode, config);
    // 模拟鼠标 mousedown 事件
    function simulateMouseDown(target) {
      if (!target) return;
      // 创建和触发 mousedown 事件
      const mousedownEvent = new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      target.dispatchEvent(mousedownEvent);
  
      console.log("Simulated a mousedown event on the target element.");
    }
  
  });