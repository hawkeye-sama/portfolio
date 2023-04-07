import React from 'react';

import {
  CardContainer,
  ImageContainer,
  InfoContainer,
  ProjectDescription,
  ProjectTitle,
} from './styled.components';

interface ProjectCardProps {
  imageUrl?: string;
  title: string;
  description: string;
  link?: URL;
}

ProjectCard.defaultProps = {
  imageUrl: undefined,
  link: undefined,
};

function ProjectCard({ imageUrl, title, description, link }: ProjectCardProps) {
  return (
    <CardContainer
      isDisabled={!link}
      onClick={() => {
        if (!link) {
          return;
        }

        window.open(link, '_blank');
      }}
    >
      <ImageContainer
        imageUrl={
          imageUrl ||
          'https://www.annesara.nl/wp-content/themes/claue/assets/images/placeholder.png'
        }
      />
      <InfoContainer>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
      </InfoContainer>
    </CardContainer>
  );
}

export default ProjectCard;
