var express = require('express');
var app = express();
var port = 4444;
var { graphqlHTTP } = require('express-graphql');

var schema = require('./Schema/index');
const db = require('./models')
app.use(express.json());

var rootValue = { "rootValue": "Global", dbConfig: db }


const context = (req) => {
    console.log(req.headers);
    let token =123;
    let host =req.headers.host;
    return {token,host}
}

app.use('/graphql',
    graphqlHTTP(async (req)=>({
        schema: schema,
        rootValue: rootValue,
        graphiql: true,
        context: () => context(req)
    }))
    // graphqlHTTP({
    //     schema: schema,
    //     rootValue: rootValue,
    //     graphiql: true,
    //     context: () => context(req)
    // })
);
app.listen(port, () => {
    console.log(`Running a GraphQL API server at http://localhost:${port}/graphql`);
});

