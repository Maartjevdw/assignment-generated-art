
var arrKleur = ["#896978", "#FFADC6", "#DC758F", "#B6465F", "#A2666F"]

var xlmns = "http://www.w3.org/2000/svg";
var svg = document.createElementNS(xlmns, "svg");
svg.setAttribute("width", 500);
svg.setAttribute("height", 500);
svg.setAttribute("ViewBox", "0 0 500 500");


function cirkelTekenen(x, y, r, cirkelKleur) {
    var circle = document.createElementNS(xlmns, "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", r);
    circle.setAttribute("fill", cirkelKleur);
    circle.setAttribute("stroke", "black");
    svg.appendChild(circle);
 
    document.body.appendChild(svg);
}

for (var i = 0; i < 1200; i++) {
    var x = Math.floor(Math.random() * (500 - 0 + 1));
    var y = Math.floor(Math.random() * (500 - 0 + 1));
    var r = Math.floor(Math.random() * (15 - 3 + 1)) + 3;
    var cirkelKleur = arrKleur[Math.floor(Math.random() * arrKleur.length)];
    cirkelTekenen(x, y, r, cirkelKleur);
    
} 

function createCircle(x,y,r){
    let circle = document.createElementNS(xlmns, "circle");
    circle.setAttribute("id", "mijnCirkel");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", r);
    circle.setAttribute("fill", "#DCCCFF");
    circle.setAttribute("stroke", "black");
    svg.appendChild(circle);
}

createCircle(100,100,50);

document.body.appendChild(svg);
