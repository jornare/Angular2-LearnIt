import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Page1} from './page1';
import {Page2} from './page2';

const appRoutes: Routes = [
    {
        path: 'Page1',
        component: Page1
    },
    {
        path: 'Page2',
        component: Page2
    },
    {
        path: '',
        redirectTo: 'Page1',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
