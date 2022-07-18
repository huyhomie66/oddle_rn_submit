import {useEffect} from 'react';
import {useQuery} from 'react-query';
import {getProducts} from 'service/graphqlService';

export default () => {
  return useQuery('products', getProducts);
};
