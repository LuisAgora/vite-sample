import React, { FunctionComponent } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
// import { Router } from '..';
import { GlobalStyles } from '.';
// import { GlobalProviders } from '@/contexts';
// import { MetaTagsSEO } from '@/components';
import TagManager from 'react-gtm-module';
import { hotjar } from 'react-hotjar';
import 'animate.css';
import { Contenedor } from '@/containers';

// Initialize Google Tag Manager on production environment only
if (import.meta.env.VITE_NODE_ENV == 'production') {
  const tagManagerArgs = {
    gtmId: 'GTM-P7BX3WH'
  };

  TagManager.initialize(tagManagerArgs);
  hotjar.initialize(2784225, 6);
}

export const App: FunctionComponent = () => (
  <Contenedor text='hola' />
)

// (
//   <GlobalProviders>
//     <MetaTagsSEO title="Ágora | Red de profesionales únicos" />
//     <Router />
//     <GlobalStyles />
//     <ReactQueryDevtools initialIsOpen={false} />
//   </GlobalProviders>
// );
