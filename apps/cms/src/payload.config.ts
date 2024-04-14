import path from 'path';

import { webpackBundler } from '@payloadcms/bundler-webpack';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import nestedDocs from '@payloadcms/plugin-nested-docs';
import { slateEditor } from '@payloadcms/richtext-slate';
import { buildConfig } from 'payload/config';
import { getCollections } from './collections';
import Users from './collections/users';
import { getI18nConfig } from './configs/i18n';
import { getGlobals } from './globals';

const localizationConfig = {
  locales: [
    {
      code: 'en',
      label: {
        en: 'English',
        pt: 'Inglês',
      },
    },
    {
      code: 'pt',
      label: {
        en: 'Portuguese',
        pt: 'Português',
      },
    },
  ],
  defaultLocale: 'en',
  fallback: true,
};

export default buildConfig({
  i18n: getI18nConfig(),
  localization: localizationConfig,
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: getCollections(),
  globals: getGlobals(),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    nestedDocs({
      collections: ['pages'],
      generateURL: (docs) =>
        docs.reduce((url, doc: { slug: string }) => `${url}/${doc.slug}`, ''),
    }),
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
});
