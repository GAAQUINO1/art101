/**
 * Author:   Angel A
 * Created:   10/21/22
 * license: Public Domain
 **/


 //Define Variables

 myTransport = ["Bus","Ford Bronco"];

 myMainRide = {
   make : "Ford",
   model : "Bronco",
   color : "Blue",
   year : 1971,
   age : function() {
        return 2022 - age;
   }
 }

 //Output

 document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
 document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");
