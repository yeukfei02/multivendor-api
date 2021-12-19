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

// generate schema.graphql
$ yarn run generate:nexus

// generate schema.prisma and prisma client
$ yarn run prisma:generate

// create migration file if schema.prisma changed
$ yarn run prisma:migrate:dev

// reset database
$ yarn run prisma:migrate:reset

// apply pending migrations in the production/staging database
$ yarn run prisma:migrate:deploy

// check migrations status in the production/staging database
$ yarn run prisma:migrate:status

// push schema.prisma state to database
$ yarn run prisma:db:push

// seed data to database
$ yarn run prisma:db:seed

// format schema.prisma
$ yarn run prisma:format

// open prisma studio
$ yarn run prisma:studio
```
