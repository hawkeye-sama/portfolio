import Button from 'components/Button';
import { Typography } from 'components/Typography';
import React, { memo } from 'react';

import ProjectCard from './ProjectCard';
import {
  ButtonsWrapper,
  CardWrapper,
  ContentWrapper,
  ProjectText,
  Section,
} from './styled.components';

function ProjectsGallerySection() {
  return (
    <Section id="gallery">
      <ContentWrapper>
        <ProjectText>Projects</ProjectText>
        <Typography variant="body" lead>
          Explore a selection of my past projects, featuring both{' '}
          <Typography variant="accent">open source contributions </Typography> and other exciting
          ventures that showcase my skills and expertise, including projects with organizations
          I&apos;ve joined.
        </Typography>
        <ButtonsWrapper>
          <Button
            as="a"
            href="https://github.com/hawkeye-sama"
            target="_blank"
            size="small"
            variation="outlined"
          >
            Github
          </Button>
        </ButtonsWrapper>
        <CardWrapper>
          <ProjectCard
            imageUrl="https://cdn.tuk.dev/assets/Twitter_OG_Tag_800_x_418.png"
            title="TUK"
            description="A UI Kit built with Tailwind CSS. My contribution for this project was mainly on backend with 3rd party API Integration and Serverless."
            link={new URL('https://tailwinduikit.com/')}
          />
          <ProjectCard
            imageUrl="https://user-images.githubusercontent.com/4297743/227696390-0c1886c7-0cda-4528-9259-0b2944892d4c.png"
            title="Cursor"
            description="Cursor is an editor made for programming with AI. It holds the distinction of being the first open-source project to which I contributed."
            link={new URL('https://github.com/getcursor/cursor')}
          />
        </CardWrapper>
        <CardWrapper>
          <ProjectCard
            title="Sparrow"
            description="A Sneaker ecommerce mobile app built with flutter. Currently in work in progress by me. Just a fun side project, implemented with BLoC pattern."
            link={new URL('https://github.com/hawkeye-sama/sparrow-flutter')}
          />
        </CardWrapper>
      </ContentWrapper>
    </Section>
  );
}

export default memo(ProjectsGallerySection);
