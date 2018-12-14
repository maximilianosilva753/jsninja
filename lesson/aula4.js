//Funções:  É um bloco de código JS nomeados e que podem ser invocados usando o operador ().
		
		//Para criar a função:
		function nome() {}

			//Para chamar a função no código:
			nome()

	//Exemplo de aplicação de uma function:
		
		//Declare a variavel X e atribua o valor 1
		var x = 1;
	
		//Criar a function:
		function soma(){
			x = x + 1;
		 				}
		
		//invoque a variavel para verificar que o valor permanece com 1
		x // X retorna com valor 1
	
		//invoque a function para que ela retorne para a variavel X o novo valor:
		soma() //No resultado apareceu o resultado unefined, pois a function não tem nenhum valor. MAs no background ela executou o calculo X = X + 1 e retornou um novo valor para X.

		x //ao invocar a variavel X após a execução da function, verá que ela recebeu um novo valor do calculo da function.

//Funções: Criam escopos: ou seja criam variaveis locais e globais:

		//Exemplo: 
				//var com escopo local:
				function escLocal(){
					var newVar = 'joakindle'
				}

				newVar //ao invocar o nome da variavel fora da function, irpa retornar erro pois ela é local.

				escLocal() //Ao invocar a função retorna undefined

				newVar //Mesmo após ter invocado a função antes e após invocar a variavel, irá retornar erro.

//---------------------------------------------------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------------------------------//


//Funções: retornam valores:

				//Para conseguir acessar a variavel acima, precisa realizar os passos abaixo:
				function esLocal2(){
					var newVar2 = "Max"
					return newVar2
				}

				//Invoque a função acima:
				esLocal2() //O retorno será o valor da variavel que foi instânciada na function. Ou seja, irá retornar "Max"

//Exemplo 2:

				//Crie uma variavel y:
				var y = 4;

				//crie uma function com return 5:
				function cinco() {
					return 5;
				}

				//invoque a function acima:
				cinco() //no console retornará o valor 5

				//invoque a variavel y:
				y //variavel y continua com valor 4, pois ela não foi instanciada dentro da function e permanece com o valor que recebeu no inicio.


//---------------------------------------------------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------------------------------//
 

//Funções: Pode receber argumentos (ou parâmetros):

			function somador(x, y){ //neste caso X e Y serão os argumentos (parâmetros)
				return x + y; //No return será enviado o resultado da soma de x + y
				}

				somador(1,2) //ao invocar a function com os valores 1,2, na execução da function X = 1 e Y = 2. Então o retorno da função será o valor 3; 

				






