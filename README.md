<h1 align="center">Contact-Chain</h1>

<br />

<p>
    Links úteis:
</p>

<ul>
    <li>
        <a href="#deps">Instalação de dependências</a>
    </li>
    <li>
        <a href="#env">Variáveis de ambiente</a>
    </li>
    <li>
        <a href="#migrations">Migrações</a>
    </li>
    <li>
        <a href="#host">Rodando localmente</a>
    </li>
    <li>
        <a href="#doc">Documentação da API</a>
    </li>
</ul>

<p>Bem vindo ao <strong>Contact-Chain</strong>! Para dar rodar localmente a aplicação, é necessário ter instalado:</p>

<ul>
    <li>Node.js v16.x (de preferência na sua versão mais recente)</li>
    <li>Banco de dados PostgreSQL</li>
</ul>

<p>Links para download:</p>

<ul>
    <li>
        <a href="https://nodejs.org/pt-br" target="_blank">Node.js</a>
    </li>
    <li>
        <a href="https://www.postgresql.org/download/" target="_blank">PostgreSQL</a>
    </li>
</ul>

<br />

<h2 align="center" id="deps">Instalando dependências da aplicação:</h2>

<p>
    Tendo instalados o Node.js e o PostgreSQL em sua máquina, abra a pasta do projeto em seu editor de código e instalar as dependências rodando o seguinte comando (com base no seu administrador de pacotes)
</p>

<h3>Npm</h3>

```bash
npm i
```

<h3>Yarn</h3>

```bash
yarn
```

<br/>

<h2 align="center" id="env">Configurando variáveis de ambiente</h2>

<p>
    Agora é necessário criar um arquivo na raiz da pasta da aplicação .env para configuração do banco de dados e secret keys localmente, basta seguir o .env.example
</p>

<br />

<h2 align="center" id="migrations">Rodando as migrações</h2>

<p>
    Para as tabelas e relacionamentos serem gerados no banco de dados, é necessário executar as migrations do prisma. Vale ressaltar que só é necessário fazer a primeira vez, sendo preciso fazer novamente apenas se algo é editado na configuração do Prisma
</p>

<h3>Npm</h3>

```bash
npx prisma migrate dev
```

<h3>Yarn</h3>

```bash
yarn prisma migrate dev
```

<p>
    Em seguida basta colocar o nome desejado da migration em seu terminal e pronto!
</p>

<br />

<h2 align="center" id="host">Rodando localmente o Contact-Chain</h2>

<p>
    Com todas as dependências instaladas e configurações feitas como solicitado, basta rodar o seguinte comando para rodar localmente a API e o site da Contact-Chain:
</p>

<h3>Npm</h3>

```bash
npm run dev
```

<h3>Yarn</h3>

```bash
yarn dev
```

<br />

<h2 align="center" id="doc">Documentação da API</h2>

<a href="https://contact-chain-api-doc.vercel.app/" target="_blank">Documentação no insomnia</a>
