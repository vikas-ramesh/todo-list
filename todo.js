var ul = document.getElementById("list-container");

function additem() {
    var input = document.getElementById("input");
    if (input.value.trim() === "") return;

    var listitem = document.createElement("li");
    listitem.innerHTML = `
        ${input.value}
        <div>
            <button class="edit-btn" onclick="edititem(event)">Edit</button>
            <button class="delete-btn" onclick="deleteitem(event)">Delete</button>
        </div>
    `;
    ul.append(listitem);
    input.value = "";
}

function deleteitem(event) {
    event.target.parentElement.parentElement.remove();
}

function edititem(event) {
    var listitem = event.target.parentElement.parentElement;
    var newValue = prompt("Edit the item:", listitem.firstChild.textContent.trim());
    if (newValue !== null) {
        listitem.firstChild.textContent = newValue + " ";
    }
}
