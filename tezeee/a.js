const tbody=document.getElementById("tbody")

fetch("https://restcountries.com/v3.1/all")
.then(response=>response.json())
.then(datas=>{
    datas.forEach(function (data) {
        var row = document.createElement("tr");
      
        var commonName = document.createElement("td");
        commonName.textContent = data.name.common;
      
        var capitalCity = document.createElement("td");
        capitalCity.textContent = data.capital[0]
      
        var currency = document.createElement("td");
        currency.textContent = Object.keys(data.currencies)[0];

        var flag = document.createElement("td");
        flag.textContent = data.flag;

        flag.innerHTML=`<img width="25px" src="${data.flags.png}" alt="">`

        var population = document.createElement("td");
        population.textContent = data.population;

        var diller = document.createElement("td");
        diller.textContent = Object.keys(data.languages)[0];
      
        tbody.appendChild(row);
      
        row.appendChild(commonName);
        row.appendChild(capitalCity);
        row.appendChild(currency);
        row.appendChild(flag);
        row.appendChild(population);
        row.appendChild(diller);
      });
})