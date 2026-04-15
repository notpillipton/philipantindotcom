import { WebComponentWrapper } from '@angular-architects/module-federation-tools';
import { Route } from '@angular/router';
import { environment } from '../environments/environment';

export const appRoutes: Route[] = [
  {
    path: '',
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry: environment.resumeRemoteUrl,
      remoteName: 'resume',
      exposedModule: './Module',
      elementName: 'resume-mfe',
    },
  },
  {
    path: 'competencies',
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry: environment.resumeRemoteUrl,
      remoteName: 'resume',
      exposedModule: './Module',
      elementName: 'resume-mfe',
    },
  },
  {
    path: 'past',
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry: environment.resumeRemoteUrl,
      remoteName: 'resume',
      exposedModule: './Module',
      elementName: 'resume-mfe',
    },
  },
];
