function add(v1, v2) {
    return v1 + v2;
}

function sub(v1, v2) {
    return v1 - v2;
}

function multi(v1, v2) {
    return v1 * v2;
}

function div(v1, v2) {
    return v1 / v2;
}

function createCalculator(){
    document.write("<table>");
    document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");
    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");
    document.write("</table>");
}

function showResults(){
    document.write("<table>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
    document.write("</table>");
}

