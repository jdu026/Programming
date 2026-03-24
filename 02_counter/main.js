let count = 0;

//html -> js
// function count(){
//     const result = document.getElementById("result");

//     let number = 

// }

// const resultH1 = document.querySelectorAll("h1")[0];

// const resultH1 = document.getElementsByTagName("h1")[0];
// const plusbutton = document.getElementsByTagName("button")[0];
// const minusbutton = document.get

// plusbutton.addEventListener("click", function (){
//     //숫자 증가
//         count++; //count += 1; // count = count +1;

//     //숫자 표시
//     resultH1.innerHTML= count;
// });

const resultH1 = document.getElementById("result");
const plusButton = document.getElementsByClassName("plusBtn")[0];

// plusbutton.addEventListener("click", 처리함수);

// function 처리함수(){
//     //숫자 증가
//         count++; //count += 1; // count = count +1;

//     //숫자 표시
//     resultH1.innerHTML= count;
// }
// plusbutton.onclick = () => {

//     //숫자 증가
//         count++; //count += 1; // count = count +1;

//     //숫자 표시
//     resultH1.innerHTML= count;
// };
function plus(number=1) {
    //숫자 증가
    count += number; //count += 1; // count = count +1;

    //숫자 표시
    resultH1.innerHTML = count;
}
