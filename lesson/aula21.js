// Truthy and Falsy

		//Tudo que retorna de um resultado boolean como true é Truthy;
		//Tudo que retorna como false é Falsy;

		//Ex:
			1 === "b"; // retorna false de um boolean, portanto é Falsy;


		//Ex2:  Neste exemplo retornará true, pois o numero 1 é verdadeiro:
			var teste;

				if(1) {
					teste = true;
				} 
				else {
					teste = false;
				}

		//Ex3:  Neste exemplo retornará false, pois o numero 0 é false:
			var teste;

				if(0) {
					teste = true;
				} 
				else {
					teste = false;
				}		

						/*	FALSY:
				Valores falsy no javascript: 
					 * undefined	* 0
					 * null			* -0		   
					 * NaN			* " ou "
					 */


	//Para verificar sem precisar usar IF, usa-se o comando abaixo:
			!!1  //console retornará resutado igual o comando que usou IF.


