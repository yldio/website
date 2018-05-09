# yld.io website

Shiny new website, built with [Gatsby](https://www.gatsbyjs.org/)

## Commands

* `yarn build` - production build
* `yarn develop` - spin up a local development server
* `yarn format` - format code with [Prettier](https://prettier.io/)
* `yarn test` - run unit tests
* `yarn test:watch` - run unit tests in watch mode

## Deployment

Deployment is automatically handled by Netlify for each branch, with `master` being our production branch.

Once you make a pull request, you should see a link to the current deployment for that branch once Netlify is done.

Pull requests should only be merged to master if our CI pipeline is green, and we are happy with the code.

Once merged, the build pipeline will once again run and deploy to production.
