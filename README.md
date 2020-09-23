## 关于本 Gatsby 主题

本主题名为「清风朗月」，英文为 Breeze，努力成为一个优雅的中文博客主题，希望你喜欢。

本主题主要移植（同时做了一些修改，具体见下）自 [AmazingRise](https://github.com/AmazingRise) 的 Hugo 主题 [Diary](https://github.com/amazingrise/hugo-theme-diary)，而其移植并改进自 [SumiMakito](https://github.com/SumiMakito) 的 Hexo 主题 [Journal](https://github.com/SumiMakito/hexo-theme-journal/)。

目前而言，本主题已经大致完成了博客的所有基本功能（比如文章列表、文章页面、标签系统），以及一些附加功能：

- [x] 对小屏幕设备的响应式布局
- [x] 文章目录
- [x] 评论
- [x] 可配置性
- [ ] 黑暗模式 （暂不实现）
- ...

按照预期，这些功能都将会在短期内实现。如果没有遇到太多障碍的话。

另一方面，相较于 [AmazingRise](https://github.com/AmazingRise) 的 Hugo 主题 [Diary](https://github.com/amazingrise/hugo-theme-diary)，有一些刻意为之的差别：

- 从全屏幕三栏布局变为居中双栏布局
- 取消了文章类别 `category` ，仅保留文章标签 `tag`
- 归档和标签页面的布局更为紧凑，且不分页以便 `Ctrl + F` 页面内查找
- 区分了 `Post` 和 `Page` 两种类型的文章（比如此页面就是 `Page`，而不会出现在 `Post` 列表中）
- ...

## 关于作者

首先需要说明的是，本主题的作者为 [SumiMakito](https://github.com/SumiMakito)（最初设计与实现）和 [AmazingRise](https://github.com/AmazingRise)（许多有价值的改进），我仅仅是将其移植到 Gatsby 并做了一些符合个人口味的修改。

而我移植本主题，主要出于对本主题优雅设计的喜爱，同时也为了学习 Gatsby 等前端技能。在移植完成度较高之后，或许会将其用作我的个人博客主题。

最后，你可以在 Github（[keithnull](https://github.com/keithnull)）或者 Twitter（[无辄](https://twitter.com/_keithnull)）上找到我。

---

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the blog starter.

    ```shell
    # create a new Gatsby site using the blog starter
    gatsby new my-blog-starter https://github.com/keithnull/gatsby-starter-breeze
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-blog-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `my-blog-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/keithnull/gatsby-starter-breeze)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/keithnull/gatsby-starter-breeze)
