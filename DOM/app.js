/************************  13.03.2023 - Practice *************************/

// const hello = ()=>{
//     console.log("Hello");
// }

// let btn = document.getElementById("btn");
// console.log(btn);
// console.log(btn.textContent);// butun metn
// console.log(btn.innerText);//gizledilen gorsenmir
// console.log(btn.innerHTML);
// let clicked = false;
// btn.addEventListener("click",()=>{
//     if(clicked===false){
//         btn.textContent = "Clicked";
//         hello();   
//         clicked=true;
//     }   
// });
// document.getElementById("li2").addEventListener("click",(e)=>{
//         e.target.textContent="Clicked";
//         console.log(e.target);
//         console.log(e.target.textContent);
// });

// let list = [...document.getElementsByClassName("list")];// html collection qaytarir
// list.map((li)=>{
//     li.addEventListener("click",(e)=>{
//         e.target.textContent= "Clicked";
//     });
// });

// let ul = document.getElementById("parent");
// ul.addEventListener("click",(e)=>{
// e.target.textContent="Clicked";
// });

// let ul = document.getElementById("parent");
// ul.addEventListener("click",(e)=>{
//     if(e.target.tagName==="LI"){
// e.target.textContent="Clicked";
// }
// });

// let li = document.getElementsByTagName("li");
// console.log(li);

// let li = document.querySelector("ul li");// CSS de oldugu kimi istediyimizi yaza bilerik meselen ul>li #ul li ve s. ancaq 1ci elementi qaytarir
// console.log(li);

// let lists =[...document.querySelectorAll("ul li")]; // node list qaytarir
// console.log(lists);
// lists.map((li)=>{
//     li.addEventListener("click",()=>{
//         li.style.color = "red";
//         li.style.backgroundColor= "yellow";
//         li.style.fontSize="32px";
//         setTimeout(()=>{
//             li.remove();
//         },2000);
//     });
// });

/************************  Slide-show *************************/

let images = document.querySelectorAll(".slideshow img");
const prew = document.getElementById("prew");
const next = document.getElementById("next");
let index = 0;

next.addEventListener("click",()=>{
    images[index].classList.remove("active");
    index++;
    if(index>images.length-1){
       index=0;
    }
    images[index].classList.add("active");

});
prew.addEventListener("click",()=>{
    images[index].classList.remove("active");
    index--;
    if(index<0){
       index=images.length-1;
    }
    images[index].classList.add("active");

});

/************************  Task-1 *************************/

let btnRandom = document.getElementById("btn-random");
btnRandom.addEventListener("click", () => {
    let password = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
            'abcdefghijklmnopqrstuvwxyz0123456789@#$';
      
    for (let i = 1; i <= 7; i++) {
        let char = Math.floor(Math.random()
                    * str.length + 1);
          
        password += str.charAt(char)
    }
    btnRandom.textContent = password; 
  });

/************************  Task-3 *************************/

  let btnColor = document.getElementById("btn-color");
    btnColor.addEventListener("click", (e) => {
    let color = '#';
    let digits = '0123456789ABCDEF';
        for (let i = 0; i < 6; i++) {    
            let randomDigit = Math.floor(Math.random() * 16);    
            color += digits[randomDigit];
        } 
        e.target.style.backgroundColor = color;
  });

/************************  Task-2 *************************/
  let str = "";
  let names = [];
  while(str!=="0"){    
    str=prompt("Enter name!")
    if(str!=0){
        names.push(str);
    }   
  }
  console.log(names);

    let ulName = document.getElementById("name");
  names.map((name)=>{
     ulName.innerHTML += `<li>${name}</li>`;
  });
 
/************************  Task-4 *************************/

let word = "Hello World";
let space = document.getElementById("spacing");
for (let i = 0; i < word.length; i++) {
    setTimeout(() => {
        space.textContent+=(word[i]);     
    }, i * 500);
}


