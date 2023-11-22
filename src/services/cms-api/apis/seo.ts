import { CMSApi } from '../api';
import { SeoDTO, SeoSchema } from '../models/seo';

type SeoResponse = {
  seo: SeoDTO;
};

/**
 * Retrieves the SEO data from the CMS.
 *
 * @return {Promise<Seo>} A promise that resolves to the SEO data.
 */
export async function getSeoData() {
  const query = `
        query ($locale: String = "en") {
            seo {
                translations(
                    filter: { languages_id: { code: { _starts_with: $locale } } }
                ) {
                    title
                    description
                    keywords
                }
            }
        }
  `;

  const collection = 'seo';
  const result = await CMSApi.getInstance().query<SeoResponse>(
    query,
    undefined,
    ['all', collection, `${collection}_translations`],
  );

  return SeoSchema.parse(result.seo);
}
