function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// Enter კლავიშით დამატება
input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addBtn.click();
    }
});

addBtn.addEventListener("click", () => {
    const text = input.value.trim();

    if (text === "") {
        alert("ტექსტი შეიყვანეთ!");
        return;
    }

    // ელემენტის შექმნა
    const item = document.createElement("div");
    item.classList.add("todo-item");
    item.style.backgroundColor = getRandomColor();

    // ტექსტის span
    const span = document.createElement("span");
    span.textContent = text;

    // წაშლის ღილაკი ქართულად
    const washlaBTN = document.createElement("button");
    washlaBTN.textContent = "წაშლა";
    washlaBTN.classList.add("delete-btn");

    // წაშლის ფუნქცია
    washlaBTN.addEventListener("click", () => {
        item.remove();
    });

    // ელემენტის აწყობა
    item.appendChild(span);
    item.appendChild(washlaBTN);
    todoList.appendChild(item);

    // input გაწმენდა
    input.value = "";
});
