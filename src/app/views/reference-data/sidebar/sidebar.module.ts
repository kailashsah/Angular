import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import {MegaMenuModule} from 'primeng/megamenu'
import {PanelMenuModule} from 'primeng/panelmenu'


@NgModule({
  declarations: [SidebarComponent],
  imports: [  CommonModule, SidebarComponent, PanelMenuModule, MegaMenuModule  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }
