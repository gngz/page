import { headers } from 'next/headers'

export function useServerCountry() {
    const headersList = headers()
    const country = headersList.get('CF-IPCountry')
    return country ?? undefined
}