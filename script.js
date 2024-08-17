document.addEventListener("DOMContentLoaded", () => {

    let addTask = document.getElementById("addTask")
    let text = document.getElementById("text")
    let result = document.querySelector(".result")

    addTask.addEventListener("click", addFunction);
    result.addEventListener("click", handleAllAction);

    function addFunction() {
        let textValue = text.value;
        if (textValue === "") return;

        let li = document.createElement("li");
        li.innerHTML = `<div class="main">
                                <span class="spans">${textValue}</span>
                                <button class="edit" id="radius">Edit</button>
                                <button class="delete" id="radius">Delete</button>
                                </div>`;
        result.appendChild(li);
        text.value = "";
        addTask.innerText = "Add";
    }

    function handleAllAction(e) {
        if (e.target.classList.contains("edit")) {
            editFun(e.target.parentElement);
        }
        else if (e.target.classList.contains("delete")) {
            dltFun(e.target.parentElement);
        }
    }
    function editFun(editItem) {
        const div = editItem.querySelector("span");
        const editDiv = div.textContent;
        if (editDiv) {
            text.value = editDiv;
            addTask.innerText = "Save"
        }

    }
    function dltFun(dltItem) {
        if (dltItem) {
            dltItem.remove()
        }

    }

})