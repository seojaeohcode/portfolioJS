let HeadText = document.querySelector('#HeadText');

const menu = document.querySelector('#menu');
let menubar = document.querySelector('#menubar');
let isMenu = false;

let next = document.querySelector('#next');
let prev = document.querySelector('#prev');
let allowSkip = true;

let imgSet = document.querySelectorAll('.recoItem a img');

// 인용사진 슬라이더
const quoteAnim = ['../asset/quote/1.jpg', '../asset/quote/2.jpg', '../asset/quote/3.jpg', '../asset/quote/4.jpg', '../asset/quote/5.jpg', '../asset/quote/6.jpg', '../asset/quote/7.jpg', '../asset/quote/8.jpg', '../asset/quote/9.jpg', '../asset/quote/10.jpg']
let j = 0;
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

    $(".slideArea>img").animate({ opacity: '0' }, 500,
        function () {
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
    $(".slideArea>img").animate({ opacity: '0' }, 500,
        function () {
            console.log(j);
            j--;
            if (j < 0) {
                j = 9;
            }
            console.log(j);
            document.querySelector('.slideArea>img').src = quoteAnim[j];
        });

    $(".slideArea>img").animate({ opacity: '1' }, 500,
        function () {
            $('.slideArea>img').clearQueue();
        });
});

for (let i = 0; i < imgSet.length; i++) {
    imgSet[i].addEventListener('mouseover', function () {
        imgSet[i].classList.add('buzzAnim');
    });
    imgSet[i].addEventListener('mouseout', function () {
        imgSet[i].classList.remove('buzzAnim');
    });
}