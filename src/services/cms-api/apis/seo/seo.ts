import { CMSApi } from '@/services/cms-api/api';
import { SEO, SEOSchema } from './models/seo';

type SeoResponse = {
  seo: SEO;
};

/**
 * Retrieves the SEO data from the CMS.
 *
 * @return {Promise<Seo>} A promise that resolves to the SEO data.
 */
export async function getSeoData() {
  const query = `
    query {
      seo {
        title
        description
        keywords
      }
    }
  `;

  const collection = 'seo';
  const result = await CMSApi.getInstance().query<SeoResponse>(
    query,
    undefined,
    ['all', collection],
  );

  return SEOSchema.parse(result.seo);
}
