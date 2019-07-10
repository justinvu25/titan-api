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

const PORT = 3000

const graphqlServer = new ApolloServer({
	typeDefs,
	resolvers,
	context,
	subscriptions: {
		onConnect: (connectionParams): object => {
			return connectionParams
		},
	},
})

app.use('*', cors())
app.use(compression())

graphqlServer.applyMiddleware({ app, path: '/graphql' })

const httpServer = createServer(app)
graphqlServer.installSubscriptionHandlers(httpServer)

httpServer.listen(
	PORT,
	(): void => {
		// eslint-disable-next-line
		console.log(
			`🚀 Server ready at http://localhost:${PORT}${graphqlServer.graphqlPath}`,
		)
		// eslint-disable-next-line
		console.log(
			`🚀 Subscriptions ready at ws://localhost:${PORT}${
				graphqlServer.subscriptionsPath
			}`,
		)
	},
)
