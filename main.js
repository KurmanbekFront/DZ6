const input = document.querySelector("#input");
const createButton = document.querySelector("#create_button");
const todoList = document.querySelector("#todo_list");

const createTodo = () => {
    const textArr = []
    const div = document.createElement("div");
    const text = document.createElement("h3");
    const buttonsDiv = document.createElement("div")
    const deleteBtn = document.createElement("button")

    if (input.value.trim() === "") return alert("Не должно быть пусто!");

    div.setAttribute("class", "block_text");

    function reverseString(str) {
        return str.split('').reverse().join('');
    }
    textArr.push(reverseString(input.value));
    
    buttonsDiv.setAttribute("class", "buttons_div")
    deleteBtn.setAttribute("class", "delete_button")
    deleteBtn.innerHTML = "delete"
    buttonsDiv.append(deleteBtn)
    textArr.forEach((item) => {
        text.innerHTML = item
        div.append(text, buttonsDiv);
    })

    todoList.append(div)
    
    input.value = "";

    deleteBtn.onclick = () => {
        div.remove(buttonsDiv)
    }
}

createButton.onclick = () => createTodo();


// createButton.addEventListener("click", createTodo)

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") return createTodo(); 
})


