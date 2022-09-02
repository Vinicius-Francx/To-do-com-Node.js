<h1>Gerenciador de Tarefas com Node.js</h1>

<p align="center">Funcionalidades</p>

<p align="center">
    <a href="#sobre">Sobre</a> -
    <a href="#criar-tarefas">Criar Tarefas</a> -
    <a href="#tarefas">Tarefas</a> -
    <a href="#buscar-tarefas">Buscar Tarefas</a> -
    <a href="#vizualizar-tarefa">Vizualizar Tarefa</a> -
    <a href="#editar-tarefa">Editar Tarefa</a> -
    <a href="#excluir-tarefa">Excluir Tarefa</a> -
    <a href="#tecnologias">Tecnologias</a>
</p>

# Sobre

<p>Trata-se de um aplicativo utilizado para o Gerenciamento de Tarefas do usúario, desenvolvido com Node.js utilizando os conceitos da Arquitetura MVC, Sequelize, Handlebars e do MySQL para o gerenciamento do banco de Dados. </p>

<p> Utilizando o conceito de CRUD (Create, Read, Update e Delete), que representa as quatro principais operações realizadas nesse projeto, o aplicativo permite que o usuário crie uma tarefa a qual tambem possui uma descrição, vizualize essa tarefa numa página onde se encontram todas as tarefas do usuário, também é possivél vizualizar de maneira individual, além de poder editar e também excluí-las.

# Criar Tarefas

É na home onde se encontra a página de criação de tarefas, aqui o usuário pode inserir um titulo para a sua tarefe e também adicionar uma descrição se assim desejar: 

![Home Page](https://user-images.githubusercontent.com/71554598/188067836-61d682c9-5048-4dd5-ba26-7affd6bd7f93.png)

Para essa aplicação resolvi adotar uma medida que restringe a criação de tarefas sem título, ou seja caso o usuário tente criar uma tarefa sem título a seguinte mensagem de erro é exibida e ele sera redirecionado para a página de criação de tarefas.

![Home page (erro1)](https://user-images.githubusercontent.com/71554598/188067830-d7a47840-1d95-49b5-9796-8037741fba62.png)

Ao tentar criar uma tarefa sem titulo a seguinte mensagem será exibida:

![Home Page (erro2)](https://user-images.githubusercontent.com/71554598/188067832-6892c594-f7ce-4557-866f-1747ff772ecf.png)

# Tarefas

É aqui onde ficam todas as tarefas criadas pelo usuário, atráves dessa página é possivel vizualizar uma tarefa de forma individual, editar ou até mesmo exclui-lá. Existe tambem um mecanismo de busca que alem de filtrar os resultados conforma a pesquisa também mostra quantos resultados foram encontrados, além de contar com um mecanismo que redireciona o usuário para a pagina inicial de tarefas caso queira redefinir a busca. 

![Tarefas](https://user-images.githubusercontent.com/71554598/188067903-9ae653bd-0137-4ca5-9464-af9fd4e76dc3.png)

# Buscar Tarefas

Esse mecanismo permite que o usuário realize buscas que alem de filtrar os resultados conforme a pesquisa também mostra quantos resultados foram encontrados, além de contar com um mecanismo para limpar a busca. Basicamente ele redireciona o usuário para a pagina inicial de tarefas onde se encontram todas as tarefas, redefinindo assim a sua busca.

![busca 1](https://user-images.githubusercontent.com/71554598/188067897-80ed3ba0-1ce5-4b7c-b957-b8075da98fdb.png)

Ao realizar a busca, o resultado sera o seguinte:

![busca2](https://user-images.githubusercontent.com/71554598/188067901-97aeff64-abaf-4671-a6d3-a3f73ed78d54.png)

# Vizualizar Tarefa

Na página onde ficam todas as tarefas há um botão com simbolo de "olho", ao clicar nele o usuario será redirecionado a uma página de para vizualização a tarefa desejada. Nesta página é possivél visualizar uma tarefa de forma individual, aqui damos ênfase ao titulo e a descrição desta tarefa.

![vizualiza1](https://user-images.githubusercontent.com/71554598/188067923-419db5b2-c171-47b3-b87a-b59dd13e4180.png)

Ao clicarmos no "olho" o usuário será redirecionado para:

![vizualiza2](https://user-images.githubusercontent.com/71554598/188067925-c64e822e-f1a5-4616-a43b-65fd4f095ee7.png)

# Editar Tarefa

Na página onde ficam todas as tarefas há um botão com simbolo de "caneta" ao clicar nele o usuario será redirecionado a uma página onde será possível realizar a edição do título e/ou da descrição da tarefa, note que aqui assim como na criação foi implementado uma medida para restringir a criação de uma tarefa sem título, ou seja, se o usuário tentar modificar o título para deixa-lo em branco será exibido uma mensagem de erro, assim como na página de criação..

Página de edição:

![edita1](https://user-images.githubusercontent.com/71554598/188068004-9ebb00d0-a669-4e5b-8ca2-fc3290d875ce.png)

![edita2](https://user-images.githubusercontent.com/71554598/188068007-7c93e3cc-9b9f-4235-afb7-fb5583e81c54.png)

![edita3](https://user-images.githubusercontent.com/71554598/188068009-a0f98441-6639-4743-a869-aca5505a2482.png)

![edita4](https://user-images.githubusercontent.com/71554598/188068010-fcf9a46f-566f-4bcb-a9fa-a11995d0deb8.png)

Exibição da mensagem de erro:

![erro_edita1](https://user-images.githubusercontent.com/71554598/188068011-129d3224-e8c6-4ffc-a97f-a2c4139d19ee.png)

![erro_edita2](https://user-images.githubusercontent.com/71554598/188068012-5bc5fdac-9dc9-4449-a3d4-ce8038d3e6ea.png)

# Excluir Tarefa

Na página onde ficam todas as tarefas há um botão com simbolo de "lixeira" ao clicar nele o usuario irá exluir a tarefa.

![exluir 1](https://user-images.githubusercontent.com/71554598/188068015-187a65e0-90be-4458-8aeb-195e8386b172.png)

![exclui2](https://user-images.githubusercontent.com/71554598/188068013-ff29ed6e-1d13-4859-8c4f-cb37373c8119.png)

# Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [MySQL](https://www.mysql.com)
