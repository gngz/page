export type CustomFetch = typeof fetch;

export type APIClientConfig = {
  baseUrl: string;
  token?: string;
};

export type GraphQLResponse<T> = {
  errors?: {
    message: string;
  }[];
  data: T;
};
