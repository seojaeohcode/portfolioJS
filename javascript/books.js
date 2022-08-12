let HeadText = document.querySelector('#HeadText');

const menu = document.querySelector('#menu');
let menubar = document.querySelector('#menubar');
let isMenu = false;

let data = [];
let dataIndex = 0;
let delBtn = 0;
let checkBtn = 0;
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

// 새로고침 후 화면유지
if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let current = localStorage.getItem(key);
        // console.log(current);
        let array = current.split(",");
        // console.log(array);

        let div = document.createElement('div');
        div.style.width = '90%';
        div.style.margin = '0 auto';
        div.style.textAlign = 'center';
        div.style.backgroundColor = '#F5E8C7';
        div.style.borderRadius = '10px';
        div.style.marginTop = '4vw';
        div.style.fontSize = '5vw';
        div.style.color = 'black';
        div.style.fontWeight = 'bold';

        let numberRing = document.createElement('p');
        let num = array[4];
        let numberRingTextNode = document.createTextNode(num);
        numberRing.style.paddingTop = '3vw';
        numberRing.appendChild(numberRingTextNode);

        let bookImg = document.createElement('img');
        bookImg.src = array[0];
        bookImg.style.width = '80vw';
        bookImg.style.marginTop = '4vw';


        let p1 = document.createElement('p');
        let p1TextNode = document.createTextNode(array[1]);
        p1.appendChild(p1TextNode);
        let p2 = document.createElement('p');
        let p2TextNode = document.createTextNode(array[2]);
        p2.appendChild(p2TextNode);

        let form = document.createElement('form');
        let checkbox = document.createElement('input');
        checkbox.setAttribute("type", "checkbox");
        
        if(array[3] == true){
            console.log(array[3]);
            checkbox.setAttribute("checked", true);
            document.getElementById("checkbox").checked = true;
        }
        if(array[3] == false){
            checkbox.setAttribute("checked", false);
            console.log(array[3]);
        }
        
        checkbox.id = "read";
        let span = document.createElement('span');
        let spanTxt = document.createTextNode('read: ');
        span.appendChild(spanTxt);
        form.appendChild(span);
        form.appendChild(checkbox);

        let Delete = document.createElement('button');
        Delete.id = "DeleteBook"
        Delete.textContent = '삭제';

        div.appendChild(numberRing);
        div.appendChild(bookImg);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(form);
        div.appendChild(Delete);
        document.querySelector('main').appendChild(div);

        delBtn = document.querySelectorAll('#DeleteBook');
        // console.log(delBtn);
    }

    for (let i = 0; i < delBtn.length; i++) {
        delBtn[i].addEventListener("click", removeItem);
    }
    
    for (let i = 0; i < checkBtn.length; i++) {
        checkBtn[i].addEventListener("click", checkItem);
    }
}

// 새입력
document.querySelector('#submit').addEventListener('click', function () {
    let img = document.querySelector('#bookImage').files[0];
    let title = document.querySelector('#title').value;
    let auther = document.querySelector('#auther').value;
    let reading = false;
    // 빈 값 체크
    if (img == '' || title == '' || auther == '') {
        alert('다시 입력해주세요!')
    } else {
        // 빈 값 만들기 
        document.querySelector('#bookImage').value = '';
        document.querySelector('#title').value = '';
        document.querySelector('#auther').value = '';

        let url = URL.createObjectURL(img);
        // 데이터삽입
        let book = [url, title, auther, reading, dataIndex];
        dataIndex++;
        data.push(book);

        let div = document.createElement('div');
        div.style.width = '90%';
        div.style.margin = '0 auto';
        div.style.textAlign = 'center';
        div.style.backgroundColor = '#F5E8C7';
        div.style.borderRadius = '10px';
        div.style.marginTop = '4vw';
        div.style.fontSize = '5vw';
        div.style.color = 'black';
        div.style.fontWeight = 'bold';

        let numberRing = document.createElement('p');
        let num = dataIndex - 1;
        let numberRingTextNode = document.createTextNode(num);
        numberRing.style.paddingTop = '3vw';
        numberRing.appendChild(numberRingTextNode);

        let bookImg = document.createElement('img');
        bookImg.src = url;
        bookImg.style.width = '80vw';
        bookImg.style.marginTop = '4vw';


        let p1 = document.createElement('p');
        let p1TextNode = document.createTextNode(title);
        p1.appendChild(p1TextNode);
        let p2 = document.createElement('p');
        let p2TextNode = document.createTextNode(auther);
        p2.appendChild(p2TextNode);

        let form = document.createElement('form');
        let checkbox = document.createElement('input');
        checkbox.setAttribute("type", "checkbox");
        checkbox.id = "read";
        let span = document.createElement('span');
        let spanTxt = document.createTextNode('read: ');
        span.appendChild(spanTxt);
        form.appendChild(span);
        form.appendChild(checkbox);

        let Delete = document.createElement('button');
        Delete.id = "DeleteBook"
        Delete.textContent = '삭제';

        div.appendChild(numberRing);
        div.appendChild(bookImg);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(form);
        div.appendChild(Delete);
        document.querySelector('#itemList').appendChild(div);

        localStorage.setItem(`${dataIndex - 1}`, data[dataIndex - 1]);
        delBtn = document.querySelectorAll('#DeleteBook');
        checkBtn = document.querySelectorAll('#read');
        console.log(delBtn);
        console.log(checkBtn);

        for (let i = 0; i < delBtn.length; i++) {
            delBtn[i].addEventListener("click", removeItem);
        }
        for (let i = 0; i < checkBtn.length; i++) {
            checkBtn[i].addEventListener("click", checkItem);
            // console.log(checkBtn[i].checked);
        }
    }
});

function clearLocal() {
    localStorage.clear();
    console.log('삭제!');
}

function log() {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        console.log(key);
        console.log(localStorage.getItem(key));
    }
}

function removeItem(e) {
    const n = e.target.parentNode;
    // 지운 아이템의 넘버링 가져오기 
    let delItemNumber = n.childNodes[0].textContent;
    localStorage.removeItem(`${delItemNumber}`);
    n.remove();
}

// 체크박스 변경
function checkItem(e) {
    const n = e.target.parentNode.parentNode;
    // 체크 아이템의 넘버링 가져오기 
    let chkNumber = n.childNodes[0].textContent;
    console.log(chkNumber);
    let chk = !(e.target.checked);
    // console.log(chk);
    let current = localStorage.getItem(chkNumber);
    // console.log(current);
    let array = current.split(',');
    console.log(array);
    array[3] = chk;
    localStorage.setItem(`${chkNumber}`, array);
    console.log(localStorage.getItem(chkNumber));
}

