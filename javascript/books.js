const mobile = window.matchMedia(`(max-width: 767px)`);
const tablet = window.matchMedia(`(min-width:768px) and (max-width:1024px)`);
const pc = window.matchMedia(`(min-width:1025px)`);

let HeadText = document.querySelector("#HeadText");

const menu = document.querySelector("#menu");
let menubar = document.querySelector("#menubar");
let isMenu = false;

let data = [];
// localStorage.setItem(`dataIndex`, localStorage.length);
let max = 0;
for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  let item = localStorage.getItem(key);
  let array = item.split(",");
  let newMax = Number(array[5]);
  if (max < newMax) {
    max = newMax;
  }
}

let dataIndex = max + 1;
let delBtn = 0;
let checkBtn = 0;
let datanum = 0;

let imgLink = 0;

// 헤더 텍스트
const textAnim = [
  "M",
  "Y",
  "\u00a0",
  "B",
  "o",
  "o",
  "k",
  "&",
  "L",
  "e",
  "c",
  "t",
  "u",
  "r",
  "e",
];
let i = 0;

setInterval(() => {
  if (i == 0) {
    HeadText.innerText = textAnim[0];
    i++;
  } else if (i < textAnim.length) {
    HeadText.innerText += textAnim[i];
    i++;
  } else if (i >= textAnim.length) {
    i = 0;
    HeadText.innerText = "\u00a0";
  }
}, 500);

// 메뉴 버튼
menu.addEventListener("click", function () {
  if (isMenu == false) {
    // menubar.style.display = 'block';
    $("#menubar").slideDown(1000);
    isMenu = true;
  } else if (isMenu == true) {
    // menubar.style.display = 'none';
    $("#menubar").slideUp(1000);
    isMenu = false;
  }
});

document.querySelector("#onOff").addEventListener("click", function () {
  $("#phoneStart").animate({ opacity: "0" }, 500, function () {
    document.querySelector("#phoneStart").style.display = "none";
    document.querySelector("#inputApp").style.display = "block";
    document.querySelector("#inputApp").style.opacity = "0";

    $("#inputApp").animate({ opacity: "1" }, 500, function () {
      // $("#bookImage").attr("required",true);
      // $("#title").attr("required",true);
      // $("#auther").attr("required",true);
      // $("#checkbox").attr("required",true);
    });
  });
});

let today = new Date();
document.querySelector("#mobileDate").innerText =
  today.getHours() + ":" + today.getMinutes();

setInterval(() => {
  today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();

  hour = hour >= 10 ? hour : "0" + hour;
  minute = minute >= 10 ? minute : "0" + minute;

  document.querySelector("#mobileDate").innerText = hour + ":" + minute;
}, 1000);

let sort = [];
let repeat = localStorage.length;

for (let i = 0; i < localStorage.length; i++) {
  // console.log("IN");
  // let key2 = localStorage.key(i);
  // let item2 = localStorage.getItem(key2);
  // let array = item2.split(",");
  // let min = Number(array[5]);

  // for (let j = localStorage.length - repeat; j < localStorage.length; j++) {
  //   let key = localStorage.key(j);
  //   let item = localStorage.getItem(key);
  //   let array = item.split(",");
  //   let newMin = Number(array[5]);

  //   if (min > newMin) {
  //     min = newMin;
  //   }
  // }
  // repeat--;
  // console.log("OUT");
  // sort.push(min);
  // console.log(sort);
  let key2 = localStorage.key(i);
  let item2 = localStorage.getItem(key2);
  let array = item2.split(",");
  let num = Number(array[5]);
  sort.push(num);
}

sort.sort();

