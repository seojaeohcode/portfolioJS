let HeadText = document.querySelector('#HeadText');

const menu = document.querySelector('#menu');
let menubar = document.querySelector('#menubar');
let isMenu = false;

let next = document.querySelector('#next');
let prev = document.querySelector('#prev');
let allowSkip = true;

console.log(next);
console.log(prev);

// 인용사진 슬라이더
const quoteAnim = ['../asset/quote/1.jpg', '../asset/quote/2.jpg', '../asset/quote/3.jpg', '../asset/quote/4.jpg', '../asset/quote/5.jpg', '../asset/quote/6.jpg', '../asset/quote/7.jpg', '../asset/quote/8.jpg', '../asset/quote/9.jpg', '../asset/quote/10.jpg']
let j = 1;
document.querySelector('.slideArea>img').src = quoteAnim[0];

// 헤더 텍스트
const textAnim =
    ['M', 'Y', '\u00a0', 'B', 'o', 'o', 'k', '&', 'L', 'e', 'c', 't', 'u', 'r', 'e',]
let i = 0;


setInterval(() => {
    if (i == 0) {
        HeadText.innerText = textAnim[0];
        i++;
    }
    else if (i < textAnim.length) {
        HeadText.innerText += textAnim[i];
        i++;
    }
    else if (i >= textAnim.length) {
        i = 0;
        HeadText.innerText = '\u00a0';
    }
}, 500);

// 메뉴 버튼
menu.addEventListener('click', function () {
    if (isMenu == false) {
        // menubar.style.display = 'block';
        $('#menubar').slideDown(1000);
        isMenu = true;
    }
    else if (isMenu == true) {
        // menubar.style.display = 'none';
        $('#menubar').slideUp(1000);
        isMenu = false;
    }
});

next.addEventListener('click', function () {

    $(".slideArea>img").animate({ opacity: '0' },500,
    function() {
        j++;
        if (j > 9) {
            j = 0;
        }
        document.querySelector('.slideArea>img').src = quoteAnim[j];
    });

    $(".slideArea>img").animate({ opacity: '1' }, 500,
        function () {
            $('.slideArea>img').clearQueue();
        });
});

prev.addEventListener('click', function () {
    j--;
    if (j < 0) {
        j = 9;
    }

    $(".slideArea>img").fadeOut();
    document.querySelector('.slideArea>img').src = quoteAnim[j];
    $(".slideArea>img").fadeIn();
});
