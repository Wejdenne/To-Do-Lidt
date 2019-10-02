var list = [];
var input = prompt("What would you want to do?");

while (input !== "quit") {
    if (input === "list") {
        console.log(list);
    } else if (input === "new") {
        var newToDo = prompt("Enter a new todo");
        list.push(newToDo);
    }
    input = prompt("What would you want to do?");

}
console.log("See you soon!!");