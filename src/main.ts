import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './app/counter/store/counter.reducer';

bootstrapApplication(AppComponent, {
  
  providers:[provideRouter(routes), provideHttpClient(), provideStore({counter:counterReducer})]
})
  .catch((err) => console.error(err));
