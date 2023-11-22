import React from 'react';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

type Props = {
  socialNetwork: 'github' | 'linkedin' | 'x';
} & React.HTMLProps<HTMLAnchorElement>;

function getIconComponent(network: Props['socialNetwork'], size = 24) {
  if (network === 'github') return React.createElement(FaGithub, { size });
  if (network === 'linkedin')
    return React.createElement(FaLinkedinIn, { size });
  if (network === 'x') return React.createElement(FaXTwitter, { size });
}

function generateTitle(network: Props['socialNetwork']) {
  if (network === 'github') return 'GitHub';
  if (network === 'linkedin') return 'LinkedIn';
  if (network === 'x') return 'X';
}

export default function SocialIcon({
  socialNetwork,
  href = '#',
  ...other
}: Props) {
  const icon = getIconComponent(socialNetwork);
  const title = generateTitle(socialNetwork);

  return (
    <a href={href} alt={title} title={title} target='_blank' {...other}>
      {icon}
    </a>
  );
}
