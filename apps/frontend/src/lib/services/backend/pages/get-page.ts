import APIClient from '../client/client';

type PageResponse = {
  slug: string;
};

export async function getPage(path: string) {
  const query = `${path}`;

  try {
    return await APIClient.getInstance().query<PageResponse>(query, {
      cacheKeys: [path],
    });
  } catch (error) {
    console.log(error);
  }
}
