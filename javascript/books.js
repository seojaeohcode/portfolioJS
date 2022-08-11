let HeadText = document.querySelector('#HeadText');

const menu = document.querySelector('#menu');
let menubar = document.querySelector('#menubar');
let isMenu = false;

let data = [];
let dataIndex = 0;
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

document.querySelector('#onOff').
    addEventListener('click', function () {

        $("#phoneStart").animate({ opacity: '0' }, 500,
            function () {
                document.querySelector('#phoneStart').style.display = 'none';
                document.querySelector('#inputApp').style.display = 'block';
                document.querySelector('#inputApp').style.opacity = '0';

                $("#inputApp").animate({ opacity: '1' }, 500,
                    function () {
                        // $("#bookImage").attr("required",true);
                        // $("#title").attr("required",true);
                        // $("#auther").attr("required",true);
                        // $("#checkbox").attr("required",true);
                    });
            });
    });

let today = new Date();
document.querySelector('#mobileDate').innerText = today.getHours() + ":" + today.getMinutes();

setInterval(() => {
    today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();

    hour = hour >= 10 ? hour : "0" + hour;
    minute = minute >= 10 ? minute : "0" + minute;

    document.querySelector('#mobileDate').innerText = hour + ":" + minute;
}, 1000);



document.querySelector('#submit').addEventListener('click', function () {
    let img = document.querySelector('#bookImage').value;
    let title = document.querySelector('#title').value;
    let auther = document.querySelector('#auther').value;
    // 빈 값 체크
    if (img == '' || title == '' || auther == '') {

    } else {
        document.querySelector('#bookImage').value = '';
        document.querySelector('#title').value = '';
        document.querySelector('#auther').value = '';

        let book = [img, title, auther, dataIndex];
        dataIndex++;

        data.push(book);

        
    }
});