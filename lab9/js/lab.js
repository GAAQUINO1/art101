/**
 * Author:   Angel A
 * Created:   10/30/22
 * license: Public Domain
 **/

outputEl = document.getElementById("output");
new1El = document.createElement("p");
new2El = document.createElement("p");
lastEl = document.createElement("p");
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
outputEl.appendChild(lastEl);
new1El.id = "graffiti1";
new2El.id = "graffiti2";
lastEl.id = "graffiti3";
new1El.innerHTML = "This is new1El !";
new2El.innerHTML = "This is new2El !";
lastEl.innerHTML = "This is one should've been last !";
new1El.style.color = "blue";
new2El.style.color = "red";
lastEl.style.color = "purple";
new1El.style.fontSize = "50px";
new2El.style.fontSize = "50px";
lastEl.style.fontSize = "50px";
outputEl.insertBefore(lastEl, new1El);
