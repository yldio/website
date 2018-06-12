# yld.io website ![circle][circle-badge] ![prettier][prettier-badge]

Shiny new website, built with [Gatsby].

[See it in action!][production]

[prettier-badge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[circle]: https://circleci.com/gh/yldio/website
[circle-badge]: https://circleci.com/gh/yldio/website.svg?style=svg

## Getting Started

1.  Clone the repository  
    `git clone git@github.com:yldio/website.git`

2.  Enter the newly created directory  
    `cd website`

3.  Install dependencies  
    `yarn`

4.  Grab an API key for Contentful and copy `.env.example` to `.env` and fill in with real data (speak to teammate if you can't get this working!)

5.  Kick off the development server  
    `yarn develop`

6.  [You're ready to contribute!](http://localhost:8000)

7.  If you encounter `Error: watch {path} ENOSPC`, run `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p` to fix the underlying issue (explained in a bit more detail [here](https://stackoverflow.com/questions/22475849/node-js-error-enospc/32600959#32600959))

## Useful Commands

* `yarn build` - create a static build
* `yarn develop` - spin up a local development server
* `yarn format` - format code with [Prettier]
* `yarn lint` - lint code with [ESLint]
* `yarn test` - run unit tests
* `yarn test:watch` - run unit tests in watch mode
* `yarn test:features` - run end to end tests
* `yarn cypress` - open [Cypress] UI for easy development

_You can also run the commands with `npm run` instead of `yarn`_

## Deployment

Deployment is automatically handled by Netlify for each branch, with `master` being our production branch.

Once you make a pull request, you should see a link to the current deployment for that branch once Netlify is done.

Pull requests should only be merged to master if our CI pipeline is green, and we are happy with the code.

Once merged into master, the build pipeline will once again run and deploy to production.

## Data-driven parts of the website

The website is driven by data from a mixture of local data and Contentful.

`gatsby-source-contentful` pulls down all data which is stored on the CMS, and `gatsby-source-filesystem` reads all data that is available in locally defined places. Check `gatsby-config.js` to see how these plugins are configured.

Gatsby then creates a GraphQL schema and endpoint around this data, which can be queried from certain top-level components - check `src/pages/index.jsx` for an example.

To inspect all the data you can query for, boot up the development server and then check http://localhost:8000/___graphql where you have a GraphiQL interface for inspecting the schema and data.

## Useful Links

#### Documentation

* [Gatsby] - Static site generator for React
* [Jest] - Unit testing framework
* [Enzyme] - Easier assertions for React component output
* [Cypress] - E2E / Integration testing framework

#### Editor Integrations

We maintain a consistent code style using [ESLint] and [Prettier]. Below are some useful editor integrations that will make development easier (your pull request will fail if `yarn lint` fails).

| Editor | ESLint          | Prettier          |
| ------ | --------------- | ----------------- |
| Atom   | [linter-eslint] | [prettier-atom]   |
| VSCode | [vscode-eslint] | [prettier-vscode] |
| vim    | [vim-syntastic] | [vim-prettier]    |

[linter-eslint]: https://atom.io/packages/linter-eslint
[prettier-atom]: https://atom.io/packages/prettier-atom
[vscode-eslint]: https://github.com/Microsoft/vscode-eslint
[prettier-vscode]: https://github.com/prettier/prettier-vscode/
[vim-syntastic]: https://github.com/vim-syntastic/syntastic
[vim-prettier]: https://github.com/prettier/vim-prettier
[eslint]: https://eslint.org/
[cypress]: https://docs.cypress.io/api/introduction/api.html
[prettier]: https://prettier.io/
[gatsby]: https://www.gatsbyjs.org/
[jest]: https://facebook.github.io/jest/docs/en/api.html
[production]: https://yld.netlify.com/
[enzyme]: http://airbnb.io/enzyme/
