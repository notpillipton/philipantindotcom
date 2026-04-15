import { injectThemeVariables } from '@shared/theme-tokens';

// Inject shared theme tokens into the global scope as CSS variables
injectThemeVariables();

import('./bootstrap').catch((err) => console.error(err));
