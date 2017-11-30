window.onload = function() {    
  
             
        var wordH= []
        wordH [1] = ["H", "Y", "D", "R", "U", "S"];
        wordH [2] = ["V", "I", "R", "G", "O"];
        wordH [3] = ["C", "A", "P", "R", "I", "C", "O", "R", "N", "U", "S"];
        wordH [4] = ["P", "E", "G", "A", "S", "U", "S"];
        wordH [5] = ["A", "Q", "U", "A", "R", "I", "U", "S"];
        wordH [6] = ["A", "D", "R", "O", "M", "E", "D", "A"];
        wordH [7] = ["C", "E", "N", "T", "A", "U", "R", "U", "S"];
        wordH [8] = ["H", "O", "R", "O", "L", "O", "G", "I", "U", "M"];
        wordH [9] = ["H", "Y", "D", "R", "A"];
        wordH [10] = ["S", "A", "G", "I", "T", "T", "A", "R", "I", "U", "S"];
        wordH [11] = ["T", "A", "U", "R", "U", "S"];

        var constel = []
        constel [1] = "assets/images/Constellation_Hydrus.png"
        constel [2] = "assets/images/VirgoCC.JPGs"    
        constel [3] = "assets/images/384px-CapricornusCC.JPGs"
        constel [4] = "assets/images/450px-PegasusCC.JPGs"
        constel [5] = "assets/images/AquariusCC.JPGs"
        constel [6] = "assets/images/AndromedaCC.JPGs"
        constel [7] = "assets/images/Constellation_Centaurus.JPGs"
        constel [8] = "assets/images/Constellation_Horologium.JPGs"        
        constel [9] = "assets/images/HydraCC.JPGs"
        constel [10] = "assets/images/SagittariusCC.JPGs"
        constel [11] = "assets/images/TaurusCC.JPGs"
        constel [12] = "assets/images/TaurusCC.JPGs"        

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

      var lettertrasp = event.key.toUpperCase();

      var wordComp = 0
      var wordSuc = 0
      var letterInput = lettertrasp;
      var flag1 = 0
      var k = 0
     
      letterF [k]= "hola";

      if(wordNext == 11){
        wordNext = 0
      }

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
        if( wordComp == 0) {
          wins = wins + 1
          winsHt.innerHTML = wins;
        }        
        for( var f=1; f< wordCo.length; f++){ 
          delete wordCo [f];
        }

        wordNext = wordNext + 1
        wordM = wordH [wordNext]
        for (var i = 0; i < wordM.length; i++) {
          wordCo [i] = "_   "
        }
        letterF = []
        letterF [0]= "hola";
        letterShow.innerHTML = "";

        
        if(wordNext == 1) {
          var foto = 11;
        }
        if(wordNext != 1){
          var foto = wordNext-1;
        }
        

        document.getElementById("foto1").src = constel [foto];


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
    
	
