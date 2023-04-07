import * as styledCompnents from 'styled-components';
import baseStyled, { ThemedStyledComponentsModule, ThemedStyledInterface } from 'styled-components';

import { ITheme } from './types';

const styled = baseStyled as ThemedStyledInterface<ITheme>;

/// ///////////
// THEMES
/// ///////////
export const lightTheme: ITheme = {
  colors: {
    accent: '#2196F3',
    background: '#F6F6F6',
    backgroundHighlighted: '#C1E3FF',
    cardHighlighted: '#f8fafd',
    icon: '#9E9E9E',
    secondaryText: '#9E9E9E',
    text: '#212121',
    bodyText: '#757575',
    cardAccent: '#c2e7ff',
    error: '#FFBDC9',
  },
};

export const darkTheme: ITheme = {
  colors: {
    accent: '#2196F3',
    background: '#212121',
    backgroundHighlighted: '#333333',
    cardHighlighted: '#333333',
    icon: '#BDBDBD',
    secondaryText: '#BDBDBD',
    text: '#FFFFFF',
    bodyText: '#B6B6B6',
    cardAccent: '#2196F3',
    error: '#CF6679',
  },
};

export const { css, keyframes, createGlobalStyle } =
  styledCompnents as unknown as ThemedStyledComponentsModule<ITheme>;

export default styled;
