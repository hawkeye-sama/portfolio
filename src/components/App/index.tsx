import { darkTheme, lightTheme } from 'assets/themes';
import ThemeContext from 'contexts/ThemeContext';
import { TTheme } from 'contexts/ThemeContext/types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import React, { lazy, useMemo, useReducer } from 'react';
import { ThemeProvider } from 'styled-components';

import LazyLoad from './Sections/LazyLoad';
import { CSSReset, Headings } from './styled.components';

const Navigation = lazy(() => import('./Sections/Navigation'));
const HeroSection = lazy(() => import('./Sections/Hero'));
const AboutSection = lazy(() => import('./Sections/About'));
const WhatIUseStrip = lazy(() => import('./Sections/Tools'));
const LetsGetInTouchSection = lazy(() => import('./Sections/Contact'));
const ProjectsGallerySection = lazy(() => import('./Sections/Projects'));
const MySkillsAndExpertiseSection = lazy(() => import('./Sections/Experience'));

dayjs.extend(relativeTime);

function App() {
  const [theme, toggleTheme] = useReducer(
    (_theme: TTheme): TTheme => (_theme === 'Dark' ? 'Light' : 'Dark'),
    'Dark',
  );

  const currentTheme = useMemo(() => (theme === 'Dark' ? darkTheme : lightTheme), [theme]);

  const themeValue = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={themeValue}>
      <ThemeProvider theme={currentTheme}>
        <CSSReset />
        <Headings />
        <LazyLoad>
          <HeroSection />
        </LazyLoad>{' '}
        <LazyLoad>
          <AboutSection />
        </LazyLoad>
        <LazyLoad>
          <WhatIUseStrip />
        </LazyLoad>
        <LazyLoad>
          <MySkillsAndExpertiseSection />
        </LazyLoad>
        <LazyLoad>
          <ProjectsGallerySection />
        </LazyLoad>
        <LazyLoad>
          <LetsGetInTouchSection />
        </LazyLoad>
        <LazyLoad>
          <Navigation />
        </LazyLoad>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
