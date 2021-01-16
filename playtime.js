var click = document.querySelector("#clickEl"); 
        click.addEventListener("click", change);
        click.addEventListener("dblclick", changeBack);


        function change() {
            click.innerHTML = "I changed!!";
        }        

        function changeBack() {
            click.innerHTML = "Click Me!!!";
        }

        
        var buttonOne = document.querySelector("#buttonOne");
        buttonOne.addEventListener("mouseover", image);
        buttonOne.addEventListener("mouseout", empty)
        
        

        function image() {
            var pic = document.querySelector("#image");
            pic.innerHTML ="<img src=\"https://banner2.cleanpng.com/20171218/707/mouse-cursor-png-5a37c6e2d91ee2.1804954915136048348893.jpg\">"

    }

    function empty() {
        var pic = document.querySelector("#image");
        pic.innerHTML = "";
    }

var letters = ["a", "b", "c", "d", "e"];

for (j = 0; j < letters.length; j++) {
    var letterSpot = document.querySelector("#letterBox");
    letterSpot.textContent = letters;
    console.log(letters[j]);
}

buttonOne.addEventListener("click", clear)
function clear(){
    letterSpot.innerHTML = ""
}

var userName = document.querySelector(".form-control")
userName.addEventListener("keyup", log);

function log() {
    console.log(userName.textContent);
}

var submit = document.querySelector("#userButton");
submit.addEventListener("click", storeName);

function storeName() {
    console.log(userName.value);
}


var pjMasks = {
    catboy: "blue",
    owlette: "red",
    gecko: "green",
}

var keys = Object.keys(pjMasks);
console.log(keys);

var values = Object.values(pjMasks);
console.log(values);

var entries = Object.entries(pjMasks);
console.log(entries);

for (var key of keys) {
    console.log(key);
    
}

for (var value of values) {
    console.log(value);
}

console.log(keys.slice(-1));
console.log(values.slice(-2));

function sum (m,n) {
    console.log(m + n);
}

sum (5,6);

