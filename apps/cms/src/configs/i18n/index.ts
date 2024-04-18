import { Config } from 'payload/config';
import portugueseTranslation from './custom/pt.json';
import translationOverrides from './overrides.json';

type Resources = Config['i18n']['resources'];
function mergeResources(lang: Resources, overrides?: Resources) {
  return { ...lang, ...overrides };
}

export const getI18nConfig = (): Config['i18n'] => ({
  fallbackLng: 'en',
  resources: mergeResources(
    {
      pt: portugueseTranslation,
    },
    translationOverrides,
  ),
});
