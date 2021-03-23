import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReferenceDataComponent } from './views/reference-data/reference-data.component';
import { HeaderComponent } from './views/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DailyDataComponent } from './views/daily-data/daily-data.component';
import { SidebarComponent } from './views/reference-data/sidebar/sidebar.component';
import { SidebarStrategiesComponent } from './views/strategies/sidebar/sidebar.component';
import { StrategiesComponent } from './views/strategies/strategies.component';

@NgModule({
  declarations: [
    AppComponent,
    ReferenceDataComponent,
    HeaderComponent,
    DailyDataComponent,
    SidebarComponent,
    StrategiesComponent,
    SidebarStrategiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
