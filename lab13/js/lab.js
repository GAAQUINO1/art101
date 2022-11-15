/**
 * Author:   Angel A
 * Created:   11/14/22
 * license: Public Domain
 **/
 maxFactors = 4;

 outputEl = document.getElementById("output");

 function getFactorobj() {
     var Factorobj = {};
     for (var factor=0; factor<maxFactors; factor++) {
         numEl = "num" + factor;
         textEl = "text" + factor;
         NumVal = document.getElementById(numEl).value;
         TextVal = document.getElementById(textEl).value;
         console.log(factor + ") num:", NumVal, "text:", TextVal)
         if (NumVal && TextVal) {
             Factorobj[NumVal] = TextVal;
         }
     }
     return Factorobj;
 }

 function PgOutput(str) {
     newEl = document.createElement("p");
     newEl.innerHTML = str;
     outputEl.appendChild(newEl);
 }


 function FBZ(maxNums, Factorobj) {
     for (var num=0; num<maxNums; num++) {
         debugger;
         var Stroutput = "";
         for (var factor in Factorobj) {
             if (num % factor == 0) {
                 Stroutput += Factorobj[factor];
             }
         }
         if (Stroutput) {
             Stroutput = " - " + Stroutput;
         }
         PgOutput(num.toString() + Stroutput)
     }
 }

 function reportError(str) {
     outputEl.innerHTML = "<div class='error'>" + str + "</div>";
 }

 document.getElementById("submit").addEventListener("click", function() {
     var max = document.getElementById("max").value;
     console.log("max:", max)
     if (! max) {
         reportError("You must provide a maximum");
         return;
     }
     var Factorobj = getFactorobj();
     console.log("Factorobj:", Factorobj);
     if (Object.keys(Factorobj).length === 0) {
         reportError("You must provide at least one factor and text");
         return;
     }
     outputEl.innerHTML = "";
     FBZ(max, Factorobj);
     outputEl.classList.add("cols");
 })
