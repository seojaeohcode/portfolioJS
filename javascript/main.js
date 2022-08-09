let HeadText = document.querySelector('#HeadText');
const menu = document.querySelector('#menu');
let menubar = document.querySelector('#menubar');
let isMenu = false;

// 헤더 텍스트
const textAnim = 
['M','Y','\u00a0','B','o','o','k','&','L','e','c','t','u','r','e',]
let i = 0;
console.log(HeadText);

setInterval(() => {
    if(i == 0){
        HeadText.innerText = textAnim[0];
        i++;
    }
    else if(i < textAnim.length){
        HeadText.innerText += textAnim[i];
        i++;
    }
    else if(i>=textAnim.length){
        i=0;
        HeadText.innerText = '\u00a0';
    }
}, 500);

// 메뉴 버튼
menu.addEventListener('click', function() {
    if(isMenu == false){
        // menubar.style.display = 'block';
        $('#menubar').slideDown(1000);
        isMenu = true;
    }
    else if(isMenu == true){
        // menubar.style.display = 'none';
        $('#menubar').slideUp(1000);
        isMenu = false;
    }
})