var menu = document.getElementById("burger");
menu.addEventListener('click', Derouler);

function Derouler(){
    document.getElementById("menu-deroulant").style.display = "block";
    document.getElementById('burger').style.display = "none";
}

var fermer = document.getElementById("fermer");
fermer.addEventListener('click', fermermenu);

function fermermenu(){
    document.getElementById("menu-deroulant").style.display = "none";
    document.getElementById("burger").style.display = "block";
    
}