import {useState, useEffect} from 'react';
import {useQuery} from 'react-query';
import {getListItem} from 'service/endpoint';

export default () => {
  return useQuery('listItem', getListItem);
};
