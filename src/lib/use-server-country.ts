import { headers } from 'next/headers';

export function useServerCountry() {
  const headersList = headers();
  const country =
    headersList.get('CF-IPCountry') ?? headersList.get('X-Vercel-IP-Country');
  if (country === 'XX') return undefined;
  return country ?? undefined;
}
