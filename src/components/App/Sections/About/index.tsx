import { Typography } from 'components/Typography';
import React, { memo } from 'react';
// TODO Fix this or find alternative to this package
import TextLoop from 'react-text-loop';

import { AboutMeText, AboutMeWrapper, AccentText, Section } from './styled.components';

function AboutSection() {
  return (
    <Section id="about">
      <AboutMeWrapper>
        <AboutMeText>About me</AboutMeText>
        <Typography variant="body">
          Hello! I enjoy creating things that live on the internet. My interest in coding back in
          college when I discovered <AccentText variant="accent">Kali Linux</AccentText> — turns out
          it&apos;s quite fun experimentating what can be done and I was hooked into coding.
        </Typography>
        <Typography variant="body">
          Fast-forward to today, and I’ve had the privilege of working at an{' '}
          <AccentText variant="accent">
            Supply chain platform, a Start-up, and a SaaS solutions company,
          </AccentText>{' '}
          and each opportunity made me a better version of myself. These days I&apos;m discovering{' '}
          <AccentText variant="accent">Blockchain</AccentText>, and trying to
          <AccentText variant="accent"> contribute to open source projects</AccentText>.
        </Typography>
        <Typography variant="body">
          Interested in{' '}
          <TextLoop interval={1500}>
            <AccentText variant="accent">Full Stack</AccentText>
            <AccentText variant="accent">Mobile</AccentText>
            <AccentText variant="accent">Blockchain</AccentText>
          </TextLoop>
          <Typography variant="body">
            {' '}
            Development roles, and working on ambitious projects with positive people.
          </Typography>
        </Typography>
        <AccentText
          variant="accent"
          onClick={() => {
            const sectionElement = document.getElementById('contact');

            if (sectionElement) {
              sectionElement.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Let&apos;s make something special.
        </AccentText>
      </AboutMeWrapper>
    </Section>
  );
}

export default memo(AboutSection);
