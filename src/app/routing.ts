import { ModuleWithProviders } from '@angular/core/core';
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { SingleNewsComponent } from './news/single-news/single-news.component';


const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'news/:id', component: SingleNewsComponent},
    { path: 'news/category/:id', component: NewsComponent},    
    { path: '**', component: HomeComponent },
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);