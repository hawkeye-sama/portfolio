import styled from 'assets/themes';

import { Section as _Section } from '../../styled.components';

export const Section = styled(_Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const ContentWrapper = styled.div`
  max-width: 28.125rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
`;
