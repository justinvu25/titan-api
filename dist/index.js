"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const http_1 = require("http");
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const context_1 = __importDefault(require("./app/context"));
const typeDefs_1 = __importDefault(require("./app/typeDefs"));
const rootResolver_1 = __importDefault(require("./app/resolvers/rootResolver"));
require("./db/mongoose");
const app = express_1.default();
const PORT = process.env.PORT || 3000;
console.log('port LOG', PORT);
const graphqlServer = new apollo_server_express_1.ApolloServer({
    typeDefs: typeDefs_1.default,
    resolvers: rootResolver_1.default,
    context: context_1.default,
    subscriptions: {
        onConnect: (connectionParams) => {
            return connectionParams;
        },
    },
});
app.get('/', function (_, res) {
    res.redirect('/graphql');
});
app.use('*', cors_1.default());
app.use(compression_1.default());
graphqlServer.applyMiddleware({ app, path: '/graphql' });
const httpServer = http_1.createServer(app);
graphqlServer.installSubscriptionHandlers(httpServer);
httpServer.listen(PORT, () => {
    // eslint-disable-next-line
    console.log(`🚀 Server ready at http://localhost:${PORT}${graphqlServer.graphqlPath}`);
    // eslint-disable-next-line
    console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${graphqlServer.subscriptionsPath}`);
});
//# sourceMappingURL=index.js.map