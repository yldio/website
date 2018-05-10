# yld.io website

Shiny new website, built with [Gatsby](https://www.gatsbyjs.org/)

## Getting Started

1.  Clone the repository  
    `git clone git@github.com:yldio/website.git`

2.  Enter the newly created directory  
    `cd website`

3.  Install dependencies  
    `yarn`

4.  Kick off the development server  
    `yarn develop`

5.  [You're ready to contribute!](http://localhost:8000)

## Useful Commands

* `yarn build` - create a static build
* `yarn develop` - spin up a local development server
* `yarn format` - format code with [Prettier](https://prettier.io/)
* `yarn test` - run unit tests
* `yarn test:watch` - run unit tests in watch mode

## Useful Editor Integrations

We maintain a consistent code style using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/). Below are some useful editor integrations that will make development easier (your pull request will fail if `yarn lint` fails).

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

## Deployment

Deployment is automatically handled by Netlify for each branch, with `master` being our production branch.

Once you make a pull request, you should see a link to the current deployment for that branch once Netlify is done.

Pull requests should only be merged to master if our CI pipeline is green, and we are happy with the code.

Once merged into master, the build pipeline will once again run and deploy to production.
