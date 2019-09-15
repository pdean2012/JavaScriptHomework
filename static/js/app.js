// from data.js
var tableData = data;

// YOUR CODE HERE!

//Set up function that occurs when button is clicked
var button = d3.select("#filter-btn");

button.on("click", function() {

    //Collect the date input by the user
    var inputElement = d3.select("#datetime");
    var dateInput = inputElement.property("value");
    
    //filter the data
    var filteredData = data.filter(dataobj => dataobj.datetime === dateInput);

    //testing these selections work
    console.log(inputElement);
    console.log(dateInput);
    console.log(filteredData);    

    //Clear any previous data in the table
    var tbody = d3.select("tbody");
    tbody.html("")

    //Pushing the data into the table -> select the table body, then for each object in the filtered data append a row
    // then for each entry in the object, append a cell and put the entry value in the cell

    filteredData.forEach((filterobj) => {
    var row = tbody.append("tr");
    Object.entries(filterobj).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
    });
});