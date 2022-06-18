dogs = []
loadAndDisplayPets()


function saveDog() {
    let dog = {}
    dog.name =document.getElementById("name").value
    dog.age =document.getElementById("age").value
    dog.chipped =document.getElementById("chipped").checked
    dogs.push(dog)

    renderDog(dog)
    localStorage.setItem("dogs", JSON.stringify(dogs))
}
function renderDog(dog) {

    let Tile = document.createElement("h2")
    document.getElementById("box").appendChild(Tile)
    Tile.innerText = dog.name

    let age = document.createElement("h3")
    document.getElementById("box").appendChild(age)
    age.innerText = dog.age

    let chipped = document.createElement("h4")
    document.getElementById("box").appendChild(chipped)
    chipped.innerText = dog.chipped
//Deleting
    let deleteButton = document.createElement("button")
    deleteButton.innerText="delete"
    Tile.appendChild(deleteButton)

    deleteButton.addEventListener("click",deleteDog)
    deleteButton.dataset.index=i
    
}

function loadAndDisplayPets() {
    dogs = JSON.parse(localStorage.getItem("dogs"))
    for(i=0; i<dogs.length; i++){
    renderDog(dogs[i])}

    if (dogs==null){
        dogs=[]
    }
    
}
//also deleting
function deleteDog(e){

    let button=e.target
    let i=button.dataset.index

    dogs.splice(i,1)

    localStorage.setItem("dogs", JSON.stringify(dogs))
    document.getElementById("box").innerHTML = ""
    loadAndDisplayPets()
    
}
