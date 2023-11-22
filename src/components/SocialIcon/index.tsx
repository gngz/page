import React from 'react';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

type Props = {
  socialNetwork: 'github' | 'linkedin' | 'x';
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

function getIconComponent(network: Props['socialNetwork'], size = 24) {
  if (network === 'github') return React.createElement(FaGithub, { size });
  if (network === 'linkedin')
    return React.createElement(FaLinkedinIn, { size });
  if (network === 'x') return React.createElement(FaXTwitter, { size });
}

export default function SocialIcon({
  socialNetwork,
  href = '#',
  ...other
}: Props) {
  const icon = getIconComponent(socialNetwork);
  return (
    <a href={href} {...other}>
      {icon}
    </a>
  );
}
