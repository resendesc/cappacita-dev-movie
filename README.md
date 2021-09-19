Iniciando o projeto:

```

$ npm install

$ npm start

$ npx lite-server

```

<h4 align="center"> 
	🚧 Movies - Cappacita Dev - projeto final módulo 5 🚀 em construção... 🚧
</h4>

<p align="center">
  <a href="https://twitter.com/Cesar_resende1">
    <img alt="Siga no Twitter" src="https://img.shields.io/twitter/url?url=https://github.com/resendesc/cappacita-dev-movie">
  </a>
</p>

## 💻 Sobre o projeto

♻️ nodejs - boostrap - axios -API

### 1. O que é API Rest e NodeJS

- [x] 1.1. Javascript para Frond-end, e agora para Backend com NodeJS.
- [x] 1.2. API Rest : separa o back-end, servidor e banco de dados, do frond-end.
- [x] 1.3. **NodeJS**, **MongoDB**, **Express**

### 2. Instalando NodeJS

- [x] 2.1. Instalar o NodeJS a partir do site oficial: LTS 12.18.3
- [x] 2.2. Instalar o NPM, um constrole de versão: v6.14.6
- [x] 2.3. `chocolatey`, `node -v`, `npm -v`

### 3. Criando a estrtura

- [x] 3.1. Objetivo: desenvolver a api
- [x] 3.2. `mkdir node-api`, `cd node-api`,
- [x] 3.3. `npm init -y`: package.json : guardar as informações das depências
- [x] 3.4. `npm install express`

### 4. Criando a primeira rota

- [x] 4.1. Utilizando o **express**
- [x] 4.2. criar o arquivo `server.js`
- [x] 4.3. executar `node server.js`
- [x] 4.4. `http://localhost:3001/`
- [x] 4.5. código teste para o servidor

```javascript
const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("Hello Word");
});

app.listen(3001);
```

### 5. Utilizando Nodemon

- [x] 5.1. `npm install -D nodemon`: instalar o Nodemon no ambiente de desenvolvimento
- [x] 5.2. ao invés de `node server.js`, usar o `npm run dev`
- [x] 5.3. reinicializar o servidor após alguma alteração
- [x] 5.4. abre : `http://localhost:3001/`
- [x] 5.5. package.json/dependencies:

```json
"dependencies": {
    "express": "^4.16.4",
    "mongoose": "^5.4.9",
    "mongose": "0.0.2-security"
  }
```

### 14. Adicionando CORS

- [x] 14.1. Permitir acessar essa API de outros endereços
- [x] 14.2. permitir acesso por outros domínios
- [x] 14.3. CORS : `npm install cors`

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [css][css]: layout, responsividadee muito mais
- [Javascript][javascript]
- [HTML][html]: página inicial
- [Git][git]
- [Github][github]
- [Node.js][nodejs]

## 🚀 Como executar o projeto

Podemos considerar este projeto como sendo com uma parte:

1. Back end
2. Front end

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js][nodejs].
Além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode]

### 🧭 Rodando a aplicação web (Back End e Front End)

```bash
# Clone este repositório
$ git clone https://github.com/resendesc/cappacita-dev-movie

# Acesse a pasta do projeto no seu terminal/cmd
$ cd cappacita-dev-movie

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# Acesse o serviço referente aos filmes de comédia na url - http://localhost:3008/comedia
# Acesse o serviço referente aos filmes originais movie na url - http://localhost:3008/originais-movie


#Execute o comando npmx lite-server em outro aba do terminal
$ npx lite-server

# Será aberto no seu navegador padrão uma aba com a url - http://localhost:3000

```

## 😯 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
   > Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions)

## 📝 Licença

Este projeto esta sobe a licença GNU Lesser General Public License v2.1.

Feito com ❤️ por Cesar Resende 👋🏽 [Entre em contato!](https://www.linkedin.com/in/cesar-resende/)

[git]: https://git-scm.com/doc
[github]: https://docs.github.com/en
[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[expo]: https://expo.io/
[reactjs]: https://reactjs.org
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/
[vscode]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[license]: https://opensource.org/licenses/MIT
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[rs]: https://rocketseat.com.br
[css]: https://developer.mozilla.org/en-US/docs/Web/CSS
[html]: https://developer.mozilla.org/en-US/docs/Web/HTML
[javascript]: https://developer.mozilla.org/en-US/docs/Web/JavaScript

Fonte - [Rocketseat - Starter](https://rocketseat.com.br/)
