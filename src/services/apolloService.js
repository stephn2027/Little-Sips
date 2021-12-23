import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";
  


const client = new ApolloClient({
    uri: 'https://api-ap-northeast-1.graphcms.com/v2/ckxia5olc243801xpdonvbkq6/master',
    cache: new InMemoryCache()
  });


  export default client;