// 새로고침 후 화면유지
if (localStorage.length > 0) {
  for (let i = 0; i < localStorage.length; i++) {
    for (let j = 0; j < localStorage.length; j++) {
      let key = localStorage.key(j);
      let current = localStorage.getItem(key);
      console.log(current);
      let array = current.split(",");

      let Itemnum = sort[i];
      if (array[5] == Itemnum) {
        // let key = localStorage.key(i);
        // let current = localStorage.getItem(key);
        // // console.log(current);
        // let array = current.split(",");
        // // console.log(array);

        let div = document.createElement("div");

        let numberRing = document.createElement("p");
        let num = array[5];
        let numberRingTextNode = document.createTextNode(num);

        let bookImg = document.createElement("img");
        bookImg.src = array[0] + "," + array[1];

        let p1 = document.createElement("p");
        let p1TextNode = document.createTextNode(array[2]);

        let p2 = document.createElement("p");
        let p2TextNode = document.createTextNode("Auther: " + array[3]);

        let form = document.createElement("form");
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        // console.log(array);
        checkbox.id = "read";
        // array[3] == true ? checkbox.checked = true : checkbox.checked = false;
        array[4] == "true"
          ? (checkbox.checked = true)
          : (checkbox.checked = false);

        let span = document.createElement("span");
        let spanTxt = document.createTextNode("Read: ");

        let Delete = document.createElement("button");
        Delete.id = "DeleteBook";
        Delete.textContent = "Delete";

        if (mobile.matches === true) {
          div.style.width = "90%";
          div.style.margin = "3vw auto";
          div.style.textAlign = "center";
          div.style.backgroundColor = "#F5E8C7";
          div.style.borderRadius = "10px";
          div.style.marginTop = "4vw";
          div.style.fontSize = "10vw";
          div.style.color = "black";
          // div.style.fontWeight = "bold";
          div.style.fontFamily = "'EB Garamond', serif";
          div.style.boxShadow = "0px 5px 5px white";

          // numberRing.style.paddingTop = "3vw";
          numberRing.style.display = "none";

          p1.style.paddingTop = "3vw";
          p1.style.textShadow = "0px 2px 2px gray";
          p2.style.textShadow = "0px 2px 2px gray";

          span.style.textShadow = "0px 2px 2px gray";
          // span.style.verticalAlign = "middle";

          bookImg.style.width = "80vw";
          bookImg.style.marginTop = "4vw";

          checkbox.style.width = "5.5vw";
          checkbox.style.height = "5.5vw";
          checkbox.style.verticalAlign = "middle";
          checkbox.style.marginBottom = "0.5rem";

          Delete.style.marginBottom = "4vw";
          Delete.style.width = "20vw";
          Delete.style.height = "10vw";
          Delete.style.border = "1px solid black";
          Delete.style.borderRadius = "1rem";
          Delete.style.background = "transparent";
          Delete.style.boxShadow = "0px 5px 5px black";
          Delete.style.fontSize = "6vw";
          Delete.style.fontFamily = "'EB Garamond', serif";
        } else if (tablet.matches === true) {
          div.style.width = "85%";
          div.style.margin = "3vw auto";
          div.style.textAlign = "center";
          div.style.backgroundColor = "#F5E8C7";
          div.style.borderRadius = "10px";
          div.style.marginTop = "4vw";
          div.style.fontSize = "8vw";
          div.style.color = "black";
          // div.style.fontWeight = "bold";
          div.style.fontFamily = "'EB Garamond', serif";
          div.style.boxShadow = "0px 5px 5px white";

          // numberRing.style.paddingTop = "3vw";
          numberRing.style.display = "none";

          p1.style.paddingTop = "3vw";
          p1.style.textShadow = "0px 2px 2px gray";
          p2.style.textShadow = "0px 2px 2px gray";

          span.style.textShadow = "0px 2px 2px gray";
          // span.style.verticalAlign = "middle";

          bookImg.style.width = "70vw";
          bookImg.style.marginTop = "4vw";

          checkbox.style.width = "5.5vw";
          checkbox.style.height = "5.5vw";
          checkbox.style.verticalAlign = "middle";
          checkbox.style.marginBottom = "0.5rem";

          Delete.style.marginBottom = "4vw";
          Delete.style.width = "20vw";
          Delete.style.height = "10vw";
          Delete.style.border = "1px solid black";
          Delete.style.borderRadius = "1rem";
          Delete.style.background = "transparent";
          Delete.style.boxShadow = "0px 5px 5px black";
          Delete.style.fontSize = "6vw";
          Delete.style.fontFamily = "'EB Garamond', serif";
        } else if (pc.matches === true) {
          div.style.width = "45%";
          div.style.margin = "3vw auto";
          div.style.textAlign = "center";
          div.style.backgroundColor = "#F5E8C7";
          div.style.borderRadius = "10px";
          div.style.marginTop = "4vw";
          div.style.fontSize = "4vw";
          div.style.color = "black";
          // div.style.fontWeight = "bold";
          div.style.fontFamily = "'EB Garamond', serif";
          div.style.boxShadow = "0px 5px 5px white";

          // numberRing.style.paddingTop = "3vw";
          numberRing.style.display = "none";

          p1.style.paddingTop = "3vw";
          p1.style.textShadow = "0px 2px 2px gray";
          p2.style.textShadow = "0px 2px 2px gray";

          span.style.textShadow = "0px 2px 2px gray";
          // span.style.verticalAlign = "middle";

          bookImg.style.width = "30vw";
          bookImg.style.marginTop = "4vw";

          checkbox.style.width = "3.5vw";
          checkbox.style.height = "3.5vw";
          checkbox.style.verticalAlign = "middle";
          checkbox.style.marginBottom = "0.5rem";

          Delete.style.marginTop = "2vw";
          Delete.style.marginBottom = "4vw";
          Delete.style.width = "15vw";
          Delete.style.height = "8vw";
          Delete.style.border = "1px solid black";
          Delete.style.borderRadius = "1rem";
          Delete.style.background = "transparent";
          Delete.style.boxShadow = "0px 5px 5px black";
          Delete.style.fontSize = "4vw";
          Delete.style.fontFamily = "'EB Garamond', serif";
        }

        numberRing.appendChild(numberRingTextNode);
        p1.appendChild(p1TextNode);
        p2.appendChild(p2TextNode);
        span.appendChild(spanTxt);
        form.appendChild(span);
        form.appendChild(checkbox);

        div.appendChild(p1);
        div.appendChild(numberRing);
        div.appendChild(bookImg);
        div.appendChild(p2);
        div.appendChild(form);
        div.appendChild(Delete);
        document.querySelector("main").appendChild(div);

        // numberRing.appendChild(numberRingTextNode);
        // p1.appendChild(p1TextNode);
        // p2.appendChild(p2TextNode);
        // span.appendChild(spanTxt);
        // form.appendChild(span);
        // form.appendChild(checkbox);

        // div.appendChild(p1);
        // div.appendChild(numberRing);
        // div.appendChild(bookImg);
        // div.appendChild(p2);
        // div.appendChild(form);
        // div.appendChild(Delete);

        delBtn = document.querySelectorAll("#DeleteBook");
        checkBtn = document.querySelectorAll("#read");
        // console.log(delBtn);
      }
    }
  }
}

