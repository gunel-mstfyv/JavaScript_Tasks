/************************  27022023  *************************/
// let numbers=[2,6,8,1,5,9];
// let i= numbers.push(100);
// console.log(numbers);
// console.log(i);
// let k=numbers.pop();
// console.log(numbers);
// console.log(k);
// let z=numbers.shift();
// console.log(numbers);
// console.log(z);
// let m=numbers.unshift(0);
// console.log(numbers);
// // console.log(m);
// // console.log(numbers);
// // numbers.splice(1,2);
// // console.log(numbers);
// numbers.splice(1,2,56,59,68);
// console.log(numbers);
// numbers.splice(0,0,156,159,168);
// console.log(numbers);
// for(let i=0;i<numbers.length;i++){
// numbers[i]=Math.pow(numbers[i],2)
// }
// console.log(numbers);
// let numbers=[2,6,8,1,5,9];
// console.log(numbers);
// let arr = numbers.map((item,key)=>
// console.log(item,key)
//  );

// let cut=numbers.filter((a)=>
// a%2===0 && a<8
// );
// console.log(cut);
// let str ="gunel";
// console.log(str);
// let arr = str.split("");
// console.log(arr);
// str=arr.join("-");
// console.log(str);

// let a = [4,7,8];
// // let b = a;
// b=Array.from(a);
// let c = a.slice();
// let d= [-5,...a,89,22]
// a.push(5);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// let a = [4,7,8];
// console.log(a);
// let sum = a.reduce((acc,item)=>acc+item,10);
// console.log(sum);
// let chek =a.every((a)=>a>4);
// console.log(chek);
// let cheksome=a.some((a)=>a>21);
// console.log(cheksome);

/************************  Task  *************************/

//1.Array içərisindən daxilində t hərfi olan sözləri tapın
//2.Array daxilində olan palindrome ədədləri tapın.
//3.Array daxilində olan 100 dən böyük və 9 ilə bitən ədədləri tap
//4.İstifadəçinin daxil etdiyi say qədər 40-75 arası random ədəd tapıb arraya yığın.
//5.Array içərisindən ən böyük ədədi tapın
//6.Array içərisindən ən böyük 2 ci ədədi tapın
//7.Array içərisindən sadə ədədləri tapın
//8.Array içərisində qarışıq tipdə elementlər var. yalnızca stringləri saxlayın
//9.Array içərisindən təkrarlanan elementləri silin
//10. https://www.eolymp.com/az/problems/138
//11.Verilen arraydaki butun sozlerden a herflerini silin.
//12.Verilen arraydaki cut ededleri 2 e tekleri ise 4 e vurub evezleyin
//13.Verilen arrayda daxilinde 8 olan ededleri tapin. includes metodundan istifade etmeden

/************************  Task-1  *************************/
// let array = ["Gunel", "Tural", "Ramal", "Nubar", "Metin", "Hamlet"];
// console.log(array);
// let newarray=array.filter((a)=>a.includes("t") || a.includes("T"));
// console.log(newarray);

/************************  Task-2  *************************/
// let array =[145, 259, 656, 859, 686, 66, 69, 754];
// console.log(array);

// const chekPolindrom = (a)=>{
//     let temp = a;
//     let i="";   
//     while(a != 0){
//     i += a % 10 ;
//     a = parseInt(a/10);
//     } 
//    if(temp==i){
//     return true;
//    }
//     else{
//     return false;
// }
// }

// let polindrom_ededler = array.filter((a)=>chekPolindrom(a));
// console.log(polindrom_ededler);

// /************************  Task-3  *************************/

// let new_array= array.filter((a)=>a>100 && a%10===9);
// console.log(new_array);

/************************  Task-4  *************************/
// let n = 5;
// let min = 40;
// let max = 75;
// let random_array = [];
// for(i=0;i<n;i++){
//     random_array[i]=Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(random_array);

/************************  Task-5  *************************/

// let array =[4,5,99,99,8];
// console.log(array);
// max = array[0];    
// for(i=0;i<array.length;i++){
//     if(array[i] > max){
//         max= array[i]
//     }  
// }
// console.log(max);


/************************  Task-6  *************************/
// let sorted_array=array.sort((a,b)=> b-a);
// console.log(sorted_array[1]);

/************************  Task-7 *************************/

// const chek_sade = (a)=> {
//     for(let i=2; i<=Math.sqrt(a); i++){
//         if(a % i === 0){ 
//             return false;           
//         } 
        
//     } return true;
// }

// let sade_ededler = array.filter((a)=> chek_sade(a));
// console.log(sade_ededler);

/************************  Task-8 *************************/
// let qarisiq_array = ["gunel",true,5,55,"leo"];
// let string_array = qarisiq_array.filter((a)=> typeof a == "string");
// console.log(string_array);

//************************  Task-9 *************************/
// let array = [ 6,7,6,4,9,4,82,9,9,82,81]
// console.log(array);
// let unique_array = array.filter((a,b)=> {
//   if(array.indexOf(a)===b)return a;
// });
// console.log(unique_array);

