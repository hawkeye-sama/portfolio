import styled from 'assets/themes';
import breakpoints from 'assets/themes/breakpoints';

import { Section as _Section } from '../../styled.components';

export const Section = styled(_Section)`
  padding-left: 100px;
  display: flex;
  flex-direction: row;
`;

export const ContentWrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
`;

export const ButtonsWrapper = styled.div`
  margin-top: 30px;
  gap: 16px;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: ${breakpoints.lg}) {
    flex-direction: column;
    align-items: center;
  }
  margin-right: auto;
`;

export const South = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;

  align-items: center;
  justify-content: center;

  padding-bottom: 24px;
  margin-right: auto;
`;

export const MainContent = styled(_Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImageContent = styled.div`
  padding-right: 20px;
  align-self: center;
`;

export const HeaderText = styled.h5`
  color: ${(props) => props.theme.colors.text};
  margin-right: auto;
`;

export const SpanText = styled.span`
  color: ${(props) => props.theme.colors.accent};
`;

export const NameText = styled.h1`
  margin-top: 20px;
  color: white;
  margin-right: auto;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  line-height: 1.1;
  text-align: start;
`;

export const SubHeaderText = styled(NameText)`
  color: ${(props) => props.theme.colors.text};
  margin-top: 0px;
`;
