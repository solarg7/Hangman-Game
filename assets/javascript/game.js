window.onload = function() {    
  
  var wordH1 = ["A", "R", "S", "E", "N", "A", "L"];
  var wordH2 = ["M", "A", "N", "C", "H", "E", "S", "T", "E", "R"];
  var wordH3 = ["L", "I", "V", "E", "R", "P", "O", "O", "L"];
  var wordH4 = ["E", "V", "E", "R", "T", "O", "N"];
  var wordH5 = ["C", "H", "E", "E", "L", "S", "E"];
  var wordH6 = ["T", "O", "T", "T", "E", "N", "H", "A", "M"];
  var wordC = "";
  var wordM = wordH1; //PALABRA BUSCADA
  var wordCo = [];
  letterFault = 0
   
  //Define hidden word letter space to find/ wordCo = PALABRA MOSTRADA
  for (var i = 0; i < wordM.length; i++) {
      wordCo [i] = "_   "
  }

  var targetA = document.getElementById("wShow");
  var faultCntr = document.getElementById("faultCnt");

  var wordTraf = wordCo [0]
  for (var i = 1; i < wordM.length; i++) {
      //var newA = document.createElement("a");
      var wordTraf = wordTraf + " " + wordCo [i];
  }
  targetA.innerHTML = wordTraf;
      //targetA.appendChild(newA);
  //var newA = document.createElement("a");
  faultCntr.innerHTML = letterFault;
  //faultCntr.appendChild(newA);


    function checkKey(){
      var letterInput = event.key;
      for (var i = 0; i < wordM.length; i++) {
          if(wordM [i] != letterInput && i+1 == wordM.length){
            letterFault = letterFault + 1;
            //var newA = document.createElement("a");
            faultCntr.innerHTML = letterFault;
            //faultCntr.appendChild(newA); 
          } else if(wordM [i] == letterInput){
              wordCo [i] = letterInput;
          }

      }
        var wordTraf = wordCo [0]
        for (var i = 1; i < wordM.length; i++) {
            //var newA = document.createElement("a");
            var wordTraf = wordTraf + " " + wordCo [i];
        }
        targetA.innerHTML = wordTraf;
    }
    document.onkeyup = checkKey;  
}
    
	
