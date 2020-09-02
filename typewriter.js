"use strict";
const typeWritten = document.querySelector(".typewritten");
const text = typeWritten.textContent;
let i = 0;
typeWrite();

function typeWrite() {
    setTimeout(()=> {
        if(i !==text.length-1) {
            let newText = text.substring(0,i+1);
            typeWritten.textContent = newText;
            i++;
            typeWrite();
        }
    }, Math.floor(Math.random()*600)+300);
}
