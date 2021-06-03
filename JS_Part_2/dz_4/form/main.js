
//console.log(name);



function readName() {
    let name = document.getElementById("name").value;
    return name;
}

function readPhone() {
    let phone = document.getElementById("phone").value;
    return phone;
}

function readMail() {
    let mail = document.getElementById("mail").value;
    return mail;
}

function validate() {
    let name = readName();
    //console.log(name);
    let phone = readPhone();
    let mail = readMail();

    let nameValue = name.match(/^[a-zа-я]+$/i);
    if (nameValue === null) {
        let input = document.getElementById("name");
        input.classList.add("red");

    }

    let phoneValue = phone.match(/^(\+7)\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/i);
    if (phoneValue === null) {
        //console.log("Вы ввели некорректное значение");
        let input = document.getElementById("phone");
        input.classList.add("red");

    }

    let mailValue = mail.match(/^[a-z0-9.-]+@[a-z]+\.[a-z]{2,4}$/i);
    if (mailValue === null) {
        //console.log("Вы ввели некорректное значение");
        let input = document.getElementById("mail");
        input.classList.add("red");

    }

    let valueForm = [nameValue, phoneValue, mailValue];
    for (i = 0; i < valueForm.length; i++) {
        if (valueForm[i] === null) {
            let block = document.getElementById("text");
            block.innerHTML = "<p class='red-text'> Вы ввели некорректное значение</p>";
        }
    }
}

