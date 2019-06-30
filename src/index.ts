import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { createServer } from 'http'
import compression from 'compression'
import cors from 'cors'
import context from './app/context'
import typeDefs from './app/typeDefs'
import resolvers from './app/resolvers/rootResolver'

import './db/mongoose'

const app = express()

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context,
})

app.use('*', cors())
app.use(compression())

server.applyMiddleware({ app, path: '/graphql' })

const httpServer = createServer(app)

httpServer.listen(
	{ port: 3000 },
	(): void =>
		// eslint-disable-next-line
		console.log(`🚀 GraphQL is now running on http://localhost:3000/graphql`),
)
