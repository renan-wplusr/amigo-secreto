Projeto: Amigo Secreto 🎉

Este é um projeto simples e interativo desenvolvido em JavaScript, HTML e CSS, que permite criar uma lista de amigos, sortear um amigo secreto e exibir o resultado na tela.

Funcionalidades 🚀

Adicionar Amigos:

{
Os nomes dos amigos são adicionados por meio de um campo de entrada.
Cada nome inserido é validado para evitar entradas vazias.
A lista de amigos é exibida na tela, com os nomes empilhados um abaixo do outro.
} 

Sortear Amigo Secreto:
{
O botão de sorteio seleciona aleatoriamente um amigo da lista.
O resultado do sorteio é exibido na tela.
Após o sorteio, a lista é esvaziada para permitir um novo início. 
} 

Validações:

}
Evita a adição de entradas vazias.
Impede o sorteio caso a lista esteja vazia. 
{ 

Tecnologias Utilizadas 🛠️
{
HTML: Estrutura do projeto.
CSS: Estilização básica para o layout e visual.
JavaScript: Lógica do projeto, gerenciamento da lista, validações e exibição de resultados. 
} 

Como Usar 📖

{
Digite o nome de um amigo no campo de entrada e clique no botão "Adicionar".
Continue adicionando quantos amigos desejar.
Clique no botão "Sortear Amigo" para escolher um amigo aleatoriamente.
O nome do amigo sorteado será exibido na tela.
Após o sorteio, a lista será limpa automaticamente, permitindo um novo início.
}

Estrutura do Código 📂

adicionarAmigo(): 

{
Adiciona o nome digitado à lista de amigos.
Exibe os nomes adicionados em formato empilhado.
Valida para evitar entradas vazias. 
}

sortearAmigo():

{
Realiza o sorteio de um nome aleatório da lista.
Exibe o nome sorteado na tela.
Garante que o sorteio não aconteça com a lista vazia.
} 

limparNomes():

{
Limpa o campo de entrada após adicionar um nome.
}

Melhorias Futuras 🌟 
{
Adicionar a funcionalidade de remover amigos específicos da lista.
Implementar uma estilização mais elaborada para o design da aplicação.
Permitir configurar limites de participantes.
Armazenar a lista de amigos no localStorage para persistência.
}