    

	
	    document.write("HOLA");

	    var wordH1 = ["A", "R", "S", "E", "N", "A", "L"];
		var wordH2 = ["M", "A", "N", "C", "H", "E", "S", "T", "E", "R"];
		var wordH3 = ["L", "I", "V", "E", "R", "P", "O", "O", "L"];
		var wordH4 = ["E", "V", "E", "R", "T", "O", "N"];
		var wordH5 = ["C", "H", "E", "E", "L", "S", "E"];
		var wordH6 = ["T", "O", "T", "T", "E", "N", "H", "A", "M"];
		var wordC = "";
		var wordM = wordH1; //PALABRA BUSCADA
		var wordCo = [];
	 
		//Define hidden word letter space to find/ wordCo = PALABRA MOSTRADA
		for (var i = 0; i < wordM.length; i++) {
			wordCo [i] = "_   "
		}


		// Post the hidden word on window, coloca PALABRA MOSTRADA en el display
			
			for (var i = 0; i < wordM.length; i++) {
				document.write (wordCo [i])
			}

		

		function checkKey(){
			var letterInput = event.key;
			for (var i = 0; i < wordM.length; i++) {
				if(wordM [i] == letterInput){
					wordCo [i] = letterInput;
					for (var i = 0; i < wordM.length; i++) {
						document.write (wordCo [i])
					}


				}

			}

		}
		document.onkeyup = checkKey;

	

		