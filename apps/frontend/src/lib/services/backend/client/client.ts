import GraphQlError from './error';

type APIClientConfig = {
  baseUrl: string;
  token?: string;
};

type GraphQLResponse<T> = {
  errors?: {
    message: string;
  }[];
  data: T;
};

type QueryOptions = {
  cacheKeys: string[];
};

class APIClient {
  constructor(private config: APIClientConfig) {}

  private generateAuthHeaders() {
    return this.config.token
      ? {
          Authorization: `Bearer ${this.config.token}`,
        }
      : undefined;
  }
  async query<T>(query: string, queryOptions?: QueryOptions): Promise<T> {
    const nextOptions: NextFetchRequestConfig | undefined =
      queryOptions?.cacheKeys
        ? {
            tags: queryOptions.cacheKeys,
          }
        : undefined;

    const data = await fetch('/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.generateAuthHeaders(),
      },
      next: nextOptions,
      body: JSON.stringify({ query }),
    }).then((res) => res.json() as unknown as GraphQLResponse<T>);

    if (data.errors) {
      throw new GraphQlError(data.errors);
    }

    return data.data;
  }
}

export default class SingletonAPIClient {
  private static instance: APIClient | undefined;
  static getInstance() {
    if (!SingletonAPIClient.instance) {
      SingletonAPIClient.instance = new APIClient({
        baseUrl: process.env.CMS_URL ?? '',
        token: process.env.CMS_TOKEN,
      });
    }
    return SingletonAPIClient.instance;
  }
}
