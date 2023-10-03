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
          Hello there! I&apos;m passionate about crafting digital experiences that come to life on
          the internet. My journey into the world of coding began during my college days when I
          stumbled upon <AccentText variant="accent">Kali Linux</AccentText>. Little did I know that
          this discovery would ignite my passion for experimentation and coding.
        </Typography>
        <Typography variant="body">
          Fast-forward to today, and I’ve had the privilege of working at a{' '}
          <AccentText variant="accent">
            Supply chain platform, a dynamic startup, and a cutting-edge SaaS solutions company,
          </AccentText>{' '}
          Each of these opportunities has enriched me and allowed me to evolve into a better version
          of myself. These days I&apos;m discovering{' '}
          <AccentText variant="accent">Blockchain</AccentText>, striving to
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
          Let&apos;s embark on a journey to create something truly extraordinary together!
        </AccentText>
      </AboutMeWrapper>
    </Section>
  );
}

export default memo(AboutSection);
