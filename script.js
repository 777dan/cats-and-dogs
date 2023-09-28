function dogAndCats(animal, n) {
    animal = `<img src="./images/${animal}.png" alt="${animal}" width="100px">`
    let table = "<tr>";
    for (let i = 0; i < n; i++) {
        if (i % 10 === 0) {
            table += "</tr><tr>";
        }
        table += `<td>${animal}</td>`;
    }
    document.getElementById("animals").innerHTML = table;
}
const count = +prompt("How many?");
const animal = prompt("Which animal?");
dogAndCats(animal, count);