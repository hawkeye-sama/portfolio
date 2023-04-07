import styled, { css } from 'assets/themes';
import breakpoints from 'assets/themes/breakpoints';
import Svg from 'components/Svg';
import { ISvgProps } from 'components/Svg/types';

import { IButtonProps } from './types';

export const Button = styled.button<IButtonProps>`
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  font-weight: 400;
  text-decoration: none;
  letter-spacing: 2px;
  border: 1px solid transparent;
  background: transparent;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  gap: 12px;
  align-items: center;

  white-space: nowrap;

  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
    transform: scale(1.04);
  }

  &:active {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transform: scale(0.96);
  }

  ${(props) => {
    switch (props.size) {
      case 'small':
        return css`
          font-size: 0.875rem;
          line-height: 16px;
          padding: 8px 16px;
        `;
      case 'medium':
      default:
        return css`
          font-size: 1rem;
          line-height: 24px;
          padding: 16px 32px;
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
    padding: 8px 16px;
    letter-spacing: 1px;
    font-size: 12px;
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
