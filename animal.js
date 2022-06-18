"use strict";
var temperamentInput = document.getElementById("temperament");
var temperamentText = document.getElementById("temperamentValue");
temperamentInput.addEventListener("input", showValue);
function showValue() {
    temperamentText.textContent = temperamentInput.value;
}
var Pet = /** @class */ (function () {
    function Pet(name, isMale, breed, age, color, isNeutered, isChipped, temperament) {
        this.name = name;
        this.isMale = isMale;
        this.breed = breed;
        this.age = age;
        this.color = color;
        this.isNeutered = isNeutered;
        this.isChipped = isChipped;
        this.temperament = temperament;
    }
    return Pet;
}());
var inHolding = {};
function getValue(id) {
    return document.getElementById(id).value;
}
function getChecked(id) {
    return document.getElementById(id).checked;
}
function Register() {
    var name = getValue("name");
    var isMale = getChecked("isMale");
    var breed = getValue("breed");
    var age = parseInt(getValue("age"));
    var color = getValue("color");
    var isNeutered = getChecked("neuteredYes");
    var isChipped = getChecked("chippedYes");
    var temperament = parseInt(getValue("temperament"));
    var pet = new Pet(name, isMale, breed, age, color, isNeutered, isChipped, temperament);
    inHolding[pet.name] = pet;
    render(pet);
    localStorage.setItem("pet", JSON.stringify(inHolding));
}
function booleanChecker(id, trueValue, falseValue) {
    if (document.getElementById(id).checked) {
        return trueValue;
    }
    else {
        return falseValue;
    }
}
function render(pet) {
    var tile = document.createElement("div");
    tile.className = "tile";
    document.getElementById("tilesContainer").appendChild(tile);
    var name = document.createElement("h4");
    tile.appendChild(name);
    name.innerText = pet.name;
    var isMale = document.createElement("p");
    tile.appendChild(isMale);
    isMale.innerText = "Gender: " + (pet.isMale ? "male" : "female");
    var breed = document.createElement("p");
    tile.appendChild(breed);
    breed.innerText = "Breed: " + pet.breed;
    var age = document.createElement("p");
    tile.appendChild(age);
    age.innerText = "Age: " + pet.age;
    var color = document.createElement("p");
    tile.appendChild(color);
    color.innerText = "Color: " + pet.color;
    var neutered = document.createElement("p");
    tile.appendChild(neutered);
    neutered.innerText = "Neutered: " + (pet.isNeutered ? "yes" : "no");
    var chipped = document.createElement("p");
    tile.appendChild(chipped);
    chipped.innerText = "Chipped: " + (pet.isChipped ? "yes" : "no");
    var temperament = document.createElement("p");
    tile.appendChild(temperament);
    temperament.innerText = "Temperament: " + pet.temperament;
    // for (let attribute in pet) {
    //     let petAttribute = document.createElement("p")
    //     petAttribute.innerText += `${attribute}: ${pet[attribute]}`
    //     tile.appendChild(petAttribute)
    // }
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    tile.appendChild(deleteButton);
    deleteButton.addEventListener("click", deleteEntry);
    deleteButton.dataset.name = pet.name;
}
inHolding = JSON.parse(localStorage.getItem("pet"));
function showInHolding() {
    document.getElementById("tilesContainer").innerHTML = "";
    if (inHolding == null) {
        inHolding = {};
    }
    for (var name_1 in inHolding) {
        render(inHolding[name_1]);
    }
}
function deleteEntry(e) {
    var button = e.target;
    delete inHolding[button.dataset.name];
    showInHolding();
    localStorage.setItem("pet", JSON.stringify(inHolding));
}
showInHolding();
