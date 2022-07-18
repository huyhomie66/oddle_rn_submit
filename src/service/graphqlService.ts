import {GraphQLClient, gql} from 'graphql-request';
import {ENDPOINT, TOKEN} from 'config';

const client = new GraphQLClient(ENDPOINT, {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

export default client;
