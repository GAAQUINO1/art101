/**
 * Author:   Angel A
 * Created:   10/30/22
 * license: Public Domain
 **/

outputEl = document.getElementById("output");
new1El = document.createElement("p");
new2El = document.createElement("p");
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
new1El.id = "graffiti1";
new2El.id = "graffiti2";
new1El.innerHTML = "This is new1El !";
new2El.innerHTML = "This is new2El !";
new1El.style.color = "blue";
new2El.style.color = "red";
new1El.style.fontSize = "50px";
new2El.style.fontSize = "50px";
