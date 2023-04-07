import React from 'react';

import { CardContainer } from './styled.components';

type CardProps = {
  position: string;
  company: string;
  years: string;
  description: string;
  link?: URL | undefined;
  isDisabled?: boolean;
};

ExperienceCard.defaultProps = {
  link: undefined,
  isDisabled: false,
};

function ExperienceCard({ position, company, years, description, link, isDisabled }: CardProps) {
  return (
    <CardContainer
      isDisabled={isDisabled || false}
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
