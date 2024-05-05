import GraphQlError from './error';
import { APIClientConfig, CustomFetch, GraphQLResponse } from './types';

class APIClient {
  constructor(private config: APIClientConfig) {}

  private generateAuthHeaders() {
    return this.config.token
      ? {
          Authorization: `Bearer ${this.config.token}`,
        }
      : undefined;
  }
  async query<T>(
    query: string,
    variables?: Record<string, unknown>,
    customFetch?: CustomFetch,
  ): Promise<T> {
    const fetchImpl = customFetch ?? fetch;

    return fetchImpl('/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.generateAuthHeaders(),
      },
      body: JSON.stringify({ query, variables }),
    }).then(async (response) => {
      const parsedResponse: GraphQLResponse<T> = await response.json();
      if (response.ok) {
        if (parsedResponse.errors) {
          throw new GraphQlError(parsedResponse.errors);
        }
        return parsedResponse.data;
      }

      throw new Error(JSON.stringify(parsedResponse));
    });
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
