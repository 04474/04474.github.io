// Call the function to initially set the text and color
updateText("buy");

function updateText(text) {
    var outputElement = document.getElementById("output");

    if (text.toLowerCase() === "buy") {
        outputElement.textContent = text;
        outputElement.style.color = "green";
    } else if (text.toLowerCase() === "sell") {
        outputElement.textContent = text;
        outputElement.style.color = "red";
    } else {
        outputElement.textContent = "Invalid input";
        outputElement.style.color = "black";
    }
}