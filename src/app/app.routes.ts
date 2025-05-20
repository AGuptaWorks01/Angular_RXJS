import { Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FormEventComponent } from './observable/form-event/form-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFormComponent } from './observable/of-from/of-from.component';


export const routes: Routes = [
    {
        path: 'promise', component: PromiseComponent
    },
    {
        path: 'observable', component: ObservableComponent,
        children: [{
            path: '', component: ListComponent
        },
        { path: 'formEvent', component: FormEventComponent },
        { path: 'ofForm', component: OfFormComponent },
            { path: 'interval', component: IntervalComponent }]
    },
    { path: "**", redirectTo: 'promise' }
];
