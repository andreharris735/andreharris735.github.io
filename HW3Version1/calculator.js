// calculator.js

const allowedOperations = ["+", "-", "*", "/", "%"];
const resultsList = []; // store numeric results

// Hook up button after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("calcBtn").addEventListener("click", calculate);
});

function calculate() {
    const rawNum1 = document.getElementById("num1").value.trim();
    const rawNum2 = document.getElementById("num2").value.trim();
    const operator = document.getElementById("operator").value.trim();

    const num1 = parseFloat(rawNum1);
    const num2 = parseFloat(rawNum2);

    let resultDisplay;      // for table display
    let numericResult = null; // only numeric results for stats

    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay = "Wrong Number Input";
    } else if (!allowedOperations.includes(operator)) {
        resultDisplay = "Computation Error";
    } else {
        switch(operator) {
            case '+': numericResult = num1 + num2; break;
            case '-': numericResult = num1 - num2; break;
            case '*': numericResult = num1 * num2; break;
            case '/': numericResult = (num2 !== 0) ? num1 / num2 : null; break;
            case '%': numericResult = (num2 !== 0) ? num1 % num2 : null; break;
        }
        resultDisplay = numericResult !== null ? numericResult : "Error (÷0 or mod0)";
    }

    insertIntoTable(rawNum1, operator, rawNum2, resultDisplay, numericResult);

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operator").value = "";
}

function insertIntoTable(num1, operator, num2, resultDisplay, numericResult) {
    const table = document.getElementById("historyTable");
    const row = table.insertRow(-1);

    row.insertCell(0).innerText = num1;
    row.insertCell(1).innerText = operator;
    row.insertCell(2).innerText = num2;
    row.insertCell(3).innerText = resultDisplay;

    if (typeof numericResult === "number" && !isNaN(numericResult)) {
        updateStatistics(numericResult);
    }
}

function updateStatistics(result) {
    resultsList.push(result);

    const min = Math.min(...resultsList);
    const max = Math.max(...resultsList);
    const total = resultsList.reduce((a, b) => a + b, 0);
    const average = total / resultsList.length;

    const statsRow = document.getElementById("statsRow");
    statsRow.cells[0].innerText = min;
    statsRow.cells[1].innerText = max;
    statsRow.cells[2].innerText = average.toFixed(2);
    statsRow.cells[3].innerText = total;
}
