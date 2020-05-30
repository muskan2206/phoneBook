"use strict";
class PhoneBook {
    constructor() {
        this.contacts = [];
    }
    add(info) {
        this.contacts.push(info); 
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
        phoneBook.display();
    }
    display() {
        const cardContainer = document.querySelector(".card-container");
        cardContainer.innerHTML = ""; 
        const trashArray= document.getElementsByClassName("img-btn");

        document.getElementById("contact-form").reset();

        for (let contact of this.contacts) {
            const createDiv = document.createElement("div");
            createDiv.classList.add("card");
            const createP = document.createElement("p");
            const createImg = document.createElement("IMG");
            createImg.classList.add("img-btn"); 
            createImg.src = "./images/baseline-delete_forever24px.svg"; 
            createP.innerText = `Name: ${contact.name}
            Email: ${contact.email}
            Phone: ${contact.phone}
            Relationship: ${contact.relation}
            `; 

            cardContainer.appendChild(createDiv)
                         .appendChild(createP)
                         .appendChild(createImg);

            createImg.addEventListener("mouseenter", () => {
                createImg.classList.add("trash-hover");
            });
            createImg.addEventListener("mouseleave", () => {
                createImg.classList.remove("trash-hover");
            });

        };
        
        for (let index = 0; index < trashArray.length; index++) {
            trashArray[index].addEventListener("click", () => {
            phoneBook.deleteAt(index);
                
            });

        };

    }
}
class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

const phoneBook = new phoneBook();

document.querySelector("#add-btn").addEventListener("click", () => {
    const input = document.querySelectorAll(".input-item");
    const select = document.querySelector(".select-options");
    const option = select.options[select.selectedIndex].value;
    phoneBook.add(new Contact(input[0].value, input[1].value, input[2].value, option));
    
    phoneBook.display();
});



