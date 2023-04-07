import styled, { css } from 'assets/themes';
import breakpoints from 'assets/themes/breakpoints';
import Svg from 'components/Svg';
import { ISvgProps } from 'components/Svg/types';

import { IButtonProps } from './types';

export const Button = styled.button<IButtonProps>`
  outline: none;
  cursor: pointer;
  border-radius: 0.5rem;
  font-weight: 400;
  text-decoration: none;
  letter-spacing: 0.125rem;
  border: 0.0625rem solid transparent;
  background: transparent;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  gap: 0.75rem;
  align-items: center;

  white-space: nowrap;

  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.12), 0 0.125rem 0.25rem rgba(0, 0, 0, 0.24);
    transform: scale(1.04);
  }

  &:active {
    box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.12), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.24);
    transform: scale(0.96);
  }

  ${(props) => {
    switch (props.size) {
      case 'small':
        return css`
          font-size: 14px;
          line-height: 1rem;
          padding: 0.5rem 1rem;
        `;
      case 'medium':
      default:
        return css`
          font-size: 16px;
          line-height: 1.5rem;
          padding: 1rem 2rem;
        `;
    }
  }}
  ${(props) => {
    switch (props.variation) {
      case 'outlined':
        return css`
          background: transparent;
          border-color: ${props.theme.colors.accent};
          color: ${props.theme.colors.accent};
        `;
      case 'plain':
        return css`
          color: ${props.theme.colors.accent};
        `;
      case 'filled':
      default:
        return css`
          background: ${props.theme.colors.accent};
          border-color: ${props.theme.colors.accent};
          color: white;
        `;
    }
  }};
  background: ${(props) => props.background};
  color: ${(props) => props.contentColor};

  @media only screen and (max-width: ${breakpoints.md}) {
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    letter-spacing: 0.0625rem;
    font-size: 0.75rem;
  }
`;

export const Icon = styled(Svg)<IButtonProps & ISvgProps>`
  * {
    fill: ${(props) => props.contentColor || props.theme.colors.text};
    ${(props) => {
      switch (props.variation) {
        case 'outlined':
        case 'plain':
          return css`
            fill: ${props.theme.colors.accent};
          `;

        case 'filled':
        default:
          return css`
            fill: white;
          `;
      }
    }};
  }

  @media only screen and (max-width: ${breakpoints.md}) {
    transform: scale(0.875);
  }
`;
