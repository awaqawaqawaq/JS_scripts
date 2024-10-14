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
    if (window.location.href === "https://humanbenchmark.com/tests/chimp") {
        function loopTilEnd() {
            
            let i = 1;
            let startButton = document.querySelector('.css-de05nr.e19owgy710');
            if (startButton) {
                    startButton.click();
                } 
            else {
                return ;
            }
            while(true){
                let cell = document.querySelector(`[data-cellnumber="${i}"]`);
                if(!cell){
                    break;
                }
                else{
                    cell.click();
                    i++;
                }
            }
            loopTilEnd();
        }

        loopTilEnd();
    }
});
