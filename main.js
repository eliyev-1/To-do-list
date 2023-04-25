
function show(){
    
    let todoList__list =document.querySelector('.todoList__list')
let inputValue =document.querySelector('.inputValue')
let div = document.createElement('div')
div.className="div"
let p = document.createElement('p')
let span = document.createElement('span')
span.innerHTML='<i class="fa-solid fa-delete-left"></i>'
let text = document.createTextNode(inputValue.value)

p.appendChild(text)
todoList__list.appendChild(div);
div.appendChild(p);
div.appendChild(span);
inputValue.value=""
span.addEventListener("click",deleteClick);
function deleteClick(){
    div.style.display="none"
}

}

