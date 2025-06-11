import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthGuard } from './Components/login/auth.guard';
import { HeaderComponent } from './Components/header/header.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { PartyComponent } from './Components/party/party.component';
import { PartyDetailsComponent } from './Components/party-details/party-details.component';


export const routes: Routes = [

   { path: '', redirectTo: 'login', pathMatch: 'full' },
   { path: 'login', component: LoginComponent },
   { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
   { path: 'header', component: HeaderComponent, canActivate: [AuthGuard] },
   { path: 'sidebar', component: SidebarComponent, canActivate: [AuthGuard] },
   { path: 'party', component: PartyComponent, canActivate: [AuthGuard] },
   { path: 'party-details', component:PartyDetailsComponent, canActivate: [AuthGuard] },




];
