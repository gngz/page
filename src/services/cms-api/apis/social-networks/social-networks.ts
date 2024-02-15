import { CMSApi } from '@/services/cms-api/api';
import {
  SocialNetworkModel,
  SocialNetworkSchema,
} from './models/social-network';

type SocialNetworksResponse = {
  social_networks: SocialNetworkModel[];
};

export async function getSocialNetworks() {
  const query = `
      {
        social_networks(
          filter: {
            status: {_eq: "published"}
          }
        ) {
          code,
          name,
          url
        }
      }
  `;

  const collection = 'social_networks';
  const result = await CMSApi.getInstance().query<SocialNetworksResponse>(
    query,
    undefined,
    ['all', collection],
  );

  return SocialNetworkSchema.array().parse(result.social_networks);
}
