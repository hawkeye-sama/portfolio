import Button from 'components/Button';
import { Icon } from 'components/Icon';
import SocialLinks from 'components/SocialLinks';
import { Typography } from 'components/Typography';
import React, { memo } from 'react';

import { ContentWrapper, Section } from './styled.components';

function LetsGetInTouchSection() {
  return (
    <Section id="contact">
      <Icon icon="mail-64" variant="stroke" highlighted />
      <ContentWrapper>
        <h5>Let&apos;s Get In Touch!</h5>
        <Typography variant="body">I would love to hear from you!.</Typography>
        <Typography variant="secondary">
          If you have any questions, or would like to work with me or just want to leave me a
          message,
        </Typography>
      </ContentWrapper>
      <Button
        prefix="chat-bubbles"
        as="a"
        href="https://www.linkedin.com/in/bahroze-ali-686a141a0/"
        target="_blank"
        size="small"
      >
        Message me on LinkedIn
      </Button>
      <SocialLinks />
    </Section>
  );
}

export default memo(LetsGetInTouchSection);