//************************  Task-10 *************************/
// let pullar = [500,200,100,50,20,10,5];
// let mebleg = 570;
// let result = "";
// let array = pullar.map((pul)=>{   
// let say = Math.trunc(mebleg/pul);
// if(say>0){
//    result+=`${pul} -dan ${say} eded \n`; 
// }
// mebleg=mebleg%pul;
// mebleg!=0?console.log(-1):console.log(result);
// }
// );
//************************  Task-11 *************************/
// let array = ["Gunel", "Tural", "Ramal", "Nubar", "Metin", "Hamlet"];
// console.log(array);
// let newarray=array.map((a)=>a.replace(/[a]/gi,""));
// console.log(newarray);
//************************  Task-12 *************************/
// let array = [ 6,7,6,4,9,4,21,56,9]
// console.log(array);
// let new_array = array.map((a)=>{
//     if(a%2===0){
//         return a*2;
//     }
//     else if (a%2!==0){
//         return a*4;
//     }
//     else{
//         return a;
//     }
// });
// console.log(new_array);
//************************  Task-13 *************************/
// let array = [ 68,777,664,48,928,41,211,568,90]
// console.log(array);
// const tap8 = (a)=>{
//     while(a!=0){
//         if(a%10===8){
//              return true;            
//         }
//         a = Math.trunc(a/10);        
//     }return false;   
// }
// let new_array=array.filter(tap8);
// console.log(new_array);
// let x=2;
// console.log( x +`${x}`-x-`${x}`);



//*******Task-sort istifade etmeden en boyuk ikincini tap ***************/

// let array =[4,5,99,99,8];
// console.log(array);
// max = array[0];    
// second_max = max;    
// for(i=0;i<array.length;i++){
//     if(array[i] > max){
//         second_max=max;
//         max = array[i]
//     }  
// else if(array[i] > second_max  && array[i]!== max){
//     second_max= array[i]
// }
// }
// console.log(second_max);

//************************  Task *************************/
//1.Verilen cumlede her sozun bash herfini boyuden funksiya yazin.

// let str = "the only impossible journey is the one you never begin";
// let arr= str.split(" ").map((a)=>{
//     return a.charAt(0).toUpperCase()+a.toLowerCase().slice(1)});
// console.log(arr.join(" "));

//************************  Task *************************/
//2.2 olculu array icerisinden en boyuk ededi tapin.

// let array = [[8,4,99,108],[7,22,1],[9,7,200,8,4]];

// let max = array[0][0];
// for (let index = 0; index < array.length; index++) {
//     for (let j = 0; j < array[index].length; j++) {
//         if(array[index][j]>max){
//             max=array[index][j];
//         };        
//     }    
// }
// console.log(max);

//************************  Task *************************/

//3.2 olculu array icerisinden kokalti cixan ededleri tapin

// let arr = [[8,161,25],[24,4,257,87],[625,48,81,56]];
// let numbers=[];
//  const findPow = (a)=>{    
//     for(let i=1;i<=Math.sqrt(a);i++){
//         if(i*i===a){
//             return a;
//         }
//     }
//     return false;
// };
//  for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         if(findPow(arr[i][j])){
//             numbers.push(arr[i][j])
//         }
//     }
//  }
//  console.log(numbers);

//************************  Task *************************/

//4.2 olculu arrayi siralayin

// let arr = [[8,4,9,],[7,2,1],[9,7,2,8,4]];
// let arraysort=arr.map((a)=>a.sort((a,b)=>a-b));
// console.log(arraysort);
//************************  Task *************************/
// anagram;

//************************  Task *************************/
// https://www.eolymp.com/az/problems/7365
// let count = prompt();
// let weight = 0;

// for (let index = 1; index <= count; index++) {
//      weight = prompt();
// }


// let count = 7;
// let weight = [21.5, 36, 30, 35, 22.5, 39, 45];
// let cake=0;
// let milk=0;
// for(let i = 0; i < weight.length; i++){
// if(weight[i]<30){
// cake++;
// }
// milk = Math.ceil((cake*200)/900)
// }
// console.log(milk,cake);



//************************  Task *************************/
//https://www.eolymp.com/az/problems/446

// let m = 20;
// let numbers=[];
// for (let index = 1; index <= m; index++) {
//     if(Math.trunc(m/index) === m%index){
//     numbers.push(index);    
//     }    
// }
// console.log(`${m} - ədədinin bərabər bölənləri: ${numbers} \nBərabər bölənlərin sayı: ${numbers.length}`);

//************************  Task *************************/
//Mətndəki saitlərin sayını tapan proqramı tərtib edin.

// let str="Live out of your imagination, not your history.";
// let count =str.match(/[aeoui]/gi).length;
// console.log(count);

//************************  Task *************************/
//https://www.eolymp.com/az/problems/542

// let e_empty = 5;
// let f_find = 5;
// let c_change = 2;

// let sum = e_empty +f_find;
// let result  =0;
// while(sum>=c_change){ 
//      result+= Math.trunc(sum/c_change); 
//      sum = sum%c_change+Math.trunc(sum/c_change);
     
// }
// console.log(result);

//************************  Task *************************/
// let x = 2;
// console.log(x + `${x}` - x - `${x}`);
//************************  Task *************************/
//verilen ededi 2 lik say sisteminde gosteren funksiya yazin

// let str = "";
// let number = 118;
// while(number>0){
// str+=number%2;
// number=Math.trunc(number/2);
// }
// console.log(str);
// let binaryNum="";
// for(let i = str.length-1;i>=0;i--){
//     binaryNum+=str.charAt(i);
// }
// console.log(binaryNum);

//************************  Task *************************/

 // 3 eded daxil olur : 1- ve 2- arasinda tekrarlanmayan 3- sayda eded yaz,1ve 2 daxildir

//  let first = 8;
//  let second = 14;
//  let number = 4;
//  let numbers=[];


//   if(number>((second-first)+1)){
//     console.log("Mümkün deyil!")
//   }
//   else {
//         while(numbers.length!==number){
//         let randomEded=Math.floor(Math.random() * (second - first + 1) + first);
//             if(!numbers.includes(randomEded)){                
//                 numbers.push(randomEded);            
//             }
//     }   
//   }
//   console.log(numbers);