import Koa from 'koa'
import { ApolloServer } from 'apollo-server-koa'
import { schema } from './schema'
import morgan from 'koa-morgan'

const server = new ApolloServer({schema});

const app = new Koa();
app.use(morgan('combined'))
server.applyMiddleware({ app });

const port = process.env.PORT
app.listen({ port: port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),
);