// 새입력
document.querySelector("#submit").addEventListener("click", function () {
  max = 0;
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let item = localStorage.getItem(key);
    let array = item.split(",");
    let newMax = Number(array[5]);
    if (max < newMax) {
      max = newMax;
    }
  }
  dataIndex = max + 2;

  let img = document.querySelector("#bookImage").files[0];
  //   console.log(img);
  let title = document.querySelector("#title").value;
  let auther = document.querySelector("#auther").value;
  let reading = false;
  // 빈 값 체크
  if (img == "" || title == "" || auther == "") {
    alert("다시 입력해주세요!");
  } else {
    // 빈 값 만들기
    document.querySelector("#bookImage").value = "";
    document.querySelector("#title").value = "";
    document.querySelector("#auther").value = "";

    // let url = URL.createObjectURL(img);
    let url = 0;

    const reader = new FileReader();
    reader.readAsDataURL(img); // 파일을 base64로 변환
    // url = reader.result;

    reader.onload = function () {
      url = reader.result; // 읽은 파일 소스단에 출력
      //   console.log(url);

      // 데이터삽입
      let book = [url, title, auther, reading, dataIndex];
      dataIndex++;
      // console.log(dataIndex);
      data.push(book);

      let div = document.createElement("div");

      let p1 = document.createElement("p");
      let p1TextNode = document.createTextNode(title);

      let numberRing = document.createElement("p");
      let num = dataIndex - 1;
      let numberRingTextNode = document.createTextNode(num);

      let bookImg = document.createElement("img");
      bookImg.src = url;

      let p2 = document.createElement("p");
      let p2TextNode = document.createTextNode("Auther: " + auther);

      let form = document.createElement("form");
      let checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.id = "read";
      let span = document.createElement("span");
      let spanTxt = document.createTextNode("Read: ");

      let Delete = document.createElement("button");
      Delete.id = "DeleteBook";
      Delete.textContent = "Delete";

      if (mobile.matches === true) {
        div.style.width = "90%";
        div.style.margin = "3vw auto";
        div.style.textAlign = "center";
        div.style.backgroundColor = "#F5E8C7";
        div.style.borderRadius = "10px";
        div.style.marginTop = "4vw";
        div.style.fontSize = "10vw";
        div.style.color = "black";
        // div.style.fontWeight = "bold";
        div.style.fontFamily = "'EB Garamond', serif";
        div.style.boxShadow = "0px 5px 5px white";

        // numberRing.style.paddingTop = "3vw";
        numberRing.style.display = "none";

        p1.style.paddingTop = "3vw";
        p1.style.textShadow = "0px 2px 2px gray";
        p2.style.textShadow = "0px 2px 2px gray";

        span.style.textShadow = "0px 2px 2px gray";
        // span.style.verticalAlign = "middle";

        bookImg.style.width = "80vw";
        bookImg.style.marginTop = "4vw";

        checkbox.style.width = "5.5vw";
        checkbox.style.height = "5.5vw";
        checkbox.style.verticalAlign = "middle";
        checkbox.style.marginBottom = "0.5rem";

        Delete.style.marginBottom = "4vw";
        Delete.style.width = "20vw";
        Delete.style.height = "10vw";
        Delete.style.border = "1px solid black";
        Delete.style.borderRadius = "1rem";
        Delete.style.background = "transparent";
        Delete.style.boxShadow = "0px 5px 5px black";
        Delete.style.fontSize = "6vw";
        Delete.style.fontFamily = "'EB Garamond', serif";
      } else if (tablet.matches === true) {
        div.style.width = "90%";
        div.style.margin = "3vw auto";
        div.style.textAlign = "center";
        div.style.backgroundColor = "#F5E8C7";
        div.style.borderRadius = "10px";
        div.style.marginTop = "4vw";
        div.style.fontSize = "10vw";
        div.style.color = "black";
        // div.style.fontWeight = "bold";
        div.style.fontFamily = "'EB Garamond', serif";
        div.style.boxShadow = "0px 5px 5px white";

        // numberRing.style.paddingTop = "3vw";
        numberRing.style.display = "none";

        p1.style.paddingTop = "3vw";
        p1.style.textShadow = "0px 2px 2px gray";
        p2.style.textShadow = "0px 2px 2px gray";

        span.style.textShadow = "0px 2px 2px gray";
        // span.style.verticalAlign = "middle";

        bookImg.style.width = "80vw";
        bookImg.style.marginTop = "4vw";

        checkbox.style.width = "5.5vw";
        checkbox.style.height = "5.5vw";
        checkbox.style.verticalAlign = "middle";
        checkbox.style.marginBottom = "0.5rem";

        Delete.style.marginBottom = "4vw";
        Delete.style.width = "20vw";
        Delete.style.height = "10vw";
        Delete.style.border = "1px solid black";
        Delete.style.borderRadius = "1rem";
        Delete.style.background = "transparent";
        Delete.style.boxShadow = "0px 5px 5px black";
        Delete.style.fontSize = "6vw";
        Delete.style.fontFamily = "'EB Garamond', serif";
      } else if (pc.matches === true) {
        div.style.width = "45%";
          div.style.margin = "3vw auto";
          div.style.textAlign = "center";
          div.style.backgroundColor = "#F5E8C7";
          div.style.borderRadius = "10px";
          div.style.marginTop = "4vw";
          div.style.fontSize = "4vw";
          div.style.color = "black";
          // div.style.fontWeight = "bold";
          div.style.fontFamily = "'EB Garamond', serif";
          div.style.boxShadow = "0px 5px 5px white";

          // numberRing.style.paddingTop = "3vw";
          numberRing.style.display = "none";

          p1.style.paddingTop = "3vw";
          p1.style.textShadow = "0px 2px 2px gray";
          p2.style.textShadow = "0px 2px 2px gray";

          span.style.textShadow = "0px 2px 2px gray";
          // span.style.verticalAlign = "middle";

          bookImg.style.width = "30vw";
          bookImg.style.marginTop = "4vw";

          checkbox.style.width = "3.5vw";
          checkbox.style.height = "3.5vw";
          checkbox.style.verticalAlign = "middle";
          checkbox.style.marginBottom = "0.5rem";

          Delete.style.marginTop = "2vw";
          Delete.style.marginBottom = "4vw";
          Delete.style.width = "15vw";
          Delete.style.height = "8vw";
          Delete.style.border = "1px solid black";
          Delete.style.borderRadius = "1rem";
          Delete.style.background = "transparent";
          Delete.style.boxShadow = "0px 5px 5px black";
          Delete.style.fontSize = "4vw";
          Delete.style.fontFamily = "'EB Garamond', serif";
      }

      numberRing.appendChild(numberRingTextNode);
      p1.appendChild(p1TextNode);
      p2.appendChild(p2TextNode);
      span.appendChild(spanTxt);
      form.appendChild(span);
      form.appendChild(checkbox);

      div.appendChild(p1);
      div.appendChild(numberRing);
      div.appendChild(bookImg);
      div.appendChild(p2);
      div.appendChild(form);
      div.appendChild(Delete);
      document.querySelector("main").appendChild(div);
      // document.querySelector('#itemList').appendChild(div);
      // document.querySelector('main').appendChild(div);
      //   console.log(dataIndex - 1);
      localStorage.setItem(`${dataIndex - 1}`, data[datanum]);
      //   console.log(localStorage.getItem(dataIndex - 1));
      datanum++;
      delBtn = document.querySelectorAll("#DeleteBook");
      checkBtn = document.querySelectorAll("#read");
      // console.log(delBtn);
      // console.log(checkBtn);

      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let current = localStorage.getItem(key);
        let array = current.split(",");
        console.log(array);
      }

      for (let i = 0; i < delBtn.length; i++) {
        delBtn[i].addEventListener("focusin", function (e) {
          e.target.style.backgroundColor = "gray";
        });
      }
      for (let i = 0; i < delBtn.length; i++) {
        delBtn[i].addEventListener("focusout", function (e) {
          e.target.style.backgroundColor = "#F5E8C7";
        });
      }
      for (let i = 0; i < delBtn.length; i++) {
        delBtn[i].addEventListener("mouseup", removeItem);
      }
      
      for (let i = 0; i < checkBtn.length; i++) {
        checkBtn[i].addEventListener("click", checkItem);
        // console.log(checkBtn[i].checked);
      }
    };
  }
});

