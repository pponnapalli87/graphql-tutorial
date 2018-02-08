import express from 'express'
import {graphqlExpress, graphiqlExpress} from 'apollo-server-express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import schema from './schema'
const server = express();

server.use('/graphiql', graphiqlExpress({
  endpointURL: "/graphql"
}))
mongoose.connect('mongodb://localhost/graphqlTutorial')
const connection = mongoose.connection
connection.once('open', () => {
  console.log('Mongoose connected')
})

server.use('/graphql', bodyParser.json(), graphqlExpress({schema}))

server.listen(4000, () => {
  console.log("listening on port 4000")
})