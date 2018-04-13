import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import { routerRedux } from 'dva/router';



let Router = DefaultRouter;
const { ConnectedRouter } = routerRedux;
Router = ConnectedRouter;


const routes = [
  {
    "component": require('/Users/hjd/dc/app/yzzc2/wap/node_modules/_umi-build-dev@0.15.0@umi-build-dev/lib/DefaultLayout.js').default,
    "routes": [
      {
        "path": "/index.html",
        "exact": true,
        "component": () => React.createElement(require('/Users/hjd/dc/app/yzzc2/wap/node_modules/_umi-build-dev@0.15.0@umi-build-dev/lib/Compiling.js').default, { route: '/index.html' })
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default
      },
      {
        "path": "/Test.html",
        "exact": true,
        "component": () => React.createElement(require('/Users/hjd/dc/app/yzzc2/wap/node_modules/_umi-build-dev@0.15.0@umi-build-dev/lib/Compiling.js').default, { route: '/Test.html' })
      },
      {
        "path": "/QAndA.html",
        "exact": true,
        "component": () => React.createElement(require('/Users/hjd/dc/app/yzzc2/wap/node_modules/_umi-build-dev@0.15.0@umi-build-dev/lib/Compiling.js').default, { route: '/QAndA.html' })
      }
    ]
  }
];

export default function() {
  return (
<Router history={window.g_history}>
  { renderRoutes(routes) }
</Router>
  );
}
