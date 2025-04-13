const addButton = document.querySelector(".footer-iconBox");
const inputBox = document.querySelector(".box-input");
const inputField = document.querySelector(".input");
const cancelIcon = document.querySelector(".fa-xmark");
const todoList = document.querySelector(".todo-list");

let inputVisible = true;
//  list-e melumat elave etmek
addButton.addEventListener("click", function () {
    const inputValue = inputField.value.trim();

    if (inputVisible && inputValue !== "") {
        const li = document.createElement("li");
        li.className = "todo-item";

        const itemBox = document.createElement("div");
        itemBox.className = "todo-content";

        const text = document.createElement("p");
        text.textContent = inputValue;

        const removeIcon = document.createElement("i");
        removeIcon.className = "fa-solid fa-xmark";

        removeIcon.addEventListener("click", function () {
            li.remove();

            if (todoList.children.length === 0) {
                todoList.style.display = "none";
                inputBox.style.display = "block";
                inputVisible = true;
            }
        });

        itemBox.appendChild(text);
        itemBox.appendChild(removeIcon);
        li.appendChild(itemBox);
        todoList.appendChild(li);

        inputBox.style.display = "none";
        inputVisible = false;
        inputField.value = "";

        todoList.style.display = "block";
    } else if (!inputVisible) {
        inputBox.style.display = "block";
        inputVisible = true;
    }
});

cancelIcon.addEventListener("click", function () {
    inputField.value = "";
    if (todoList.children.length === 0) {
        todoList.style.display = "none";
    }
});



const sortIcon = document.querySelector(".sort-icon");
let sortAscending = true;

sortIcon.addEventListener("click", function () {
    const items = Array.from(todoList.children);

    const sortedItems = items.sort((a, b) => {
        const textA = a.querySelector("p").textContent.toLowerCase();
        const textB = b.querySelector("p").textContent.toLowerCase();

        if (sortAscending) {
            // A → Z
            return textA.localeCompare(textB); 
        } else {
            // Z → A
            return textB.localeCompare(textA); 
        }
    });

    todoList.innerHTML = "";
    sortedItems.forEach(item => todoList.appendChild(item));

    if (sortAscending) {
        sortIcon.classList.remove("fa-arrow-down-wide-short");
        sortIcon.classList.add("fa-arrow-up-wide-short");
    } else {
        sortIcon.classList.remove("fa-arrow-up-wide-short");
        sortIcon.classList.add("fa-arrow-down-wide-short");
    }


    sortAscending = !sortAscending;
});
