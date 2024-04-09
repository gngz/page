'use server';

import { getSocialNetworks } from '../../../services/cms-api';

export async function getSocialNetworksData() {
  return getSocialNetworks();
}
