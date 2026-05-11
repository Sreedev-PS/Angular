import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { providerArray } from './shared/providers/providers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes,withPreloading(PreloadAllModules)),
    ...providerArray
  ]
};
