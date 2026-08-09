// Task add karne ka simple function
function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    // Agar input khali hai, toh alert dikhao
    if (taskText === "") {
        alert("Pehle kuch likho!");
        return;
    }

    // Naya list item (li) banao
    let li = document.createElement("li");
    
    // Item ke andar text aur ek delete button dalo
    li.innerHTML = `
        <span>${taskText}</span> 
        <button class='delete-btn' onclick='this.parentElement.remove()'>Delete</button>
    `;

    // List (ul) ke andar is naye item ko jod do
    document.getElementById("taskList").appendChild(li);
    
    // Input field ko wapas khali kar do agle task ke liye
    input.value = ""; 
}