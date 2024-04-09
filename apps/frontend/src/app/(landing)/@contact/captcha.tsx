import { Turnstile } from '@marsidev/react-turnstile';
import { ComponentProps } from 'react';

const options: ComponentProps<typeof Turnstile>['options'] = {
  theme: 'light',
  action: 'contact-form',
  size: 'invisible',
};

const defaultKey = '1x00000000000000000000AA';

export function CaptchaWidget() {
  const siteKey = process.env.CF_TURNSTILE_SITEKEY ?? defaultKey;
  return <Turnstile siteKey={siteKey} options={options} />;
}
