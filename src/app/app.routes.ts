import { Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FormEventComponent } from './observable/form-event/form-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFormComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomComponent } from './observable/custom/custom.component';


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
        { path: 'to-array', component: ToArrayComponent },
        { path: 'interval', component: IntervalComponent },
        { path: 'custom', component: CustomComponent }
        ]
    },
    { path: "**", redirectTo: 'promise' }
];
