import { Component } from '@angular/core';
import { MenubarFooterComponent } from '../menubar-footer/menubar-footer.component';
import { MenubarHeaderComponent } from "../menubar-header/menubar-header.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MenubarFooterComponent, MenubarHeaderComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
