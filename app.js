function addTask() {
    let input = document.getElementById("taskInput");

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let text = document.createElement("span");
    text.innerHTML = input.value;

    let btn = document.createElement("button");
    btn.innerHTML = "Delete";

    btn.onclick = function() {
        li.remove();
    };

    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(btn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}