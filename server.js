const express = require('express');
const graphqlHTTP = require('express-graphql');
const { schema } = require('./schema');


  
const app = express();

app.use(express.static('public'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));



app.listen(8080, () => console.log('🚀 Server ready at http://localhost:8080/graphql'));
