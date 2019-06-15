const express = require('express');
const graphqlHTTP = require('express-graphql');
const { schema } = require('./schema');


const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));



app.listen(8080, () => console.log('🚀 Server ready at http://localhost:8080/graphql'));
