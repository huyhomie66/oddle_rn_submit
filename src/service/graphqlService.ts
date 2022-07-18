import {GraphQLClient, gql} from 'graphql-request';
import {ENDPOINT, TOKEN} from 'config';

const client = new GraphQLClient(ENDPOINT, {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

const query = gql`
  {
    products(stage: DRAFT, first: 1000) {
      id
      name
      price
      productApiUrl
      priceSign
      productID
      productLink
      productType
      rating
      tagList
      imageLink
      brand
    }
  }
`;

const getProducts = async () => await client.request(query);
export {getProducts};
export default client;
