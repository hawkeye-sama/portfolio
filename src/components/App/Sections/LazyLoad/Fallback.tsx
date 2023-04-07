import React from 'react';

import Dots from './Dots';
import { FallbackWrapper } from './styled.components';

function Fallback() {
  return (
    <FallbackWrapper>
      <Dots />
    </FallbackWrapper>
  );
}

export default Fallback;
