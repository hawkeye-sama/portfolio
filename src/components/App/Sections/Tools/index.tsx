import { IconWithText } from 'components/App/styled.components';
import { Icon } from 'components/Icon';
import React, { memo } from 'react';

import { ContentWrapper, Stripe } from './styled.components';

function WhatIUseStrip() {
  return (
    <Stripe id="using">
      <IconWithText>
        <Icon icon="heart" variant="stroke" highlighted />
        <h3>Platforms, Languages and Framework</h3>
      </IconWithText>
      <ContentWrapper>
        <IconWithText>
          <Icon icon="figma" variant="stroke" />
          <h6>Figma</h6>
        </IconWithText>
        <IconWithText>
          <Icon icon="github" variant="stroke" />
          <h6>Github</h6>
        </IconWithText>
        <IconWithText>
          <Icon icon="code" variant="stroke" />
          <h6>HTML5, CSS3 &amp; Javascript</h6>
        </IconWithText>
        <IconWithText>
          <Icon icon="typescript" variant="stroke" />
          <h6>TypeScript</h6>
        </IconWithText>
      </ContentWrapper>
      <ContentWrapper>
        <IconWithText>
          <Icon icon="node" variant="stroke" />
          <h6>NodeJS</h6>
        </IconWithText>
        <IconWithText>
          <Icon icon="mongodb" variant="stroke" />
          <h6>MongoDB</h6>
        </IconWithText>

        <IconWithText>
          <Icon icon="flutter" variant="stroke" />
          <h6>Flutter</h6>
        </IconWithText>

        <IconWithText>
          <Icon icon="react" variant="stroke" />
          <h6>ReactJS</h6>
        </IconWithText>
      </ContentWrapper>
    </Stripe>
  );
}

export default memo(WhatIUseStrip);
