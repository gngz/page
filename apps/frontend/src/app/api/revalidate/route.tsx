import { revalidateTag } from 'next/cache';
import { NextRequest } from 'next/server';
import { RevalidateSchema } from './schema';

export async function POST(request: NextRequest) {
  const token = request.headers.get('Authorization');
  const bodyData = RevalidateSchema.safeParse(await request.json());

  if (bodyData.success === false) {
    return Response.json({ error: 'Invalid request' }, { status: 400 });
  }

  if (!token) {
    return Response.json(
      { error: 'No Authentication token provided.' },
      { status: 400 },
    );
  }

  if (token !== process.env.REVALIDATE_TOKEN) {
    return Response.json(
      { error: 'Provided Authentication Token is Invalid.' },
      { status: 401 },
    );
  }

  let tag = bodyData.data.tags;

  if (typeof tag === 'string') {
    tag = tag.split(',');
  }

  const results = tag.map((tag) => Promise.resolve(revalidateTag(tag)));

  await Promise.all(results);

  return Response.json({ revalidated: true, now: Date.now() });
}
