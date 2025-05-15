function getString() {
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("user-string").value;
    let reversedString = getReversedString(userString);

    displayResult(reversedString);
}

function getReversedString(userString) {
    let reversedString = [];

    for (let i = userString.length - 1; i >= 0; i--){
        reversedString += userString[i];
    }

    return reversedString;
}

function displayResult(reversedString){
    // Write message on the page
    document.getElementById("message").innerHTML = `The reversed string is: ${reversedString}`;

    // Show the alert box
    document.getElementById("alert").classList.remove("invisible");
}