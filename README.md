# Frontend Vue coding challenge

## Table of Contents
--------------------

- [Libraries](#libraries)
- [Run](#run)
- [Test](#test)
- [Docker](#docker)

## Libraries

- [NuxtJS](https://nuxtjs.org/) - ^2.15.3
- [Bootstrap-Vue](https://bootstrap-vue.org) - ^2.21.3
- [vuex-persist](https://github.com/championswimmer/vuex-persist) - ^3.1.3
- [sass](https://github.com/sass/sass) - ^1.32.12
- [husky](https://github.com/typicode/husky) - ^4.3.8
- [cypress](https://www.cypress.io/) - ^7.2.0
- [Docker](https://www.docker.com/) - ^20.x

## Run
----
### Installation

```bash
yarn install
```

### Run on Development
```bash
yarn dev
```

### Run on Production

If you aim to build `Nuxt` with SSR or static page, you should configure the following setting in `nuxt.config.js`.

- SSR
```
export default {
    ...
    target: 'server',
    ...
}
```
```bash
yarn build && yarn start
```

- Static page
```
export default {
    ...
    target: 'static',
    ...
}
```
```bash
yarn generate && yarn start
```

## Test

The following CLI runs e2e test with [Cypress](https://www.cypress.io).
```bash
yarn test
```

## Docker

### Build

You can run the following CLI in the root directory of the project.

```bash
docker build -t jagaad_vue .
```

### Run

```bash
docker run -dp 3000:3000 jagaad_vue
```

## Author
[� Alik Ho �](aliklabe.buz@gmail.com)
