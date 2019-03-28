# gonode-desafio3
Nesse terceiro desafio proposto no bootcamp pela Rocketseat, foi melhorada a aplicação desenvolvida durante o terceiro módulo.

**O modulo é uma introdução a API REST, utilizando**

- Node.js
- Docker

**Banco de Dados**

- MongoDB
- Redis


# Desafio 3

Nesse terceiro desafio você irá melhorar a aplicação desenvolvida durante o terceiro módulo
com as seguintes funcionalidades:

- Armazene as intenções de compra (Purchase) no MongoDB criando um Model e salvando
os dados da purchase no método store do PurchaseController;

- Crie uma nova rota para o vendedor aceitar uma intenção de compra declarando o item
como vendido e a partir desse momento o anúncio não deve ser mais exibido nas
listagens e não deve ser mais possível realizar uma intenção de compra para esse anúncio;

- O Ad deve possuir um campo adicional chamado purchasedBy que armazena o ID da
Purchase que o vendedor aceitou, caso esse campo esteja presente, quer dizer que o
anúncio foi vendido;

**Além das melhorias propostas pelo desafio, eu acrescentei o envio de e-mail para o
comprador quando o vendedor confirma a inteção da compra, usando o redis para configurar
fila.**

