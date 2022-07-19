import axios from 'axios';
import {BASE_URL, APP_ACCOUNT_NAME, APP_API_KEY} from 'config';

const instances = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: APP_API_KEY,
  },
});

const getListItem = async () => {
  const result = await instances.get(
    `/api/accounts/${APP_ACCOUNT_NAME}/favourites`,
  );
  return result.data.data;
};

const likeAnItem = async (item_id: string) =>
  await instances.patch(
    `/api/accounts/${APP_ACCOUNT_NAME}/favourites/${item_id}`,
  );

const unlikeAnItem = async (item_id: string) =>
  await instances.delete(
    `/api/accounts/${APP_ACCOUNT_NAME}/favourites/${item_id}`,
  );

export {likeAnItem, getListItem, unlikeAnItem};
