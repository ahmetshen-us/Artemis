// const { gql } = require('apollo-server');
const { makeExecutableSchema } =require('graphql-tools');
const { resolvers } =require('./resolvers');

// const typeDefs = gql`

const typeDefs = `
type Query{
    getAnActivity: Activity
}

type Activity {
  activity : String
  accessibility: Float
  type : String 
  participants : Int
  price : Float
  link : String
  key : String!
}
`;
const schema = makeExecutableSchema({ typeDefs, resolvers});

module.exports = {schema};