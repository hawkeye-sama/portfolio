import { Icon } from 'components/Icon';
import ThemeContext from 'contexts/ThemeContext';
import React, { useContext } from 'react';

import { IconLink, LinkTitle } from './styled.components';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <IconLink onClick={toggleTheme}>
      <Icon icon={theme === 'Dark' ? 'moon' : 'sun'} variant="stroke" highlighted />
      <LinkTitle>{theme} Mode</LinkTitle>
    </IconLink>
  );
}

export default ThemeSwitcher;
