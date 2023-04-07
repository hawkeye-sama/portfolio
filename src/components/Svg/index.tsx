import React, { Suspense, lazy, memo } from 'react';

import { ISvgProps } from './types';

function Svg({ icon, ...props }: ISvgProps) {
  const Icon = lazy(() => import(`assets/svgs/${icon}.svg`));
  if (!Icon) return <div />;

  return (
    <Suspense fallback={<div />}>
      <Icon className={props.className} style={props.style} highlighted="true" />
    </Suspense>
  );
}

export default memo(Svg);
