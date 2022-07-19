import {GraphQLClient, gql} from 'graphql-request';
import {ENDPOINT, TOKEN} from 'config';
import {getListItem} from 'service/endpoint';

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

const getProducts = async () => {
  const listLikedItems = await getListItem();

  const result = await client.request(query);
  const finalProduct = result.products.map(product => ({
    ...product,
    isLiked: listLikedItems.includes(product.id),
  }));

  console.log(finalProduct);
  return finalProduct;
};
export {getProducts};
export default client;
