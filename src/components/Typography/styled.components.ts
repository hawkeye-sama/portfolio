import styled, { css } from '../../assets/themes';
import { ITypographyProps } from './types';

export const Typography = styled.span<ITypographyProps>`
  line-height: 1.5rem;
  letter-spacing: 0.0625rem;
  ${(props) =>
    props.lead &&
    css`
      font-size: 18px;
      line-height: 1.5rem;
    `};

  color: ${(props) => {
    const {
      theme: {
        colors: { accent, text, secondaryText, bodyText },
      },
    } = props;
    switch (props.variant) {
      case 'accent':
        return accent;

      case 'highlighted':
        return text;

      case 'secondary':
        return secondaryText;

      case 'body':
      default:
        return bodyText;
    }
  }};
`;
