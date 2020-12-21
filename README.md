<p align="center"> TODO list Project
    <br> 
</p>

---

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

## 📝 Table of Contents

- [About](#about)
- [Database](#database)
- [Built Using](#built_using)
- [Authors](#authors)
- [Todo](#todo)

## 🧐 About <a name = "about"></a>

This is the back end of a TODO list. This project use postgres as database, docker, typescript, express.

### Prerequisites

- Node
- Docker
- Yarn
- Editor of text of your choice

### Installing

Clone the project on your machine.

```
git clone https://github.com/devnunes/todolistback.git
```

install docker and run a postgres container.

```
docker run --name todolist -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

Run the project.

```
yarn dev:server
```

## Database - Docker <a name = "database"></a>

[Postgres Docker Hub](https://hub.docker.com/_/postgres)

## 🔧 Running the tests with Jest <a name = "tests"></a>

Run the following code:

```
yarn test
```

## ⛏️ Built Using <a name = "built_using"></a>

- [PostGres](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Typescript](https://www.typescriptlang.org/) - Syntatical superset of JavaScript

## ✍️ Authors <a name = "authors"></a>

- [@devnunes](https://github.com/devnunes)

## TODO in this project <a name = "todo"></a>

- Todo controller
- Routes
- <s> DB connection </s>
