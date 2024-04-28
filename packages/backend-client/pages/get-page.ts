import SingletonAPIClient from '../client/client';
import { CustomFetch } from '../client/types';

const client = SingletonAPIClient.getInstance();

type GetPageResponse = {};

const query = ``;
export async function getPage(path: string, customFetch?: CustomFetch) {
  const response = await client.query<GetPageResponse>(
    query,
    { path },
    customFetch,
  );
}
