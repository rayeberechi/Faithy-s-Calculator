function calculator() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let operator = document.getElementById("operator").value;


    if (input1 === "" || input2 === "") {
        alert("Please enter both numbers.");
        return;
    }

    input1 = Number(input1);
    input2 = Number(input2);

    if (isNaN(input1) || isNaN(input2)) {
        alert("Please enter valid numbers.");
        return;
    }

    let result;

    switch (operator) {
        case "add":
            result = input1 + input2;
            break;
        case "subtract":
            result = input1 - input2;
            break;
        case "multiply":
            result = input1 * input2;
            break;
            case "divide":
            result = input1 / input2;
            break;
    }
// Result
document.getElementById("result").innerHTML = `Result: ${result}`;
}