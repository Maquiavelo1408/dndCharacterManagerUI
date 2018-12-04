import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home/home.component";
import { AdminLayoutComponent } from "./layouts/admin/admin-layout.component";

export const AppRoutes: Routes=[
    {
        path: '',
        component: AdminLayoutComponent
    },

    {
        path:'*',
        redirectTo: '404'
    }
];