import breakpoints from 'assets/themes/breakpoints';
import { Typography } from 'components/Typography';
import styled from 'styled-components';

import { Section as _Section } from '../../styled.components';

export const Section = styled(_Section)`
  gap: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: ${breakpoints.md}) {
    flex-direction: column;
  }
`;

export const AboutMeWrapper = styled.div`
  max-width: 37.5rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

export const AboutMeText = styled.h3`
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  position: relative;

  ::before,
  ::after {
    content: '';
    display: block;
    height: 0.313rem;
    background: ${(props) => props.theme.colors.accent};
    position: absolute;
    width: 12.5rem;
  }

  ::before {
    left: -0.25rem;
  }

  ::after {
    right: -0.25rem;
  }

  @media only screen and (max-width: ${breakpoints.md}) {
    ::before,
    ::after {
      width: 5.93rem;
    }
  }
`;

export const AccentText = styled(Typography)`
  font-weight: 600;
  cursor: pointer;
`;
