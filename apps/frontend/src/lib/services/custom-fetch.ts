export function generateCustomFetch(tags?: string[]) {
  return function (url: RequestInfo, init?: RequestInit) {
    return fetch(url, {
      ...init,
      next: {
        tags,
      },
    });
  };
}
