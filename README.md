# multivendor-api

multivendor-api

documentation: <https://documenter.getpostman.com/view/3827865/UVRAH6gY>

api url dev: <https://dof0861809.execute-api.ap-southeast-1.amazonaws.com/dev/>

api url prod: <https://2c4l21nv89.execute-api.ap-southeast-1.amazonaws.com/prod/>

## Requirement

- install yarn
- install node (v14+)
- install serverless

## Testing and run

```zsh
// test api in local
$ yarn run dev

// deploy to serverless
$ yarn run deploy

// open serverless dashboard
$ yarn run dashboard

// use eslint and prettier to format code
$ yarn run lint

// run test case
$ yarn run test

// remove serverless services in aws (api gateway, lambda, s3, cloudformation)
$ yarn run remove
```
