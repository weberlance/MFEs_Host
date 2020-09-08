import React from 'react';
import MicroFrontend from '../../components/MicroFrontend';

const innerApp1Host = 'https://raw.githubusercontent.com/weberlance/MFEs_InnerApp1/master/build/static/js';
const innerApp2Host = 'http://somesite.com';

export const InnerApp1 = ({ history }) => (
  <MicroFrontend history={history} name="InnerApp1" host={innerApp1Host} />
);

export const InnerApp2 = ({ history }) => (
  <MicroFrontend history={history} name="InnerApp2" host={innerApp2Host} />
);
