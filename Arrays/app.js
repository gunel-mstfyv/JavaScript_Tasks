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
// let array =[145, 259,13,13, 656,5005, 859,23, 686,23, 66,259, 69, 754,1000];
// console.log(array);
// let max = array[0];
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