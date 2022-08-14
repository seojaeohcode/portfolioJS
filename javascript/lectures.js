const mobile = window.matchMedia(`(max-width: 767px)`);
const tablet = window.matchMedia(`(min-width:768px) and (max-width:1024px)`);
const pc = window.matchMedia(`(min-width:1025px)`);

let HeadText = document.querySelector("#HeadText");

const menu = document.querySelector("#menu");
let menubar = document.querySelector("#menubar");
let isMenu = false;

let data = [];
// localStorage.setItem(`dataIndex`, localStorage.length);
let dataIndex = localStorage.length;
let delBtn = 0;
let checkBtn = 0;
let datanum = 0;

let imgLink = 0;

let allRead = true;

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

let remain = 0;

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

// 새로고침 후 화면유지
if (localStorage.length > 0) {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let current = localStorage.getItem(key);
    // console.log(current);
    let array = current.split(",");
    // console.log(array);

    if (array[4] == "false") {
      remain++;
      allRead = false;

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

      // let form = document.createElement("form");
      // let checkbox = document.createElement("input");
      // checkbox.setAttribute("type", "checkbox");
      // // console.log(array);
      // checkbox.id = "read";
      // // array[3] == true ? checkbox.checked = true : checkbox.checked = false;
      // array[4] == "true" ? (checkbox.checked = true) : (checkbox.checked = false);

      // let span = document.createElement("span");
      // let spanTxt = document.createTextNode("Read: ");

      // let Delete = document.createElement("button");
      // Delete.id = "DeleteBook";
      // Delete.textContent = "Delete";

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

        // span.style.textShadow = "0px 2px 2px gray";
        // span.style.verticalAlign = "middle";

        bookImg.style.width = "80vw";
        bookImg.style.marginTop = "4vw";
      } else if (tablet.matches === true) {
        div.style.width = "90%";
        div.style.margin = "0 auto";
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
        // span.style.textShadow = "0px 2px 2px gray";

        bookImg.style.width = "80vw";
        bookImg.style.marginTop = "4vw";
      } else if (pc.matches === true) {
        div.style.width = "90%";
        div.style.margin = "0 auto";
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
        // span.style.textShadow = "0px 2px 2px gray";

        bookImg.style.width = "80vw";
        bookImg.style.marginTop = "4vw";
      }
      
      let TxtBox = document.createElement("div");
      let remainBook1 = document.createElement("p");
      let remainBook1TextNode = document.createTextNode("remain: "+remain);
      TxtBox.style.color = "white";
      TxtBox.style.textAlign = "center";
      TxtBox.style.fontSize = "12vw";
      TxtBox.style.fontFamily = "'EB Garamond', serif";
      remainBook1.style.textShadow =
      "0 0 10px rgb(255, 72, 0), 0 0 20px rgb(255, 72, 0), 0 0 23px rgb(255, 72, 0), 0 0 25px rgb(255, 72, 0), 0 0 38px rgb(255, 72, 0)";
      remainBook1.appendChild(remainBook1TextNode);
      TxtBox.appendChild(remainBook1);
      document.querySelector("main").appendChild(TxtBox);

      numberRing.appendChild(numberRingTextNode);
      p1.appendChild(p1TextNode);
      p2.appendChild(p2TextNode);

      div.appendChild(p1);
      div.appendChild(numberRing);
      div.appendChild(bookImg);
      div.appendChild(p2);
      document.querySelector("main").appendChild(div);
    }

    if (allRead) {
      let TxtBox = document.createElement("div");
      let noBook1 = document.createElement("p");
      let noBook1TextNode = document.createTextNode("Great!");
      let noBook2 = document.createElement("p");
      let noBook2TextNode = document.createTextNode("All Clear!");
      TxtBox.style.color = "white";
      TxtBox.style.textAlign = "center";
      TxtBox.style.fontSize = "12vw";
      TxtBox.style.fontFamily = "'EB Garamond', serif";
      noBook1.style.textShadow =
        "0 0 10px #0fa, 0 0 20px #0fa, 0 0 23px #0fa, 0 0 25px #0fa, 0 0 38px #0fa";
      noBook2.style.textShadow =
        "0 0 10px #0fa, 0 0 20px #0fa, 0 0 23px #0fa, 0 0 25px #0fa, 0 0 38px #0fa";
      noBook1.appendChild(noBook1TextNode);
      noBook2.appendChild(noBook2TextNode);
      TxtBox.appendChild(noBook1);
      TxtBox.appendChild(noBook2);

      document.querySelector("main").appendChild(TxtBox);
    }
  }
}