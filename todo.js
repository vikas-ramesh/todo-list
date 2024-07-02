var ul=document.getElementById("list-container")
function additem(){
    var listitem=document.createElement("li")
    listitem.innerHTML=input.value + "<button onclick='deleteitem(event)'>Delete</button>"
    ul.append(listitem)
}
function deleteitem(event){
    event.target.parentElement.remove()
}