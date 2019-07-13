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

const PORT = process.env.PORT || 3000

const graphqlServer = new ApolloServer({
	typeDefs,
	resolvers,
	context,
	subscriptions: {
		onConnect: (connectionParams): object => {
			return connectionParams
		},
	},
	introspection: true,
	playground: true,
})

app.use('*', cors())
app.use(compression())

graphqlServer.applyMiddleware({ app, path: '/graphql' })

const httpServer = createServer(app)
graphqlServer.installSubscriptionHandlers(httpServer)

httpServer.listen()
