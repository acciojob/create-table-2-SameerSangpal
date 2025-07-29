function createTable() {
    //Write your code here
	const rows = parseInt(prompt("Input number of rows"));
	const cols = parseInt(prompt("Input number of columns"));

	if(isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0){
		alert("Please enter positive numeric values for rows and columns.");
		return;
	}

	const table = document.getElementById("myTable");
	table.innerHTML = '';

	for(let i = 0; i < rows; i++){
		const row = document.createElement("tr");

		
	for(let j = 0; j < cols; j++){
		const cell = document.createElement("td");
		cell.textContent = `Row-${i} Column-${j}`;
		row.appendChild(cell);
	}
	table.appendChild(row);
	}
}
