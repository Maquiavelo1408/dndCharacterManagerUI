import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home/home.component";

export const AppRoutes: Routes=[
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'character',
        loadChildren: './character/character.module/#CharacterModule'
    },
    {
        path:'*',
        redirectTo: '404'
    }
];