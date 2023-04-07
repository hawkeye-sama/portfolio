import React from 'react';

import { CardContainer } from './styled.components';

type CardProps = {
  position: string;
  company: string;
  years: string;
  description: string;
  link?: URL | undefined;
};

ExperienceCard.defaultProps = {
  link: undefined,
};

function ExperienceCard({ position, company, years, description, link }: CardProps) {
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
      <h2>{position}</h2>
      <h3>
        {company} ({years})
      </h3>
      <p>{description}</p>
    </CardContainer>
  );
}

export default ExperienceCard;
