import { GlobalConfig } from 'payload/types';
import Seo from './seo';
import SocialNetworks from './social-networks';

export function getGlobals(): GlobalConfig[] {
  return [Seo, SocialNetworks];
}
