function changeMode(size, weight, transform, background, color){
    return function(){
        document.documentElement.style.fontSize = size + "px";
        document.documentElement.style.fontWeight = weight;
        document.documentElement.style.textTransform = transform;
        document.documentElement.style.backgroundColor = background;
        document.documentElement.style.color = color;
    }
}


function main(){
    let spooky = changeMode("9", "bolt", "uppercase", "pink", "green");
    let darkMode = changeMode("12", "bold", "capitalize", "black", "white")
    let screamMode = changeMode("12", "normal", "lowercase", "white", "black")

    let paragraph = document.createElement("p");
    paragraph.textContent = "Welcome Holberton!";
    document.body.appendChild(paragraph);

    let spooky_button = document.createElement("button");
    spooky_button.textContent = "Spooky"
    spooky_button.onclick = spooky;
    document.body.appendChild(spooky_button);

    let Dark_mode_button = document.createElement("button");
    Dark_mode_button.textContent = "Dark_mode";
    Dark_mode_button.onclick = darkMode;
    document.body.appendChild(Dark_mode_button);

    let Scream_mode_button = document.createElement("button");
    Scream_mode_button.textContent = "Scream mode";
    Scream_mode_button.onclick = screamMode;
    document.body.appendChild(Scream_mode_button);
}