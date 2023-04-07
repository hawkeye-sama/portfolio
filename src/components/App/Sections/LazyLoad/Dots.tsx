import React from 'react';

import { Dot, DotsWrapper } from './styled.components';

function Dots() {
  return (
    <DotsWrapper>
      <Dot delay={0.12} />
      <Dot delay={0.1 + 0.2} />
      <Dot delay={0.1 + 0.35} />
    </DotsWrapper>
  );
}

export default Dots;
