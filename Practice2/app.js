
// 1.Daxil olunan stringdə neçə sait olduğunu tapın.

// 2.Daxil olunan stringdə olan bütün saitləri silin.
// 3.Daxil olunan 2 ededi muqayise edin.
// 4.Vurma cedveli.
// 5.1-10 a qədər ədədlərin Faktorial tap

/************************  Task1  *************************/

let str = prompt("Enter String");

console.log(str);
console.log(str.match(/[aıoueəiöü]/gi).length);

/************************  Task2  *************************/

let text="Coders Azerbaijan"
console.log(text.replace(/[aıoueəiöü]/gi,""));

// /************************  Task3  *************************/

let n=Number(prompt("Birinci ededi daxil et"));
let m=Number(prompt("Ikinci ededi daxil et"));

if(n>m){
console.log(`${n} ededi ${m} ededinden boyukdur`);
}
else if(n<m){
    console.log(`${n} ededi ${m} ededinden kicikdir`);
}
else{
    console.log(`${n} ededi ${m} ededine beraberdir`);
}

/************************  Task4  *************************/

for(i=1;i<=10;i++){
    console.log("**************")

    for(j=1;j<=10;j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }

}

/************************  Task5  *************************/

let number = Number(prompt("Ededi daxil et"));
let factorial=1;
for(i=1;i<=number;i++){
factorial*=i;
}
console.log(factorial);