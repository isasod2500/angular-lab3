import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Bild } from './bild/bild';
import { Convert } from './convert/convert';
import { NotFound } from './not-found/not-found';


export const routes: Routes = [
    { path: "home", component: Home},
    { path: "bild", component: Bild},
    { path: "convert", component: Convert},
    { path: "", redirectTo: "home", pathMatch: "full"},
    { path: "404", component: NotFound },
    { path: "**", redirectTo: "404", pathMatch: "full"}
];
