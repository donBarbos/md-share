<!-- Original file: https://www.iconfinder.com/icons/4394350/logo_logos_markdown_icon -->
<h1 align="center">
  <a href="https://md-share.vercel.app">
    <img alt="Markdown" src="./public/favicon.png" width="140" height="140" /><br/>
  </a>
  .mdShare
</h1>

<h3 align="center">
  Best way to share your markdown files.
</h3>

<p align="center">
  <a href="https://github.com/donBarbos/md-share/tags"><img alt="GitHub tag (latest SemVer)" src="https://img.shields.io/github/v/tag/donBarbos/md-share"></a>
  <a href="https://codecov.io/gh/donBarbos/md-share" ><img alt="Coverage Status" src="https://codecov.io/gh/donBarbos/md-share/branch/main/graph/badge.svg?token=0O5750DY6J"/></a>
  <a href="https://github.com/donBarbos/md-share/actions/workflows/build.yml"><img alt="Build Status" src="https://img.shields.io/github/actions/workflow/status/donBarbos/md-share/build.yml?label=build"></a>
  <a href="https://github.com/donBarbos/md-share/actions/workflows/tests.yml"><img alt="Tests Status" src="https://img.shields.io/github/actions/workflow/status/donBarbos/md-share/tests.yml?label=tests"></a>
  <a href="https://github.com/donBarbos/md-share/actions/workflows/lint.yml"><img alt="Linter Status" src="https://img.shields.io/github/actions/workflow/status/donBarbos/md-share/lint.yml?label=lint"></a>
  <a href="http://commitizen.github.io/cz-cli/"><img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg"></a>
  <a href="https://github.com/donBarbos/md-share/blob/master/LICENSE"><img src="https://img.shields.io/badge/License-AGPL_v3-blue.svg" alt="License"></a>
</p>

## ℹ️ Description

Imagine the situation, you have written a useful Markdown note and you decide to share it. Now you just upload a file and get a link to a page with your note that you can share.

## 🚀 Getting Started

- Install dependens:

  ```bash
  yarn install
  ```

- Build your application:

  ```bash
  yarn build
  ```

- Start the Node.js server:

  ```bash
  yarn start
  ```

- And you can check the site on [`localhost:3000`](http://localhost:3000)

## ⚙️ Settings

|     variable     | description                                                                                                                            |
| :--------------: | -------------------------------------------------------------------------------------------------------------------------------------- |
|    `APP_URL`     | URL of your application such as your domain `https://example.com` or `http://localhost:3000` (needed for SEO and generate links)       |
|   `MONGO_HOST`   | host is the server where your mongodb server is running                                                                                |
|   `MONGO_PORT`   | port that mongodb server is listening on                                                                                               |
|   `MONGO_USER`   | user is an account that is used to authenticate and access the database                                                                |
|  `MONGO_PASSWD`  | password is used to authenticate the user who is accessing the database                                                                |
| `MONGO_DATABASE` | name of the mongodb database that your application will connect to                                                                     |
|   `MONGO_URI`    | you can specify the connection string for a mongodb database instead of the previous variables (has higher priority, empty by default) |

## 🔧 Tech Stack

- `TypeScript` — syntactic superset of JavaScript which adds static typing.
- `React` — library for building user interfaces based on components.
- `Next.js` — framework that allows you to create React applications that you can render on the server.
- `Testing Library` — very light-weight solution for testing without all the implementation details.
- `MongoDB` — NoSQL database that stores data in JSON-like documents.
- `PostCSS` — tool for transforming CSS with JavaScript-based plugins.
- `markdown-it` — markdown parser to generate HTML.

## 🤝 Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md)

## 📝 License

Distributed under the AGPL-3.0 license. See [`LICENSE`](./LICENSE) for more information.

## 📢 Contact

[donbarbos](https://github.com/donBarbos): donbarbos@proton.me
