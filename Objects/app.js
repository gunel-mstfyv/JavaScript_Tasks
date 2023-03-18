// /************************  06032023  *************************/
// let students = [
//     {
//       id: 1,
//       name: "Orxan",
//       surname: "Karimli",
//       age:22,
//     },
//     {
//       id: 2,
//       name: "Nijat",
//       surname: "Mammadli",
//       age:24,
//     },
//     {
//       id: 3,
//       name: "Gunel",
//       surname: "Mustafayeva",
//       age:35,
//     },
//     {
//       id: 4,
//       name: "Tunar",
//       surname: "Musali",
//       age:65,
//     },
//   ];


//   let marks = [
//     {
//       id: 1,
//       student_id: 4,
//       mark: 80,
//     },
//     {
//       id: 2,
//       student_id: 4,
//       mark: 95,
//     },
//     {
//       id: 3,
//       student_id: 1,
//       mark: 85,
//     },
//     {
//       id: 4,
//       student_id: 3,
//       mark: 75,
//     },
//     {
//       id: 5,
//       student_id: 2,
//       mark: 90,
//     },
//     {
//         id: 6,
//         student_id: 3,
//         mark: 25,
//       },
//       {
//         id: 7,
//         student_id: 3,
//         mark: 65,
//       },
//       {
//         id: 8,
//         student_id: 2,
//         mark: 85,
//       },
//   ];

// //Tələbələr içərisindən yaşı ən böyük olan tələbəni tapın  
// // students.sort((a,b)=>b.age-a.age);
// // console.log(students[0].name,students[0].age);
// // students.filter

// // let max=students[0].age;
// // let student_name=students[0].name;
// // for (let i = 0; i < students.length; i++) {
// //    if(students[i].age>max){
// //     max=students[i].age;
// //     student_name=students[i].name;    
// //    }        
// // }  
// // console.log(student_name,max);

// //Qiymətlər və tələbələr arrayı var,ortalaması ən çox olan tələbənin adını tap

// // students.map((student)=>{
// //   let markArray = marks
// //   .filter((mark)=>student.id===mark.student_id)
// //   .map((mark)=> mark.mark);
// //   let avg = (markArray.reduce((icc,item)=>(icc+item)))/markArray.length;
// //   console.log(`${student.name} - ${avg}`);

// // });

// //promptdan daxil olunan cümlədə hər hərfdən neçə ədəd var ?
// //salam
// //s - 1
// //a - 2
// //l - 1
// //m - 1

// // let str = "salam";
// // console.log(str);
// // let arr = str.split("");
// // let result = {};

// //   for(let i = 0; i < arr.length; i++){   
// //      if(arr[i]===" "){
// //           continue;
// //         }    
// //     let count = 0;  
// //       for(let j = 0; j < arr.length; j++){         
// //         if(arr[i] === arr[j]){
// //           count++;       
// //         }        
// //       }      
// //       result[arr[i]] = count;     
// //   }
// // console.log(result);



// //Daxil olunan ədədi neçə fərqli 3 ədədin cəmi kimi göstərmək olar ?
// //6
// //1 3 3
// //1 3 2
// //3 1 2

// // let num=8;
// // let array = [];
// // for(let i = 1;i<=num;i++){
// //   for(let j = 2;j<=num;j++){
// //     for(let k = 3;k<=num;k++){
// //         if((i+j+k)===num && i!==j && i!==k && j!==k){

// //           if (!array.includes([i,j,k].sort().join())) {
// //             array.push([i,j,k].sort().join());
// //           }
          
// //         }
// //     }
// //   }
// // }
// // array.map((a)=>console.log(`${a} ===> cemi ${num}`));



let button = document.getElementById("btn");
console.log(button);
button.textContent = "Click Me";

button.addEventListener("click", () => {
  let password = '';
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
          'abcdefghijklmnopqrstuvwxyz0123456789@#$';
    
  for (let i = 1; i <= 7; i++) {
      let char = Math.floor(Math.random()
                  * str.length + 1);
        
      password += str.charAt(char)
  }
  button.textContent = password; 
});