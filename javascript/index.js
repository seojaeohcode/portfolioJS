const mobile = window.matchMedia(`(max-width: 767px)`);
const tablet = window.matchMedia(`(min-width:768px) and (max-width:1024px)`);
const pc = window.matchMedia(`(min-width:1025px)`);

//글자 셀렉트
const txt1 = document.querySelector("#firstTxt");
const txt2 = document.querySelector("#secondTxt");
const button = document.querySelector('button');
// 오프닝화면인지 체크
let firstWindow = true;
// 배경화면 사진배열
const backgroundPic = [
  "../asset/pic/Trinity_College_Dublin.jpg",
  "../asset/pic/National_Library_of_China.jpg",
  "../asset/pic/china_gwang.jpg",
  "../asset/pic/BibliotechaAlexandrina.jpg",
];

if (mobile.matches === true) {
  txt1.setAttribute("y", "50vw");
  txt2.setAttribute("y", "90vw");
} else if (tablet.matches === true) {
  txt1.setAttribute("y", "28vw");
  txt2.setAttribute("y", "55vw");
} else if (pc.matches === true) {
  txt1.setAttribute("y", "20vw");
  txt2.setAttribute("y", "40vw");
}

window.addEventListener('resize', function() {
  if (mobile.matches === true) {
    txt1.setAttribute("y", "50vw");
    txt2.setAttribute("y", "90vw");
    button.style.width = '14vw';
    button.style.height = '14vw';
    button.style.left = '70%'
  } else if (tablet.matches === true) {
    txt1.setAttribute("y", "28vw");
    txt2.setAttribute("y", "55vw");
    button.style.width = '8vw';
    button.style.height = '8vw';
    button.style.left = '80%'
  } else if (pc.matches === true) {
    txt1.setAttribute("y", "20vw");
    txt2.setAttribute("y", "40vw");
    button.style.width = '6vw';
    button.style.height = '6vw';
    button.style.left = '85%'
  }
})

// 배경화면 인덱스
let i = 1;
// document.getElementById('wrap').style.backgroundImage= `url(${backgroundPic[0]})`;
if (firstWindow === true) {
  setInterval(() => {
    document.getElementById("background").style.backgroundImage = `url(${backgroundPic[i]})`;

    if (i == backgroundPic.length - 1) {
      i = 0;
    } else {
      i++;
    }
  }, 6000);
} else {
}

function flip() {
  document.getElementById("wrap").style.transform = 'rotateY(-180deg)'; 
  setTimeout(() => {
    location.href='../html/main.html'
  }, 2000);
}