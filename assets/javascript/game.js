window.onload = function() {    
  
  var wordH1 = ["A", "R", "S", "E", "N", "A", "L"];
  var wordH2 = ["M", "A", "N", "C", "H", "E", "S", "T", "E", "R"];
  var wordH3 = ["L", "I", "V", "E", "R", "P", "O", "O", "L"];
  var wordH4 = ["E", "V", "E", "R", "T", "O", "N"];
  var wordH5 = ["C", "H", "E", "E", "L", "S", "E"];
  var wordH6 = ["T", "O", "T", "T", "E", "N", "H", "A", "M"];
  var wordH7 = ["A", "M", "P", "A", "R", "I", "T", "O"];
  var wordH8 = ["N", "I", "K", "A", "N", "O", "R"];
  var wordH9 = ["A", "N", "D", "A"];
  var wordH10 = ["T", "O", "D", "O", "E", "L", "C", "H", "O", "R", "O"];
  var wordH11 = ["E", "M", "P", "A", "N", "A", "D", "A", "S"];    
  var wordC = "";
  var wordM = wordH11; //PALABRA BUSCADA
  var wordCo = [];
  letterFault = 0
   
  //Define hidden word letter space to find/ wordCo = PALABRA MOSTRADA
  for (var i = 0; i < wordM.length; i++) {
      wordCo [i] = "_   "
  }

  var targetA = document.getElementById("wShow");
  var faultCntr = document.getElementById("faultCnt");
  var letterShow = document.getElementById("letterAlGues");  

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
      var wordSuc = 0
      var letterInput = event.key;
      for (var i = 0; i < wordM.length; i++) {
          if(wordM [i] == letterInput){
              wordCo [i] = letterInput;
              wordSuc = wordSuc + 1
          } 

          if (wordM [i] != letterInput && wordSuc == 0 && i + 1 == wordM.length){
            letterFault = letterFault + 1;
            //var newA = document.createElement("a");
            faultCntr.innerHTML = letterFault;
            //faultCntr.appendChild(newA);

            var newA = document.createElement("a");
            newA.innerHTML = letterInput + " ";
            letterShow.appendChild(newA);



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
    
	
