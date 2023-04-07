import styled from 'assets/themes';
import breakpoints from 'assets/themes/breakpoints';

import { Section as _Section } from '../../styled.components';

export const Section = styled(_Section)`
  padding-left: 10vw;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: ${breakpoints.md}) {
    flex-direction: column;
    padding: 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: start;
  flex-direction: column;
`;

export const ButtonsWrapper = styled.div`
  margin-top: 3rem;
  gap: 1.6rem;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: ${breakpoints.lg}) {
    flex-direction: column;
    align-items: start;
    margin-top: 2rem;
    gap: 1rem;
  }
`;

export const South = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;

  align-items: center;
  justify-content: center;

  padding-bottom: 2.4rem;
`;

export const MainContent = styled(_Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImageContent = styled.div`
  padding-right: 2vw;
  align-self: center;
  @media only screen and (max-width: ${breakpoints.md}) {
    display: none;
  }
`;

export const HeaderText = styled.h5`
  color: ${(props) => props.theme.colors.text};
`;

export const SpanText = styled.span`
  color: ${(props) => props.theme.colors.accent};
`;

export const NameText = styled.h1`
  margin-top: 2rem;
  margin-right: auto;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  line-height: 1.1;
  text-align: start;
  @media only screen and (max-width: ${breakpoints.md}) {
    margin-top: 1rem;
  }
`;

export const SubHeaderText = styled(NameText)`
  color: ${(props) => props.theme.colors.text};
  margin-top: 0;
`;
