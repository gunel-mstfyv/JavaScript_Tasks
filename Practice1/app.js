/************************  Arrow Functions  *************************/
// const sum = (a, b)=>{
//     return a + b;
// }

// const sum1= (a, b)=> a + b;

/************************  Tasks  *************************/

// 15.Daxil olunan ədədin mükəmməl ədəd olub olmadığını tapın.
// 16.Daxil olunan ədədin tərsini tapın.*
// 17.Daxil olunan ədədin tərsinin bölənlərini göstərin.
// 19.Daxil olunan ədədin rəqəmlərinin kvadratları cəmini tapın.
// 20.İstifadəçi 0 daxil edənədək daxil etdiyi ədədləri cəmləyin.
// 0 Daxil edildikdə cəmi göstərin.
// Timers
//n = 6,m=6
//1 * * * * 1
//* 1 * * 1 *
//* * 1 1 * *
//* * 1 1 * *
//* 1 * * 1 *
//1 * * * * 1

/************************ Task_15 *************************/
let number =62;

const sum = (number) => {
    let sum=0;
for(i=1;i<number;i++){        
    if(number%i===0){
    sum+=i
    }
}
return sum;
}

console.log(sum(number)===number ? `${number} - mukemmel ededdir` : `${number} - mukemmel eded deyil`);

/************************ Task_16 *************************/

let eded = prompt("Ededi daxil edin:");

const tersi = (eded)=>{
   let str ="";
for(i=eded.length-1;i>=0;i--){
str=str.concat(eded.charAt(i));
} 
return Number(str);
 }
console.log(tersi(eded));




const tersi2=(eded)=>{

   let e = Number (eded);
    let str ="";
    for(i=eded.length-1;i>=0;i--){
    str+=(eded%10).valueOf();
    eded=parseInt(eded/10); 
    }  
    return Number(str);
}

/************************ Task_17 *************************/

let num = tersi(eded);

    for(i=1; i<=num; i++ ) {
        if(num%i===0){
            console.log(i);
        }
    }
 
/************************ Task_19 *************************/

let a = prompt("n ededini daxil edin:")
console.log(a);
let result=0;
for(i=a.length-1;i>=0;i--){
result+=Math.pow(Number(a.charAt(i)),2);
}
console.log(result);

/************************ Task_20 *************************/
let x;
let netice = 0;
while (x != 0){
    x = Number(prompt("Yeni eded daxil edin: "));
    netice+=x;
}
console.log(netice);


// let x;
// let netice2 = 0;
// for (i=1;x = Number(prompt("Yeni eded daxil edin: "));i++){
//      netice2+=x;
//     if(x===0){
//         break;
//     }    
// }
// console.log(netice2);

/************************ Task_star1 *************************/
let n=8;
let m=8;

let star=1;
let endstar=n;


for(i=1;i<=n;i++){ 
 let s ="" 
 console.log("\n");     
for(j=1;j<=m;j++){   
    if(j===star || j===endstar)  {
        s+="1";
    } 
    else{
        s+="*" ; 
    }   
      
}
star++;
endstar--;
console.log(s); 
}





