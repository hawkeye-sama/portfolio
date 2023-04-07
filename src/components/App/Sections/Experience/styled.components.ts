import styled from 'assets/themes';
import breakpoints from 'assets/themes/breakpoints';

import { Section as _Section } from '../../styled.components';

export const ExperienceText = styled.h3`
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
    width: 16.5rem;
  }

  ::before {
    left: -0.25rem;
  }

  ::after {
    right: -0.25rem;
  }

  @media only screen and (max-width: ${breakpoints.md}) {
    margin-bottom: 0rem;

    ::before,
    ::after {
      width: 5.93rem;
    }
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  @media only screen and (max-width: ${breakpoints.md}) {
    flex-direction: column;
  }
`;

export const CardContainer = styled.div<{ isDisabled: boolean }>`
  background-color: ${(props) => props.theme.colors.cardHighlighted};
  border-radius: 1.25rem;
  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  max-width: 25rem;
  padding: 1.5rem;
  width: 100%;
  transition: background-color 0.2s ease-in-out;

  h2 {
    color: ${(props) => props.theme.colors.text};
    font-size: 1.5rem;
    font-weight: 600;
  }

  h3 {
    color: ${(props) => props.theme.colors.text};
    font-size: 1.125rem;
    font-weight: 400;
    margin: 0 0 0.3125rem;
  }

  p {
    color: ${(props) => props.theme.colors.bodyText};
    font-size: 1rem;
    line-height: 1.5;
    margin: 0 0 1rem;
  }

  &:hover {
    background-color: ${(props) =>
      props.isDisabled ? props.theme.colors.error : props.theme.colors.cardAccent};
    cursor: ${(props) => (props.isDisabled ? 'default' : 'pointer')};
    h2,
    h3,
    p {
      color: ${(props) => props.theme.colors.text};
    }
  }
`;

export const Section = styled(_Section)`
  padding: 3.125rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  @media only screen and (max-width: ${breakpoints.md}) {
    flex-direction: column;
    padding: 4rem 1.5rem 0rem 1.5rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  max-width: 48.125rem;
  width: 100%;
  justify-content: center;
`;
