import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
  uri: 'https://puppy-playdate.us-west-2.aws.cloud.dgraph.io/graphql',
  cache: new InMemoryCache(),
})
