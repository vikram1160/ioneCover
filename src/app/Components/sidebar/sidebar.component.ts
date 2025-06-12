import { Component } from '@angular/core';
import { MenubarFooterComponent } from '../menubar-footer/menubar-footer.component';
import { MenubarHeaderComponent } from "../menubar-header/menubar-header.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
 
sidebarOpen = true;



//   isSidebarOpen: boolean = false;

// toggleSidebar() {
//   this.isSidebarOpen = !this.isSidebarOpen;
// }

}
