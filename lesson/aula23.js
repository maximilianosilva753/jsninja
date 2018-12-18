/*				Escopo de variavel:

			---Local: São variaveis declaradas dentro de uma função. Criadas dentro da FUNCTION Essa variaveis não podem ser chamadas fora da função;

			---Global: Variaveis declaradas fora de uma função, que pode ser chamada em qualquer parte do código. Porém no JAVASCRIPT tem uma falha no desenho para variaveis de escopo global.
			
					---Devido existir no JAVASCRIPT o GARBAGE COLLECTION, é recomendado usar as variaveis locais.
			
						As variaveis criadas dentro das funções SEMPRE devem ter o prefixo "var" quando forem declaradas. Se não o Javascript entenderá como variavel GLOBAL. Assim não conseguirá exclui quando rodar o GARBER COLLECTION e as variaveis da função vão ocupar muita memória.


		LEMBRAR também que os parâmetros de uma função não podem ser chamados fora da função, pois são locais. No exemplo abaixo, o valor a,b e c, são os parametros da função:

						function novaFuncao(a,b,c){
							return a;
						}


			*/

