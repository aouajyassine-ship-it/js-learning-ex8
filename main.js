const notes1 = document.querySelectorAll(".note")
const notes = document.getElementsByClassName("note")
const surligner = document.getElementById("surligner")
const themes = document.getElementsByName("theme")

// console.log(notes)
// console.log(notes1)

surligner.addEventListener("click",function(){
    for(let i = 0 ; i < notes1.length ; i++){
        notes1[i].classList.toggle("bg-yellow-200")
    }
})

Array.from(notes).forEach(function(note){
    console.log(note)
})

lire.addEventListener("click", function(){
    for(let i = 0; i < themes.length; i++){
        if(themes[i].checked){
            console.log(themes[i].value)
        }
    }
})

const nouvelleNote = document.createElement("p")
nouvelleNote.classList.add("note")
nouvelleNote.textContent = "Note D"
document.body.appendChild(nouvelleNote)
console.log("querySelectorAll :", notes1.length)
console.log("getElementsByClassName :", notes.length)