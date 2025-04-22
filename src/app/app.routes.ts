import { Routes } from '@angular/router';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
    {path:'', component: RxjsLearningComponent},
    {path:'search', component: SearchComponent}
];
