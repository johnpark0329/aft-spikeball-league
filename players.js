th = document.getElementsByTagName("th");

for (let j = 0; j < th.length; j++){
    th[j].addEventListener("click", item(j));
}

function item(j){
    return function(){
        sortTable(j);
    }
}

function sortTable(n){
    var table, rows, switching, i, x, y, shouldSwitch, direction, switchCount = 0;
    table = document.getElementById("myTable");
    switching = true;

    direction = "ascending";

    while (switching){
        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++){
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[n];
            y = rows[i + 1].getElementsByTagName("td")[n];
            if (direction == "ascending"){
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()){
                    shouldSwitch = true;
                    break;
                }
            }
            else if (direction == "descending"){
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()){
                    shouldSwitch = true;
                    break;
                }
            }
        }

        if (shouldSwitch){
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchCount++;
        }
        else{
            if (switchCount == 0 && direction == "ascending") {
                direction = "descending";
                switching = true;
            }
        }
    }
}