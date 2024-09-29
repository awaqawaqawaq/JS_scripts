// ==UserScript==
// @name        Human Benchmark Cheats
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

  // 当观察到变动时执行的回调函数
  const callback = function (mutationsList, observer) {
    for (let mutation of mutationsList) {
      if (mutation.type === "childList") {
        console.log(mutation.targetNode);
        console.log("A child node has been added or removed.");
      } else if (mutation.type === "attributes") {
        console.log("The " + mutation.attributeName + " attribute was modified.");
      }
    }
  };

  const targetNode = getTargetNode();
  if (!targetNode) {
    console.error("Target node not found!");
    return; // Exit if the target node doesn't exist
  }

  // 创建一个观察器实例并传入回调函数
  const observer = new MutationObserver(callback);
  // // 以上述配置开始观察目标节点
  observer.observe(targetNode, config);

  // 之后，可停止观察
});
