import styled from 'assets/themes';

import { Section as _Section } from '../../styled.components';

export const ExperienceText = styled.h3`
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
    width: 270px;
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

export const CardContainer = styled.div<{ isDisabled: boolean }>`
  background-color: ${(props) => props.theme.colors.cardHighlighted};
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  max-width: 400px;
  padding: 24px;
  width: 100%;
  transition: background-color 0.2s ease-in-out;

  h2 {
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-weight: 600;
  }

  h3 {
    color: ${(props) => props.theme.colors.text};
    font-size: 18px;
    font-weight: 400;
    margin: 0 0 5px;
  }

  p {
    color: ${(props) => props.theme.colors.bodyText};
    font-size: 16px;
    line-height: 1.5;
    margin: 0 0 16px;
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
  padding: 50px 0;
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

  max-width: 770px;
  width: 100%;
  justify-content: center;
`;
