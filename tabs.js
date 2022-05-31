'use strict';
// console.time() 
let tab = document.querySelectorAll('.tabs');
let content = document.querySelectorAll('.content');
let tabContent = document.querySelector('.tab-content'); 

tabContent.style.gridTemplateColumns = `repeat(${tab.length}, 1fr)`;
tab[localStorage.getItem('save')].classList.remove('tabs-border');
content[localStorage.getItem('save')].classList.remove('off');

function numb(value, it) {
    ppp();
    content.forEach((item, i) => {
        item.classList.add('off');
        if (value === i) {
            localStorage.setItem('save', i);
            it.classList.remove('tabs-border');
            item.classList.remove('off');
        }
    })
}

function ppp(){
    tab.forEach((item) => {
        item.classList.add('tabs-border');
    })
}

tab.forEach((item,i) => {
    item.addEventListener('click', () => {
        numb(i, item);
        
    });
    
})
// console.timeEnd() 