import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { DragScrollModule } from 'ngx-drag-scroll';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ComuniService } from './services/comuni.service';

@NgModule({
  declarations: [AppComponent],
  imports: [ HttpClientModule, DragScrollModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [ComuniService, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
