import styled from 'assets/themes';
import breakpoints from 'assets/themes/breakpoints';

import { Section as _Section } from '../../styled.components';

export const IconsWrapper = styled.div`
  padding-top: 8px;
  display: flex;
  gap: 16px;
`;

export const ProjectText = styled.h3`
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
    width: 285px;
  }

  ::before {
    left: -4px;
  }

  ::after {
    right: -4px;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: ${breakpoints.lg}) {
    flex-direction: column;
    align-items: center;
  }
  margin-right: auto;
`;

export const Section = styled(_Section)`
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 48px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  max-width: 770px;
  width: 100%;
`;
