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

![](../../../Pictures/Screenshots/Home%20Page.png)

Para essa aplicação resolvi adotar uma medida que restringe a criação de tarefas sem título, ou seja caso o usuário tente criar uma tarefa sem título a seguinte mensagem de erro é exibida e ele sera redirecionado para a página de criação de tarefas.

![](../../../Pictures/Screenshots/Home%20page%20(erro1).png)

Ao tentar criar uma tarefa sem titulo a seguinte mensagem será exibida:

![](../../../Pictures/Screenshots/Home%20Page%20(erro2).png)

# Tarefas

É aqui onde ficam todas as tarefas criadas pelo usuário, atráves dessa página é possivel vizualizar uma tarefa de forma individual, editar ou até mesmo exclui-lá. Existe tambem um mecanismo de busca que alem de filtrar os resultados conforma a pesquisa também mostra quantos resultados foram encontrados, além de contar com um mecanismo que redireciona o usuário para a pagina inicial de tarefas caso queira redefinir a busca. 

![](../../../Pictures/Screenshots/Tarefas.png)

# Buscar Tarefas

Esse mecanismo permite que o usuário realize buscas que alem de filtrar os resultados conforme a pesquisa também mostra quantos resultados foram encontrados, além de contar com um mecanismo para limpar a busca. Basicamente ele redireciona o usuário para a pagina inicial de tarefas onde se encontram todas as tarefas, redefinindo assim a sua busca.

![](../../../Pictures/Screenshots/busca%201.png)

Ao realizar a busca, o resultado sera o seguinte:

![](../../../Pictures/Screenshots/busca2.png)

# Vizualizar Tarefa

Na página onde ficam todas as tarefas há um botão com simbolo de "olho", ao clicar nele o usuario será redirecionado a uma página de para vizualização a tarefa desejada. Nesta página é possivél visualizar uma tarefa de forma individual, aqui damos ênfase ao titulo e a descrição desta tarefa.

![](../../../Pictures/Screenshots/vizualiza1.png)

Ao clicarmos no "olho" o usuário será redirecionado para:

![](../../../Pictures/Screenshots/vizualiza2.png)

# Editar Tarefa

Na página onde ficam todas as tarefas há um botão com simbolo de "caneta" ao clicar nele o usuario será redirecionado a uma página onde será possível realizar a edição do título e/ou da descrição da tarefa, note que aqui assim como na criação foi implementado uma medida para restringir a criação de uma tarefa sem título, ou seja, se o usuário tentar modificar o título para deixa-lo em branco será exibido uma mensagem de erro, assim como na página de criação..

Página de edição:

![](../../../Pictures/Screenshots/edita1.png)

![](../../../Pictures/Screenshots/edita2.png)

![](../../../Pictures/Screenshots/edita3.png)

![](../../../Pictures/Screenshots/edita4.png)

Exibição da mensagem de erro:

![](../../../Pictures/Screenshots/erro_edita1.png)

![](../../../Pictures/Screenshots/erro_edita2.png)

# Excluir Tarefa

Na página onde ficam todas as tarefas há um botão com simbolo de "lixeira" ao clicar nele o usuario irá exluir a tarefa.

![](../../../Pictures/Screenshots/exluir%201.png)

![](../../../Pictures/Screenshots/exclui2.png)

# Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [MySQL](https://www.mysql.com)