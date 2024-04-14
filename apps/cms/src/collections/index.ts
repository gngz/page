import { CollectionConfig } from 'payload/types';

import Experiences from './experiences';
import Pages from './pages';
import Skills from './skills';
import Uploads from './uploads';
import Users from './users';
export function getCollections(): CollectionConfig[] {
  return [Experiences, Pages, Skills, Uploads, Users];
}
