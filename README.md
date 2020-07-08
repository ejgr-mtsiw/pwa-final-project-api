# pwa-final-project-api
Projeto Final de Programação Web Avançada

O frontend em [Angular](https://angular.io/) está disponível aqui:
https://github.com/ejgr-mtsiw/pwa-final-project-frontend

Esta plataforma permite gerir um conjunto de kits de recolha de dados, que serão
utilizados para analisar as condições atmosféricas (temperatura e humidade
relativa do ar) e do solo (humidade do solo) dos jardins do Agrupamento de
Escolas de Moimenta da Beira.

Esta informação será utilizada para otimizar os horários e os consumos de água
da manutenção dos espaços verdes.

Os kits estão a ser construídos pelos alunos do 3º ano do Curso Profissional de
Técnico de Eletrónica, Automação e Computadores.

Em complemento a esta plataforma foram desenvolvidas aplicações móveis, na
plataforma App Inventor, pelos alunos do 2º ano do Curso, possibilitando o
acompanhamento do estado dos jardins.

O trabalho aqui apresentado serve de plataforma para recolha, tratamento e
administração dos dados fornecidos pelos kits e a sua disponibilização às
aplicações móveis.

Este projeto é constituído por um web service desenvolvido em
[Node.js](https://nodejs.org/) recorrendo à framework
 [Express](https://expressjs.com/), que possibilita a interação entre os kits,
 as aplicações móveis e o frontend.

## Tecnologias utilizadas
1. [Node.js](https://nodejs.org/)
1. [Express](https://expressjs.com/)
1. [Pug](https://pugjs.org/)
1. [Passport](http://www.passportjs.org/)
1. [Sequelize](https://sequelize.org/)
1. [MariaDB](https://mariadb.org/)
1. [FreeBSD](https://www.freebsd.org/)
1. [nginx](https://nginx.org/)

## Instalação
1. Clonar o repositório
1. Instalar as dependências: `npm install`
1. Configurar o servidor no ficheiro `bin/www`
1. Copiar/Renomear o ficheiro `config.json.default` para `config.json`
1. Configurar dados de acesso à base de dados no ficheiro `config/config.json`
1. Correr as migrações para criar as tabelas `npx sequelize-cli db:migrate`
1. Correr o servidor: `npm start`
