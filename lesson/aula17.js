
//Objetos e metodos:

		//Criar objeto pessoa:
		var pessoa = {nome: "Max", idade: 30, altura: 1.73, peso: 80};
		
			//Para acessar o valor da propriedade idade do objeto pessoa, digite o valor abaixo:
				pessoa.idade;
		
			//Para editar um propriedade já existente no objeto, precisa realizar o comando abaixo:
				pessoa.peso = 80;
		
			//Metodos são ações criadas nas propriedades do objeto, e uma forma de criar um metodo é incluir uma fũnção nas propriedades do objeto:
				pessoa.aniversario = function() {
					pessoa.idade++;
				}
		
				pessoa.aniversario();
		
				pessoa.nomeCompleto = function(){
					return pessoa.nome + " " + pessoa.sobrenome;
				}
		
				pessoa.nomeCompleto();
		
		