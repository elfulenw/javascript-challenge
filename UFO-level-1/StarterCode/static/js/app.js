// from data.js
var tableData = data;

// Select talbe body in html
var tbody = d3.select("tbody");

// Define ufo_sighting?
// UFO Sighting table
function showTable(obj_list) {
    tbody.html('');

    obj_list.forEach(ufo_sighting => {
        var ufo_row = tbody.append("tr");
        
        // console.log data values
        Object.values(ufo_sighting).forEach(function(value) {
            var ufo_cell = ufo_row.append("td");
            ufo_cell.text(value);
        });
    });
};

showTable(tableData);
    
// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {
    var filter_data = tableData;
    var input_value = d3.select("#datetime").property("value");

    if (input_value) {
        filter_data = tableData.filter(sighting => sighting.datetime === input_value);
    };
    
    d3.select('input').property('value','');

    showTable(filter_data);
});
