import Button from 'components/Button';
import Svg from 'components/Svg';
import React, { memo } from 'react';

import {
  ButtonsWrapper,
  ContentWrapper,
  HeaderText,
  ImageContent,
  MainContent,
  NameText,
  Section,
  SpanText,
  SubHeaderText,
} from './styled.components';

function HeroSection() {
  return (
    <div>
      <Section id="hero">
        <span />
        <MainContent>
          <ContentWrapper>
            <HeaderText>
              Hi, <SpanText>my name is</SpanText>
            </HeaderText>
            <NameText>Bahroze Ali.</NameText>
            <SubHeaderText>
              I build things for the <SpanText>web and mobile</SpanText>.
            </SubHeaderText>
            <ButtonsWrapper>
              <Button
                prefix="chat-bubbles"
                as="a"
                href="https://www.linkedin.com/in/bahroze-ali-686a141a0/"
                target="_blank"
              >
                Connect with me
              </Button>
              <Button
                prefix="download"
                variation="outlined"
                as="a"
                target="_blank"
                download
                href="/portfolio/resume.pdf"
              >
                Download My Resume
              </Button>
            </ButtonsWrapper>
          </ContentWrapper>
        </MainContent>
        <ImageContent>
          {' '}
          <Svg icon="undraw" />
        </ImageContent>
      </Section>
    </div>
  );
}

export default memo(HeroSection);
