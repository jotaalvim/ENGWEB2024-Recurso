# Recurso
Criei um script para alterar o meu dataset.

passei alguns campos para numéricos, corrigi as listas dentro de string,
não consegui corrigir tudo porque há grande variadade de erros, por exemplo troquei os "1 page" por "1", na tentativa de corrigir um desses problemas



Depois de correr o script, troquei o identificador dos dicionários com um find replace no vim 
bookId    >>>  _id  

Converti o campo author para ums lista com várias strings. Por alguma razão não
estou a partir por um delimitardor de forma correta. Estou a partir pelo ','
mas mesmo assim alguns não parte.

----------

* iniciei o docker
* passei para o docker o dataset, docker cp 
* entrei na shell do docker
* carreguei para o mongo


# Queries
As queries estão no ficheiro ex1/queries.txt

# Ex1
Para criar tanto o Ex1 como o Ex2 usei o npx express-generator para me gerar um
template e o procedimento de inicialização também é o mesmo
Para iniciar só é presico correr
```
npm i
```
para correr
```
npm start
```

Para além das rotas pedidas, adicionei uma nova rota auxiliar para o ex2

GET /authors/:id
    devolve os livros escritos por um autor

Ex2

Fiz uma interface para todas as rotas pedidas.
