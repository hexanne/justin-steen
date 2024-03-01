function showNav(){
document.getElementById("nav-menu").style.width = "90%";
setTimeout(function(){
document.getElementById("nav-menu").style.height ="90%";
},2000);
}

function tie(){
setInterval(function(){
const dateString = new Date().toLocaleString() ;
const formattedString = dateString.replace(" , ", " - ") ;
document.getElementById("tim").innerHTML = "Your time of visit is "+ formattedString;
},1000);
}

tie();


function hideNav(){
document.getElementById("nav-menu").style.height = "2%";
setTimeout(function(){
document.getElementById("nav-menu").style.width ="0%";
},2000);
}

function About(){
document.getElementById("cover").style.height = "100%";
setTimeout(function(){
location.replace("about.html");
},2000);
}

function huhu(){
document.getElementById("cover").style.height = "0%";
};

function Homee(){
document.getElementById("cover").style.height = "100%";
setTimeout(function(){
location.replace("index.html");
},2000);
}

function Projects(){
document.getElementById("cover").style.height = "100%";
setTimeout(function(){
location.replace("projects.html");
},2000);
}

function Contact(){
document.getElementById("cover").style.height = "100%";
setTimeout(function(){
location.replace("contact.html");
},2000);
}

