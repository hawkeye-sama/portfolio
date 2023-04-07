import { Icon } from 'components/Icon';
import ThemeContext from 'contexts/ThemeContext';
import React, { useContext } from 'react';

import { LinkTitle, SwitcherIcon } from './styled.components';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <SwitcherIcon onClick={toggleTheme}>
      <Icon icon={theme === 'Dark' ? 'moon' : 'sun'} variant="stroke" highlighted />
      <LinkTitle>{theme} Mode</LinkTitle>
    </SwitcherIcon>
  );
}

export default ThemeSwitcher;
