import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div<{ isDisabled: boolean }>`
  background-color: ${(props) => props.theme.colors.cardHighlighted};
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  max-width: 375px;
  width: 100%;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: ${(props) =>
      props.isDisabled ? props.theme.colors.error : props.theme.colors.cardAccent};
    cursor: ${(props) => (props.isDisabled ? 'default' : 'pointer')};

    h3,
    p {
      color: ${(props) => props.theme.colors.text};
    }
  }
`;

const ImageContainer = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 200px;
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 5px;
  color: ${(props) => props.theme.colors.text};
`;

const ProjectDescription = styled.p`
  font-size: 14px;
  line-height: 1.4;
  margin: 0;
  color: ${(props) => props.theme.colors.bodyText};
`;

const InfoContainer = styled.div`
  padding: 10px 20px 30px 20px;
`;

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
