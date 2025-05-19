import { Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';

export const routes: Routes = [
    {
        path: 'promise', component: PromiseComponent
    },
    { path: "**", redirectTo: 'promise' }
];
