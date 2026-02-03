let btn = document.querySelector("button")
let notesContainer = document.querySelector(".output")
btn.addEventListener("click",function(){
    let inputBox = document.createElement("p")
    let img = document.createElement("img")
    inputBox.className = "input-box"
    img.src = "delete.png"
    inputBox.setAttribute("contenteditable", "true")
    inputBox.appendChild(img)
    notesContainer.appendChild(inputBox)
})
notesContainer.addEventListener('click',function(e){
    if(e.target.tagName==='IMG'){
        e.target.parentElement.remove()
    }
})
