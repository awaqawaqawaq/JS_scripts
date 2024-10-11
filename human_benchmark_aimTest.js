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
  if (window.location.href === "https://humanbenchmark.com/tests/aim") {
      let node=document.querySelector('.desktop-only');
      let observer=new MutationObserver(function(mutationsList){

        //   if(mutationsList.length!=0){
        //       let element=document.querySelector('[data-aim-target="true"]');
        //       if(element){
        //         simulateMouseEvent(element);
        //     }else{
        //       observer.observe(node,{childList:true,subtree:true});

        //     }}   
        //这种方式无法确保元素已经成功渲染，会导致出现“暂停”的行为
        //最好的方式是利用 foreach 循环，确保元素成功加载
        //foreach 也会导致“暂停”
            mutationsList.forEach(function(mutation){
                    // console(mutation.oldValue);
                    let element=document.querySelector('[data-aim-target="true"]');
                    if(element)
                    simulateMouseEvent(element);
                
            })
              

        });
        observer.observe(node,{childList:true,subtree:true});
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



  }




});
