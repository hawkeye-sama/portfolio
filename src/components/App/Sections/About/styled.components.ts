import breakpoints from 'assets/themes/breakpoints';
import { Typography } from 'components/Typography';
import styled from 'styled-components';

import { Section as _Section } from '../../styled.components';

export const Section = styled(_Section)`
  gap: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: ${breakpoints.md}) {
    flex-direction: column;
  }
`;

export const AboutMeWrapper = styled.div`
  max-width: 600px;
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

export const AboutMeText = styled.h3`
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;

  ::before,
  ::after {
    content: '';
    display: block;
    height: 5px;
    background: ${(props) => props.theme.colors.accent};
    position: absolute;
    width: 200px;
  }

  ::before {
    left: -4px;
  }

  ::after {
    right: -4px;
  }
`;

export const AccentText = styled(Typography)`
  font-weight: 600;
  cursor: pointer;
`;
