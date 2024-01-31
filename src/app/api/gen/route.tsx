import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic'; // defaults to auto
export async function GET(request: NextRequest) {
  const title = request.nextUrl.searchParams.get('title');
  const author = request.nextUrl.searchParams.get('author');

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: '#f6f6f6',
          fontSize: '85px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          flexDirection: 'column',
        }}
      >
        <p>{title}</p>
        <p>By {author}</p>
      </div>
    ),
  );
}
