// 3.2.1 Destination Data [1 point]
const destinations = [
{name : "Bangkok",description : "The bustling capital city of Thailand"},
{name : "Chiang Mai ",description : "A cultural and historic hub in the north."},
{name : "Phuket  ",description : "Famous for its beaches and vibrant nightlife."},
{name : "Krabi" , description : "Known for its stunning limestone cliffs and clear waters."},
{name : "Pattaya" , description : "A popular coastal city with exciting attractions."},

];

// Select the container div
const container = document.querySelector("#destination-container");

// 3.2.2 Create the table elements such as the table headers [1 point]
const table = document.createElement("table");

// 3.2.4 To style the table applying class "styled-table" [1 point]
table.classList.add("styled-table");

const thead = document.createElement("thead");
const headerRow = document.createElement("tr");

// 3.2.2 Add header text elements to header columns [2 points]
const headers = ["No.", "Destination", "Description"];
headers.forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
});
thead.appendChild(headerRow);
table.appendChild(thead);

// 3.2.3 Create the table body [4 points]
const tbody = document.createElement("tbody");

destinations.forEach((destination, index) => {
    // Create table body elements and row elements [1 point]
    const row = document.createElement("tr");

    // Create the index cell [1 point]
    const cellNo = document.createElement("td");
    cellNo.textContent = index + 1; // Start from 1
    row.appendChild(cellNo);

    // Create the destination name cell [1 point]
    const cellName = document.createElement("td");
    cellName.textContent = destination.name;
    row.appendChild(cellName);

    // Create the description cell [1 point]
    const cellDesc = document.createElement("td");
    cellDesc.textContent = destination.description;
    row.appendChild(cellDesc);
    
    // Append row to tbody
    tbody.appendChild(row);
});

table.appendChild(tbody);

// Append the table to the container
container.appendChild(table);