function clearLocal() {
  localStorage.clear();
  console.log("삭제!");
}

function log() {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(key);
    console.log(localStorage.getItem(key));
  }
}

function removeItem(e) {
  // e.preventDefault();
  const n = e.target.parentNode;

  // 지운 아이템의 넘버링 가져오기
  let delItemNumber = n.childNodes[1].textContent;

  //   n.remove();

  //   dataIndex = localStorage.length;
  // console.log(delItemNumber+1);
  // console.log(localStorage.length);
  //   for (let i = delItemNumber+1; i < localStorage.length; i++) {
  //     console.log("hello");
  //     // let key1 = localStorage.key(i-1);//삭제할 노드의 인덱스
  //     let key = localStorage.key(i);//이동노드 1번
  //     let Node = localStorage.getItem(key);

  //     let array = Node.split(",");
  //     array[5] = array[5] - 1;
  //     console.log(array);

  //     // localStorage.setItem(`${i-1}`, array);
  //   }
  max = 0;
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let item = localStorage.getItem(key);
    let array = item.split(",");
    let newMax = Number(array[5]);
    if (max < newMax) {
      max = newMax;
    }
  }
  dataIndex = max + 1;

  localStorage.removeItem(`${delItemNumber}`);

  n.remove();

  // dataIndex = 0;

  //전체확인
  //   for (let i = 0; i < localStorage.length; i++) {
  //     let key = localStorage.key(i);
  //     let current = localStorage.getItem(key);
  //     let array = current.split(",");
  //     console.log(array);
  //   }
}

