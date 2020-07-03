# pwa-final-project-api
Projeto Final de Programação Web Avançada

Este projeto permite gerir um conjunto de kits de recolha de dados, que serão
utilizados para analisar as condições atmosféricas (temperatura e humidade
relativa do ar) e do solo (humidade do solo) dos jardins do Agrupamento de 
Escolas de Moimenta da Beira. Esta informação será utilizada para otimizar os
horários e os consumos de água da manutenção dos espaços verdes.

Este kits iriam ser construídos pelos alunos do 3º ano do Curso Profissional de
Técnico de Eletrónica, Automação e Compuitadores, mas devido à interrupção das
atividades letivas pela pandemia do COVID-19, não foi possível concluir o seu
desenvolvimento, pelo que apenas está disponível um conjunto limitado de dados.
Nenhum dos kits em funcionamento faz a recolha da humidade do solo,
mas é possível recolher os valores da temperatura e humidade relativa do ar.

Em complemento a este projeto foram desenvolvidas aplicações móveis, na
plataforma App Inventor, pelos alunos do 2º ano do Curso, possibilitando o
acompanhamento do estado dos jardins.

O projeto aqui apresentado serve de plataforma para recolha, tratamento e 
administração dos dados fornecidos pelos kits e a sua disponibilização às
aplicações móveis.

Este projeto é constituído por um web service desenvolvido em
[Node.js](https://nodejs.org/) recorrendo à framework
 [Express](https://expressjs.com/), que possibilita a permite a interação com
 os kits e as aplicações móveis.

## Tecnologias utilizadas
1. [Node.js](https://nodejs.org/)
1. [Express](https://expressjs.com/)
1. [Pug](https://pugjs.org/)
1. [Passport](http://www.passportjs.org/)
1. [Sequelize](https://sequelize.org/)

## Instalação

1. Clonar o repositório
1. Instalar as dependências: `npm install`
1. Configurar o servidor no ficheiro `bin/www`
1. Copiar/Renomear o ficheiro `config.json.default` para `config.json`
1. Configurar dados de acesso à base de dados no ficheiro `config/config.json`
1. Correr as migrações para criar as tabelas `npx sequelize-cli db:migrate`
1. Correr o servidor: `npm start`
