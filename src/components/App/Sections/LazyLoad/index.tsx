import React, { ReactNode, Suspense } from 'react';

import Fallback from './Fallback';

type LazyLoadProps = {
  children: ReactNode;
};

function LazyLoad({ children }: LazyLoadProps) {
  return <Suspense fallback={<Fallback />}>{children}</Suspense>;
}

export default LazyLoad;
