import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { avisReducer } from './common/store/reducers/avis.reducer';
import { provideStore } from '@ngrx/store';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(),
              provideRouter(appRoutes),provideHttpClient(),
               provideStore({ avis_ngrx: avisReducer }),
            ],
};
