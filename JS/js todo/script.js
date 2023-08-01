const input = document.getElementById("input")
const main = document.getElementById("main")

function addTask(){
    if (input.value == "") {
        alert("please enter a todo")
    }
    else{
        const li = document.createElement("li")
        li.innerHTML = input.value;
        main.appendChild(li);

        const span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    input.value == "";
}

main.addEventListener("click", (e)=>{
if(e.target.tagName === "LI"){
    e.target.classList.toggle("ckecked")
}
else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();

}
})