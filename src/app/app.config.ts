import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { providerArray } from './shared/providers/providers';
import { customPreload } from './shared/services/custom-statergy/customStatergy';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { interceptor } from './shared/Interceptor/interceptor';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './shared/states/counter/counter-reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideHttpClient(withInterceptors([interceptor])),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withPreloading(customPreload)),
    ...providerArray,
    provideStore(
      {
        counter_Value:counterReducer
      }
    )
]
};
