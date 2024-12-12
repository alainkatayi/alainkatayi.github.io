var menu = document.getElementById("burger");
menu.addEventListener('click', Derouler);


function Derouler(){
    document.getElementById("menu-deroulant").style.display = "block";
}


var fermer = document.getElementById("fermer");
fermer.addEventListener('click', fermermenu);


function fermermenu(){
    document.getElementById("menu-deroulant").style.display = "none";
    document.getElementById("burger").style.display = "block";  
}