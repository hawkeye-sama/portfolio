import styled from 'assets/themes';
import breakpoints from 'assets/themes/breakpoints';
import { Stripe as _Stripe } from 'components/App/styled.components';
import { Icon } from 'components/Icon';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.625rem;
  @media only screen and (max-width: ${breakpoints.md}) {
    flex-direction: column;
  }
`;

export const Stripe = styled(_Stripe)`
  @media only screen and (max-width: ${breakpoints.md}) {
    flex-direction: column;
    align-items: start;
    gap: 0.625rem;
    padding: 3.125rem 0rem 3.125rem 0.625rem;
  }
`;

export const IconWithText = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 1.25rem;
`;

export const PlatformText = styled.h3`
  @media only screen and (max-width: ${breakpoints.md}) {
    flex-direction: column;
  }
`;

export const HeartIcon = styled(Icon)`
  @media only screen and (max-width: ${breakpoints.md}) {
    display: none;
  }
`;
