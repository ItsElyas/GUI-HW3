function generateTable(event) {
    event.preventDefault(); 

    let minColumn = parseInt(document.getElementById("minColumn").value);
    let maxColumn = parseInt(document.getElementById("maxColumn").value);
    let minRow = parseInt(document.getElementById("minRow").value);
    let maxRow = parseInt(document.getElementById("maxRow").value);

    let errorMessage = document.getElementById("errorMessage");
    let table = document.getElementById("multiplicationTable");

    errorMessage.textContent = "";
    table.innerHTML = "";

    if (isNaN(minColumn) || isNaN(maxColumn) || isNaN(minRow) || isNaN(maxRow)) {
        errorMessage.textContent = "All inputs must be valid integers.";
        return;
    }
    if (minColumn > maxColumn) {
        errorMessage.textContent = "Minimum column value cannot be greater than maximum column value.";
        return;
    }
    if (minRow > maxRow) {
        errorMessage.textContent = "Minimum row value cannot be greater than maximum row value.";
        return;
    }

    let headerRow = document.createElement("tr");
    headerRow.appendChild(document.createElement("th")); 

    for (let j = minColumn; j <= maxColumn; j++) {
        let th = document.createElement("th");
        th.textContent = j;
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);

    for (let i = minRow; i <= maxRow; i++) {
        let row = document.createElement("tr");

        let th = document.createElement("th");
        th.textContent = i;
        row.appendChild(th);

        for (let j = minColumn; j <= maxColumn; j++) {
            let cell = document.createElement("td");
            cell.textContent = i * j;
            row.appendChild(cell);
        }

        table.appendChild(row);
    }
    document.querySelector(".tableDiv").style.display = "block";

}
