var username = "Amna";
function greetUser(username) {
    if (username === null) {
        console.log("Hello, Guest!");
    }
    else {
        console.log("Hello, ".concat(username, "!"));
    }
}
greetUser("Amna");
greetUser(null);
