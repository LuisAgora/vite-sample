import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '@/components';
import { BrowserTracing } from '@sentry/tracing';

ReactDOM.render(<App />, document.getElementById('root'));
