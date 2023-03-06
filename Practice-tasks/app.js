/************************  01032023  *************************/
// 1 verilmish arrayda tek ededleri ve onlarin sayini cixart. [1, 4, 6, 7, 11, 14, 17, 18]; -->
// 2 verilmish arrayda  sonu sonu 5 ile biten ededleri  tap ve onlari cemle [1, 23, 45, 61, 34, 53, 75]   -->
// 3 verilmish arrayda tam ededleri tap ve onlari cemle -->
// 4 verilmish arrayda ikinci indeksde duran reqemi 15 le evez et; -->
// 5 array icerisinden en kicik ededi tapin -->
// 6 array icerisinden en kicik 3 cu ededi tapin -->

/************************ Task1 *************************/
// let array = [1, 4, 6, 7, 11, 14, 17, 18];
// let new_array=array.filter((a)=>a%2!==0);
// console.log(new_array);
// console.log(new_array.length);

/************************ Task2 *************************/
// let arr =[1, 23, 45, 61, 34, 53, 75];
// let new_arr = arr.filter((a)=>a%10===5).reduce((acc,item)=>acc+item);
// console.log(new_arr);
/************************ Task3 *************************/
// let arr =[1.1, 23, 45.4, 61.7, 34, 53.1, 75];
// let new_arr= arr.filter((a)=>a===Math.trunc(a)).reduce((acc,item)=>acc+item);;
// console.log(new_arr);
/************************ Task4 *************************/
// let arr =[1, 23, 45, 61, 34, 53, 75];
// arr.splice(2,1,15)
// console.log(arr);
/************************ Task5 *************************/
// let arr =[1, 23, 45, 61, 34, 53, 75];
// let min=arr[0];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<min){
//         min=arr[i];
//     }
// }
// console.log(min);
/************************ Task *************************/
// let arr =[100, 23, 45, 61, 34, 53, 75];
// let new_arr = arr.sort((a,b)=>a-b);
// console.log(new_arr[2]);

