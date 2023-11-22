import { createDirectus, staticToken, graphql } from '@directus/sdk';
type Tags = string | string[];

export class CMSApi {
  private directusClient;
  private static instance: CMSApi;

  private get endpoint() {
    return process.env.CMS_ENDPOINT;
  }

  private get token() {
    return process.env.CMS_TOKEN;
  }

  private constructor() {
    const { token, endpoint } = this;

    if (!endpoint) throw new Error('CMS API - No Endpoint url has been passed');

    if (!token) throw new Error('CMS API - No Token has been passed');

    this.directusClient = createDirectus(endpoint)
      .with(staticToken(token))
      .with(graphql());
  }

  public static getInstance() {
    return this.instance ? this.instance : (this.instance = new CMSApi());
  }

  private generateFetch(tags?: string[]) {
    return (input: RequestInfo | URL, init?: RequestInit | undefined) => {
      let requestInit = init;

      if (tags) {
        requestInit = {
          ...init,
          cache: 'no-cache',
          next: {
            tags: tags,
          },
        };
      }

      return fetch(input, requestInit);
    };
  }

  private parseTags(tags?: Tags) {
    if (!tags) return [];
    if (typeof tags === 'string') return [tags];
    return tags;
  }

  public async query<T extends Record<string, unknown>>(
    query: string,
    variables?: Record<string, unknown>,
    tags?: Tags,
  ) {
    this.directusClient.globals.fetch = this.generateFetch(
      this.parseTags(tags),
    );

    try {
      return (await this.directusClient.query<T>(query, variables)) as T;
    } catch {
      throw new Error('CMS API - Error querying CMS');
    }
  }
}
