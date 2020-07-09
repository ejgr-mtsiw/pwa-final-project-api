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

## Servidor de testes
A aplicação disponibiliza os seguintes endpoints públicos:

* [GET] https://mtsiw.duckdns.org/pwa/api/kits/ : Lista com os dados dos kits
* [GET] https://mtsiw.duckdns.org/pwa/api/kits/{ID_DO_KIT} : dados do kit com
o id `{ID_DO_KIT}`
* [GET] https://mtsiw.duckdns.org/pwa/api/kits/{ID_DO_KIT}/photo : fotografia
do kit
* [GET] https://mtsiw.duckdns.org/pwa/api/kits/{ID_DO_KIT}/readings : leituras
registadas pelo kit indicado
* [GET] https://mtsiw.duckdns.org/pwa/api/kits/{ID_DO_KIT}/readings/chart : 
gráfico das leituras registadas
* [POST] https://mtsiw.duckdns.org/pwa/api/auth/signin : permite autenticar no
sistema
* [GET] https://mtsiw.duckdns.org/pwa/api/auth/signout : termina a sessão no
sistema

Os seguintes endpoints necessitam de autenticação prévia:
* [POST] https://mtsiw.duckdns.org/pwa/api/kits/create : Criar um novo kit
* [PUT] https://mtsiw.duckdns.org/pwa/api/kits/{ID_DO_KIT}/update : Atualiza os
dados do kit indicado
* [DELETE] https://mtsiw.duckdns.org/pwa/api/kits/{ID_DO_KIT}/delete : Elimina
o kit indicado
* [POST] https://mtsiw.duckdns.org/pwa/api/kits/{ID_DO_KIT}/readings/create :
Regista uma nova leitura para o kit indicado, é utilizado pelos kits no terreno
para comunicarem os dados recolhidos.
* [GET] https://mtsiw.duckdns.org/pwa/api/kits/{ID_DO_KIT}/events : Lista de
ocorrências para este kit
* [POST] https://mtsiw.duckdns.org/pwa/api/kits/{ID_DO_KIT}/events/create : Cria
um novo registo de ocorrência para o kit indicado
* [GET] https://mtsiw.duckdns.org/pwa/api/users : Lista com os dados dos
utilizadores do sistema
* [POST] https://mtsiw.duckdns.org/pwa/api/users/create : Cria um novo
utilizador
* [PUT] https://mtsiw.duckdns.org/pwa/api/users/{ID_DO_UTILIZADOR}/update :
Atualiza os dados de um utilizador
* [DELETE] https://mtsiw.duckdns.org/pwa/api/users/{ID_DO_UTILIZADOR}/delete : 
remove o utilizador da base de dados
* [PUT] https://mtsiw.duckdns.org/pwa/api/profile/update : permite ao
utilizador alterar os seus dados pessoais. Neste caso apenas a sua password
os restantes dados são geridos apenas pelo(s) administrador(es) do sistema
