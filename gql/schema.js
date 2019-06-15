const { gql } = require('apollo-server');

const typeDefs = gql`

type Query{
    activity:Activity!
}

type Activity {
  activity : String
  accessibility: Float,
  type : String 
  participants : Int,
  price : Float,
  link : Float,
  key : String!
}
`;

module.exports = typeDefs;