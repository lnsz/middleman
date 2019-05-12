import Koa from 'koa'
import { ApolloServer, gql } from 'apollo-server-koa'
import { schema } from './schema'
import morgan from 'koa-morgan'

const server = new ApolloServer({schema});

const app = new Koa();
app.use(morgan('combined'))
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
);