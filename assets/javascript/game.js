window.onload = function() {    
  
       
        var wordH= []
        wordH [1] = ["A", "R", "S", "E", "N", "A", "L"];
        wordH [2] = ["M", "A", "N", "C", "H", "E", "S", "T", "E", "R"];
        wordH [3] = ["L", "I", "V", "E", "R", "P", "O", "O", "L"];
        wordH [4] = ["E", "V", "E", "R", "T", "O", "N"];
        wordH [5] = ["C", "H", "E", "E", "L", "S", "E"];
        wordH [6] = ["T", "O", "T", "T", "E", "N", "H", "A", "M"];
        wordH [7] = ["A", "M", "P", "A", "R", "I", "T", "O"];
        wordH [8] = ["N", "I", "K", "A", "N", "O", "R"];
        wordH [9] = ["A", "N", "D", "A"];
        wordH [10] = ["T", "O", "D", "O", "E", "L", "C", "H", "O", "R", "O"];
        wordH [11] = ["E", "M", "P", "A", "N", "A", "D", "A", "S"];    
        
        var wordC = "";
        var wordNext = 1

        var wordM = wordH [wordNext]; //PALABRA BUSCADA
        var wordCo = [];
        var letterFault = 10
        var wins = 0
         
        //Define hidden word letter space to find/ wordCo = PALABRA MOSTRADA


        var targetA = document.getElementById("wShow");
        var faultCntr = document.getElementById("faultCnt");
        var letterShow = document.getElementById("letterAlGues");
        var winsHt = document.getElementById("wins");   

           
            for (var i = 0; i < wordM.length; i++) {
                wordCo [i] = "_   "
            }

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

            var letterF = []
            //var wordNumber = 0
        
        function initial(){ }   

    
    initial();
    
    function checkKey(){

      var wordComp = 0
      var wordSuc = 0
      var letterInput = event.key;
      var flag1 = 0
      var k = 0
     
      letterF [k]= "hola";

      for (var i = 0; i < wordM.length; i++) {
          if(wordM [i] == letterInput){
              wordCo [i] = letterInput;
              wordSuc = wordSuc + 1
          } 

          if (wordM [i] != letterInput && wordSuc == 0 && i + 1 == wordM.length && flag1 == 0 ){
             
            for (var k = 0; k < letterF.length; k++) {
              if (letterF [k] == letterInput){
                  flag1 = flag1 + 1
            }
          } 
         
          if (wordM [i] != letterInput && wordSuc == 0 && i + 1 == wordM.length && flag1 == 0 && flag1 == 0 ){
              letterFault = letterFault - 1;
              //var newA = document.createElement("a");
              letterFault = letterFault
              faultCntr.innerHTML = letterFault;
              //faultCntr.appendChild(newA);

              var newA = document.createElement("a");
              newA.innerHTML = letterInput + " ";
              letterShow.appendChild(newA);
              k = k + 1
              letterF [k]= letterInput
            }
          } 
      }

      for (var q = 0; q < wordCo.length; q++) {
        if (wordCo [q] == "_   "){
            wordComp = wordComp + 1
        }
      }
      if ( wordComp == 0 || letterFault == 0){
        letterFault = 0
        letterFault = 10 - letterFault
        faultCntr.innerHTML = letterFault;
        wins = wins + 1
        winsHt.innerHTML = wins;
        wordNext = wordNext + 1
        wordM = wordH [wordNext]
        for (var i = 0; i < wordM.length; i++) {
          wordCo [i] = "_   "
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
    
	
