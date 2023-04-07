import styled from 'assets/themes';
import breakpoints from 'assets/themes/breakpoints';

import { Section as _Section } from '../../styled.components';

export const IconsWrapper = styled.div`
  padding-top: 0.5rem;
  display: flex;
  gap: 1rem;
`;

export const ProjectText = styled.h3`
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
    height: 0.3125rem;
    background: ${(props) => props.theme.colors.accent};
    position: absolute;
    width: 17.8125rem;
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
  padding-top: 3.125rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 3rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  max-width: 48.125rem;
  width: 100%;
`;

export const CardContainer = styled.div<{ isDisabled: boolean }>`
  background-color: ${(props) => props.theme.colors.cardHighlighted};
  border-radius: 1.25rem;
  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  max-width: 23.4375rem;
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

export const ImageContainer = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 12.5rem;
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 1.25rem;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.3125rem;
  color: ${(props) => props.theme.colors.text};
`;

export const ProjectDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.4;
  margin: 0;
  color: ${(props) => props.theme.colors.bodyText};
`;

export const InfoContainer = styled.div`
  padding: 0.625rem 1.25rem 1.875rem 1.25rem;
`;
