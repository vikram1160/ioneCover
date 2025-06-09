import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent, } from './Components/sidebar/sidebar.component';
import { HeaderComponent } from './Components/header/header.component';
import { SidebarModule } from 'primeng/sidebar';
import { FooterComponent } from './Components/footer/footer.component';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { HomeComponent } from "./Components/home/home.component";
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Components/login/login.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, HeaderComponent, FooterComponent, SidebarModule, SidebarComponent, PanelModule,
    ToolbarModule, CommonModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ioneCover';



isLoginPage = false;

constructor(private router: Router) {}

ngOnInit() {
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      this.isLoginPage = event.urlAfterRedirects === '/login'; // or any condition
    }
  });
}


  
}
