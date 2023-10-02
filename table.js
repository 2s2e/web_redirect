async function generateTable() {
    var storageItems = await chrome.storage.sync.get(["redirects"]);
    var all = storageItems.redirects;

    console.log(all)

    let tableContainer = document.getElementById("tableContainer");
    
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    let headerRow = document.createElement("tr");

    const headers = ["Redirect From", "Redirect To", "Remove"];

    //create the table headers 
    for (let i = 0; i < headers.length; i++) {
        let header = document.createElement("th");
        header.innerHTML = headers[i];
        headerRow.appendChild(header);
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    const keys = Object.keys(all);
    const values = Object.values(all);
    //create the table contents
    for (var i = 0; i < keys.length; i++) {
        

        let row = document.createElement("tr");

        let from = document.createElement("td");
        let to = document.createElement("td");
        let remove = document.createElement("td");

        from.innerHTML = keys[i];
        to.innerHTML = values[i];
        remove.innerHTML = "X";

        row.appendChild(from);
        row.appendChild(to);
        row.appendChild(remove);

        tbody.appendChild(row);
        console.log(row);
    }
    table.appendChild(tbody);

    tableContainer.appendChild(table);
}

generateTable();