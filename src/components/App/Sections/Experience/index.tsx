import { Typography } from 'components/Typography';
import React, { memo } from 'react';

import ExperienceCard from './Card';
import { CardWrapper, ContentWrapper, ExperienceText, Section } from './styled.components';

function MySkillsAndExpertiseSection() {
  return (
    <Section id="experience">
      <ContentWrapper>
        <ExperienceText>Experience</ExperienceText>
        <Typography variant="body" lead>
          During my <Typography variant="accent">3 years of experience</Typography> as a developer,
          I have honed my skills in creating efficient and effective solutions to complex problems.
          I am always eager to learn new technologies and methodologies to continue growing as a
          developer.
        </Typography>
        <CardWrapper>
          <ExperienceCard
            company="Bindr"
            description="bindr.uk was a platform that facilitated students to connect with each other and study together on topics of same interests.
              Despite its early success, Bindr closed it's doors on March 2023."
            position="Full Stack/Flutter Developer"
            years="Nov 2021 - April 2023"
          />
          <ExperienceCard
            company="Skupreme"
            description="Automated Ecommerce & Supply Chain Management platform that helps sellers seamlessly integrate their products
              and launch products in multiple ecommerce websites,"
            position="Backend Developer"
            years="Jun 2021 - Present"
            link={new URL('https://skupreme.com/')}
          />
        </CardWrapper>
        <CardWrapper>
          <ExperienceCard
            company="AlphaSquad"
            description="AlphaSquad is a technology company specializing in delivering innovative software solutions. 
              AlphaSquad's team of skilled professionals works closely with clients to create tailor-made, 
              cutting-edge solutions that cater to their unique needs and requirements."
            position="Backend Developer"
            years="Dec 2020 - Jul 2021"
            link={new URL('https://alphasquad.tech/')}
          />
          <ExperienceCard
            company="MTBC"
            description="MTBC (Medical Transcription Billing, Corp.) is a healthcare information technology company 
              that provides integrated electronic health records, practice management, and revenue cycle management solutions for medical practices."
            position="Frontend Developer"
            years="Mar 2020 - Oct 2020"
            link={new URL('https://mtbc.com/')}
          />
        </CardWrapper>
      </ContentWrapper>
    </Section>
  );
}

export default memo(MySkillsAndExpertiseSection);
