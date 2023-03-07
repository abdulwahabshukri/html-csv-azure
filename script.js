function exportToCsv() {
    var name = document.getElementById("name").value;
    var vorname = document.getElementById("vorname").value;
    var alter = document.getElementById("alter").value;

    var csv = name + "," + vorname + "," + alter;

    var hiddenElement = document.createElement("a");
    hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
    hiddenElement.target = "_blank";
    hiddenElement.download = "informationen.csv";
    hiddenElement.click();
}