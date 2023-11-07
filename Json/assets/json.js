
fetch("https://restcountries.com/v3.1/all")
  .then((response) => {

    if (response.ok) {

        return response.json();
    } 
    else {

        throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then((data) => {

    displayData(data);
  })
  .catch((error) => {

    console.error("FETCH ERROR:", error);
  });


  function displayData(data) {

  const table = document.querySelector(".table");


  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headers = [
    "Common Name",
    "Capital City",
    "Currency",
    "Flag",
    "Population",
    "Languages",
  ];
  headers.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    tr.appendChild(th);
  });

  thead.appendChild(tr);
  table.appendChild(thead);


  const tbody = document.createElement("tbody");
  data.forEach((country) => {
    const tr = document.createElement("tr");

    const name = country.name.common;
    const tdName = document.createElement("td");
    tdName.textContent = name;
    tr.appendChild(tdName);

    const capital = country.capital
    ? Object.keys(country.currencies)[0]: "N/A";
    const tdCapital = document.createElement("td");
    tdCapital.textContent = capital;
    tr.appendChild(tdCapital);

    const currency = country.currencies
    ? Object.keys(country.currencies)[0]: "N/A";

    const tdCurrency = document.createElement("td");
    tdCurrency.textContent = currency;
    tr.appendChild(tdCurrency);

    const flag = country.flags.png;
    const tdFlag = document.createElement("td");
    const imgFlag = document.createElement("img");
    imgFlag.src = flag;
    imgFlag.alt = name + " flag";
    imgFlag.width = 50;
    imgFlag.height = 30;
    tdFlag.appendChild(imgFlag);
    tr.appendChild(tdFlag);

    const population = country.population

    
    const tdPopulation = document.createElement("td");
    tdPopulation.textContent = population;
    tr.appendChild(tdPopulation);

    const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

    
    const tdLanguages = document.createElement("td");
    tdLanguages.textContent = languages;
    tr.appendChild(tdLanguages);

    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
}