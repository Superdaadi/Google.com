import { Routes } from '@angular/router';
import { GoogleComponent } from './google/google.component';
import { HompageComponent } from './hompage/hompage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export const routes: Routes = [
    {path: 'e', component: GoogleComponent},
    {path: 'home', component:HompageComponent},
    {path: 'nav', component:NavbarComponent},
    {path: 'side', component:SidebarComponent}
];
