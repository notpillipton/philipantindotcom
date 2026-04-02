import { WebComponentWrapper } from '@angular-architects/module-federation-tools';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '/',
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      remoteName: 'resume',
      exposedModule: './Module',
      elementName: 'resume',
    },
  }
];
