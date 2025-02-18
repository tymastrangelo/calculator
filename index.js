const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = safeEvaluate(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function safeEvaluate(expression) {
    // Only allow numbers, operators, and parentheses to prevent security issues
    if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
        throw new Error("Invalid characters in expression");
    }

    // Use Function constructor to safely evaluate
    return new Function("return " + expression)();
}