import { RevalidateRequestSchema } from './revalidate-request';
import { revalidateTag } from 'next/cache';
import { NextRequest } from 'next/server';

/**
 * Parses a bearer token by removing the 'Bearer ' prefix.
 *
 * @param {string | null} token - The bearer token to parse.
 * @return {string | null} - The parsed bearer token without the 'Bearer ' prefix.
 */
function parseBearerToken(token: string | null) {
  if (!token) return null;
  const parsedToken = token.replace('Bearer ', '');
  return parsedToken;
}

/**
 * Retrieves the revalidation token from the environment variables.
 *
 * @return {string} The revalidation token as a string.
 */
function getRevalidateToken() {
  return String(process.env.CMS_REVALIDATE_TOKEN);
}

function validateToken(token: string) {
  return token === getRevalidateToken();
}

function parseTags(tags: string | string[]) {
  if (Array.isArray(tags)) {
    return tags;
  }
  return [tags];
}

export async function POST(request: NextRequest) {
  const headerList = new Headers(request.headers);

  const authorizationHeader = headerList.get('authorization');
  const parsedAuthToken = parseBearerToken(authorizationHeader);

  if (!parsedAuthToken || !validateToken(parsedAuthToken)) {
    return new Response('Unauthorized', { status: 401 });
  }

  if (request.headers.get('Content-Type') !== 'application/json') {
    return new Response('Invalid content type', { status: 400 });
  }

  const rawRequest = await request.json();
  let requestData;
  try {
    requestData = RevalidateRequestSchema.parse(rawRequest);
  } catch {
    return new Response('Invalid request data', { status: 400 });
  }

  const tags = parseTags(requestData.tags);

  tags.forEach((tag) => revalidateTag(tag));

  return new Response('Cache Revalidated', { status: 200 });
}
