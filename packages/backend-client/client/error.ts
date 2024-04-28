type GraphQlErrorType = {
  message: string;
};

export default class GraphQlError extends Error {
  public errors: string[];
  constructor(errors: GraphQlErrorType[]) {
    super('GraphQL Error Response');
    this.name = 'GraphQlError';
    this.errors = errors.map((error) => error.message);
  }
}