// 체크박스 변경
function checkItem(e) {
  const n = e.target.parentNode.parentNode;
  //   체크 아이템의 넘버링 가져오기
  let chkNumber = n.childNodes[1].textContent;
  console.log(chkNumber);
  //   console.log(n.childNodes);
  let chk = e.target.checked;
  //   console.log(chk);
  let current = localStorage.getItem(`${chkNumber}`);
  //   console.log(current);
  let array = current.split(",");
  //   console.log(array);
  array[4] = chk;
  localStorage.setItem(`${chkNumber}`, array);
  //console.log(localStorage.getItem(chkNumber));
  // console.log('click');
}

for (let i = 0; i < delBtn.length; i++) {
  delBtn[i].addEventListener("focusin", function (e) {
    e.target.style.backgroundColor = "gray";
  });
}
for (let i = 0; i < delBtn.length; i++) {
  delBtn[i].addEventListener("focusout", function (e) {
    e.target.style.backgroundColor = "#F5E8C7";
  });
}

for (let i = 0; i < delBtn.length; i++) {
  delBtn[i].addEventListener("mouseup", removeItem);
}

for (let i = 0; i < checkBtn.length; i++) {
  checkBtn[i].addEventListener("click", checkItem);
}

document.querySelector('#logo').addEventListener('click', function () {
  location.href = "../html/main.html";
})

