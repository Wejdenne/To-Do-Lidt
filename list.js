var list = [];
var input = prompt("What would you want to do?");

while (input !== "quit") {
    if (input === "list") {
        // handle input
        list.forEach(function(todos, i) {
            console.log("********");
            console.log(i + ": " + todos);
            console.log("********");
        });
    } else if (input === "new") {
        // ask for new todo array
        var newToDo = prompt("Enter a new todo");
        // add a new todo array
        list.push(newToDo);
        console.log("todo added");
    } else if (input === "delete") {
        // ask for todo to be deleted
        var index = prompt("which todo you want to be deleted");
        // remove a specific array
        list.splice(index, 1);
        console.log("todo deleted");
    }
    // ask again for new input
    input = prompt("What would you want to do?");

}
console.log("See you soon!!");