let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasks = document.querySelector(".tasks");
let task = document.querySelector(".tasks .task")
let inputValue = input.value

if (input.value !== "") {
    input.onblur = function () {
        localStorage.setItem("input", input.value);
    };
    input.value = localStorage.getItem("input");
}

submit.onclick = function () {
    if (input.value != "") {
        let div = document.createElement("div")
        let del = document.createElement("p")
        let delText = document.createTextNode("delete")
        del.appendChild(delText)
        div.classList.add("task")
        div.innerHTML  = input.value
        tasks.appendChild(div)
        input.value = "";
        div.onclick = function () {
        this.classList.add("done")
        }
        div.appendChild(del)       
        del.onclick = function () {
            del.parentElement.remove()
        }
        localStorage.setItem("tasks", myArr);
    }
};
