const tbody=document.getElementById("tbody");
const input=document.getElementById("input");
const loader=document.getElementById("loader");
let countries =[];
const getCountries =async()=>{
countries = await fetch("https://restcountries.com/v3.1/all")
     .then((res)=>res.json())
     .then((data)=>{
      loader.classList.add("none");
      input.removeAttribute("disabled"); 
      return data;
     });
};

const showCountries = () =>{
    countries.sort((a, b) => (a.name.common > b.name.common) ? 1 : -1)
    .map((country)=>{        
        const row = document.createElement("tr");
        const nameTd =document.createElement("td"); 
        nameTd.textContent = country.name.common; 
        const capitalTd =document.createElement("td");
        capitalTd.textContent = country.capital ? country.capital[0]:"Qeyd olunmayib";
        const populationTd =document.createElement("td");
        populationTd.textContent = country.population;
        const areaTd =document.createElement("td");
        areaTd.textContent = country.area;
        const flagTd =document.createElement("td");
        const flagImg =document.createElement("img");
        flagImg.setAttribute("src",country.flags.svg);
        flagTd.append(flagImg);
        const operationsTd =document.createElement("td");
        const editButton =document.createElement("button");
        editButton.setAttribute("class","edit"); 
        editButton.textContent="Edit";   
        const deleteButton =document.createElement("button");
        deleteButton.setAttribute("class","delete");
        deleteButton.textContent="Delete";   
        operationsTd.append(editButton,deleteButton);
        row.append(nameTd,capitalTd,populationTd,areaTd,flagTd,operationsTd);
        tbody.append(row);

       // deleteButton.addEventListener("click",(e)=>{
        // // e.target.parentElement.parentElement.remove();
        // e.target.closest("tr").remove();
        // }); 

        deleteButton.addEventListener("click",()=>{
          row.remove();
          }); 
        
    });
};

getCountries().then(showCountries);

input.addEventListener("input", () => {
    let val = input.value.toLowerCase();
    let rows = document.querySelectorAll("tbody tr");
    [...rows].map((row) => {
      let cols = row.querySelectorAll("td");
      let find = false;
      row.classList.remove("none");
      [...cols].map((col) => {
        if (col.innerText.toLowerCase().includes(val)) {
          find = true;
        }
      });
      if (!find) {
        row.classList.add("none");        
      }
    });    
  });


