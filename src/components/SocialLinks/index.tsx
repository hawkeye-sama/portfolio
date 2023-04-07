import { Icon } from 'components/Icon';
import React from 'react';

import { IconLink, SocialLinksWrapper } from './styled.components';
import { ISocialLinksProps } from './types';

function SocialLinks({ className, style }: ISocialLinksProps) {
  return (
    <SocialLinksWrapper style={style} className={className}>
      <IconLink target="_blank" title="Github" href="https://github.com/hawkeye-sama">
        <Icon icon="github" variant="stroke" highlighted />
      </IconLink>
      <IconLink
        target="_blank"
        title="LinkedIn Profile"
        href="https://www.linkedin.com/in/bahroze-ali-686a141a0/"
      >
        <Icon icon="linkedin" variant="stroke" highlighted />
      </IconLink>
      <IconLink target="_blank" title="Business Email" href="mailto:bahroze1@hotmail.com">
        <Icon icon="mail" variant="stroke" highlighted />
      </IconLink>
    </SocialLinksWrapper>
  );
}

export default SocialLinks;
