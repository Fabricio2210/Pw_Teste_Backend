<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> • 
</p>


##  Sobre o projeto

Api para Cadastro de Usuários seguindo todos os métodos HTTP

---

##  Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instaladas em sua máquina as seguintes ferramentas:

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/try/download/community)


###  Rodando a aplicação

```bash

# Instale as dependências
$ npm i

# Acesse a pasta do projeto no terminal/cmd
$ cd testepw

# Crie um arquivo .env com as seguintes variáveis
- DB_KEY (Chave do banco de dados)
# Execute a aplicação
$ npm start
```

As requisições seguem o modelo sugerido na descrição do teste pelo projeto.
 - Listagem de todos os usuários GET: **/usuarios?qtd=5&pagina=1/**, parâmetros: qtd(Quantidade de resultados por página), página(Número da página), nome(Pesquisa por nome, opcional)
 - Listagem de um único usuário GET: **/usuario/@id/**
 - Criação de usuário POST:  **/usuario/**
 - Atualizar usuário PUT: **/atualizar/@id/**
 - Deletar Usuário DELETE: **/deletar/@id/**
---