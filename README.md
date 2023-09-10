# Radio on Internet

Projeto para estudo e aplicação do framework Angular para desenvolvimento front-end. O projeto está a ser desenvolvido de forma incremental (por semana) visando cumprir os requisitos (ver checklist abaixo) da disciplina CETEJ5 - Frameworks Web - JAVA_XXV (2022_02) ministrada pelo Professor @ronifabio. 

O objetivo simples. Gerenciar e tocar suas rádios favoritas que são transmitidas pela internet, como por exemplo: http://radioaovivo.ufrgs.br:8000/stream.mp3 (Rádio ao vivo da Universidade Federal do Rio Grande do Sul)

## Endereço de Deploy

* to-do

## UI/UX

O objetivo é chegar o mais próximo do seguinte layout -> [figma-link](https://www.figma.com/file/4ZPJVtT85xfkoPUm8ySvE1/UTFPR---Frameworks---Radio---Marcelo-Mar%C3%A7al?type=design&node-id=0-1&mode=design)


## Checklist

- [x] Criar o repositório no GitHub com a estrutura do Gitflow, ou seja, branches main e develop.
- [x] Usar componentes de algum framework CSS (Bootstrap, Materialize ou outro)
- [x] Apresentar as telas com layout responsivo usando ou não algum framework CSS.
- [x] Construir páginas web com o conceito de componentes.
- [x] Criar o layout da aplicação com componentes, ou seja, o cabeçalho e rodapé precisam ser componentes.
- [x] Usar pelo menos dois tipos de data-binding (Interpolation, Property Binding, Event Binding e Two Way Data Binding).
- [x] Passar dados via hierarquia de componentes, ou seja, usando @Input ou @Output.
- [x] Mapear componentes à rotas no módulo de rotas.
- [x] Criar navegação entre páginas por meio de rotas.
- [x] Passar dados entre componentes que representam diferentes telas via parâmetros de rotas.
- [x] Validar campos do formulário com REGEX e apresentar os erros.
- [x] Desabilitar o botão de submit enquanto o formulário está inválido.
- [x] Fazer requisições a API com tratamento da resposta com Promises ou Observables.
- [x] Cadastrar uma entidade no JSON Server.
- [-] Apresentar uma lista de dados com a diretiva estrutural ngFor.
- [-] Usar a diretiva ngIf
- [-] Formatar a apresentação de dados com Pipes.
- [-] Build e deploy da aplicação.

## Manual de execução
- Clonar o repositório com `git clone`
- Fazer checkout no branch `develop` que contém as modificações mais recentes
- Abrir o projeto no editor Visual Studio Code (VS Code)
- Instalar as dependências contidas no `package.json`
  - Comando: `npm i`
- Iniciar JSON Server via um dos seguintes comandos (porta padrão: 3000): 
  - Comando: `npm run start-json-server` 
  - Ou via Execução explícita: `json-server --watch db.json`  
- Iniciar a aplicação Angular (porta padrão: 4200):
  - Comando: `ng s -o`